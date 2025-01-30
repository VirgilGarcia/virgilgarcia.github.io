import React, { useEffect } from 'react';
import Sphere from "../components/Sphere";
import Bull from '../components/Bull';


const HeroBanner = () => {

    useEffect(() => {
        // Animate crescendo span
        const spans = document.querySelectorAll('.globalTitle span');
        let delay = 50; // Délai en millisecondes
    
        spans.forEach((span, index) => {
            setTimeout(() => {
                // Ajoute la classe animActivate
                span.classList.add('animActivate');
            }, index * delay);
        });
    }, []);

    return (
        <div className='HeroBannerContainer'>
            <Bull />
            <Bull />
            <Sphere />
            <h1>Virgil Garcia.</h1>
            <div className='globalTitle'>
                <p className="welcome">Welcome to my portfolio.</p>
                <div id="title1">
                    <span>S</span>
                    <span>O</span>
                    <span>F</span>
                    <span>T</span>
                    <span>W</span>
                    <span>A</span>
                    <span>R</span>
                    <span>E</span>
                </div>

                <div id="title2">
                    <span>A</span>
                    <span>R</span>
                    <span>C</span>
                    <span>H</span>
                    <span>I</span>
                    <span>T</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                </div>

            </div>
            <div id="scroll">
                <span>scroll</span>
                <br />
                <span>⌵</span>
            </div>
        </div>
    );
};

export default HeroBanner;
