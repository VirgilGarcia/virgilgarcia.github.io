import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Timeline = () => {

    const container = useRef();
    const scrollBall = useRef();

    useGSAP(() => {
      const windowWidth = window.innerWidth;
      let containerWidth, containerHeight;

      if (windowWidth > 1050) {
          containerWidth = 750; 
          containerHeight = 2750;
      } else {
          containerWidth = 250; 
          containerHeight = 1750;
      }

      gsap.to(scrollBall.current, {
          motionPath: {
            path: [
              {x: 0, y: 0},
              {x: containerWidth, y: containerHeight * 0.25},
              {x: 0, y: containerHeight * 0.5},
              {x: containerWidth, y: containerHeight * 0.75},
              {x: containerWidth / 2, y: containerHeight}
            ],
              align: scrollBall.current,
              autoRotate: true,

          },
          ease: "power1.inOut",
          scrollTrigger: {
              trigger: container.current,
              start: "top-=220 top",
              end: "bottom+=100 bottom",
              scrub: 1,
          },
      });
  }, []);

    return (
        <div className="timeline" ref={container}>
            <div className="scrollBall" ref={scrollBall}>🚀</div>
            <div className="step">📌 Planification & Analyse</div>
            <div className="step">🖌️ Conception & Architecture</div>
            <div className="step">💻 Développement & Intégration</div>
            <div className="step">🔍 Tests, Sécurité & Validation</div>
            <div className="step">🚀 Déploiement & Scalabilité</div>
        </div>
    );
};

export default Timeline;
