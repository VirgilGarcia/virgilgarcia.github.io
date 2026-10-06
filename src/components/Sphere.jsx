import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '../lib/gsap';

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uMouse;
  uniform float uCamDist;
  attribute float aRandom;
  varying float vDepth;
  varying float vRandom;

  // Bruit pseudo-aléatoire léger, suffisant pour faire « respirer » la sphère
  float wave(vec3 p) {
    return sin(p.x * 1.7 + uTime * 0.6) * cos(p.y * 1.3 + uTime * 0.4) * sin(p.z * 1.1 + uTime * 0.5);
  }

  void main() {
    vec3 p = position;
    float n = wave(p);
    // Le pointeur repousse la surface du côté où il se trouve
    float pull = max(dot(normalize(p.xy), uMouse), 0.0) * length(uMouse);
    p += normalize(p) * (n * 0.35 + pull * 0.6);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + aRandom * 3.0) * uPixelRatio * (uCamDist / -mv.z);
    vDepth = smoothstep(-14.0, -6.0, mv.z);
    vRandom = aRandom;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vDepth;
  varying float vRandom;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d) * mix(0.15, 1.0, vDepth);
    vec3 color = mix(uColorA, uColorB, step(0.94, vRandom));
    gl_FragColor = vec4(color, alpha);
  }
`;

// Répartition homogène des points (spirale de Fibonacci)
const fibonacciSphere = (count, radius) => {
  const positions = new Float32Array(count * 3);
  const randoms = new Float32Array(count);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    positions.set([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius], i * 3);
    randoms[i] = Math.random();
  }
  return { positions, randoms };
};

const Sphere = () => {
  const mount = useRef(null);

  useEffect(() => {
    const container = mount.current;
    const reduced = prefersReducedMotion();
    const isSmall = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 11;

    const { positions, randoms } = fibonacciSphere(isSmall ? 5000 : 7000, 4);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    const uniforms = {
      uTime: { value: 0 },
      uPixelRatio: { value: pixelRatio },
      uMouse: { value: new THREE.Vector2() },
      uCamDist: { value: 11 },
      uColorA: { value: new THREE.Color('#5ee7ff') },
      uColorB: { value: new THREE.Color('#ff5a1f') },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      // Sur mobile (portrait) on recule la caméra pour garder la sphère entière
      camera.position.z = w / h < 1 ? 16 : 11;
      uniforms.uCamDist.value = camera.position.z;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const target = new THREE.Vector2();
    const onPointer = (e) => {
      target.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    };
    window.addEventListener('pointermove', onPointer);

    // Pas de rendu quand le hero n'est pas visible
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(container);

    const start = performance.now();
    let frame;
    const render = () => {
      frame = requestAnimationFrame(render);
      if (!visible) return;
      const t = (performance.now() - start) / 1000;
      uniforms.uTime.value = t;
      uniforms.uMouse.value.lerp(target, 0.05);
      points.rotation.y = t * 0.06 + uniforms.uMouse.value.x * 0.3;
      points.rotation.x = uniforms.uMouse.value.y * -0.2;
      renderer.render(scene, camera);
    };

    if (reduced) renderer.render(scene, camera);
    else render();
    requestAnimationFrame(() => container.classList.add('is-ready'));

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="sphere" ref={mount} aria-hidden="true" />;
};

export default Sphere;
