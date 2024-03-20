import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Timeline = () => {

    const container = useRef();
    const test = useRef();

    useGSAP(() => {
        gsap.to(test.current, {
            motionPath: {
              path: [
                {x: 0, y: 0},
                {x: 500, y: 250},
                {x: 0, y: 500},
                {x: 500, y: 750},
                {x: 1000, y: 1000},
                {x: 500, y: 1250},
                {x: 1000, y: 1500},
                {x: 500, y: 1750},
                {x: 1000, y: 2000},
              ],
              align: test.current,
              autoRotate: true
            },
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: container.current,
              start: "top 20%",
              end: "bottom 100%",
              scrub: 1,
            },
          });
    }, []);

    return (
        <div className="timeline" ref={container}>
            <div className="conception">FROM CONCEPTION</div>
            <div className="deploiment">TO DEPLOIEMENT</div>
            <div className="test" ref={test}></div>
        </div>
    );
};

export default Timeline;
