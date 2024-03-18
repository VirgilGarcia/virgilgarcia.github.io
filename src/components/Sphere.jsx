import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Sphere = () => {
    const sphereRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        // renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x00000, 0)

        camera.position.z = 10;

        if (sphereRef.current) {
            while (sphereRef.current.firstChild) {
                sphereRef.current.removeChild(sphereRef.current.firstChild);
            }
        }
        sphereRef.current.appendChild(renderer.domElement);

        // SPHERE
        const material = new THREE.PointsMaterial({
            color: 0x333477,
            size: 0.04,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthTest: false
        });

        const geometry = new THREE.SphereGeometry(5, 40, 40);

        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(geometry.attributes.position.array, 4));

        const stars = new THREE.Points(starGeometry, material);
        scene.add(stars);

        // Nuage de particules
        const particleGeometry = new THREE.SphereGeometry(5.5, 15, 15);
        const particleMaterial = new THREE.PointsMaterial({
            color: 0xff3300,
            size: 0.02,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthTest: false
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
    
        // Animer
        const animate = () => {
            requestAnimationFrame(animate);

            //EFFET ROTATION SPHERIQUE
            stars.rotation.x += 0.0005;
            stars.rotation.y += 0.0005;

            //EFFET PARTICULES
            const vertices = particles.geometry.attributes.position.array;
            for (let i = 0; i < vertices.length; i += 3) {
                vertices[i] += (Math.random() - 0.5) * 0.01;
                vertices[i + 1] += (Math.random() - 0.5) * 0.01;
                vertices[i + 2] += (Math.random() - 0.5) * 0.01;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }    

        animate();

        // Resize
        function handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', handleResize);

    }, []);
    
    return (
            <div ref={sphereRef} style={{ margin: 'auto'}} />
    );
}

export default Sphere;