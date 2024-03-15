import React, { useEffect } from 'react';
import Sphere from "../components/Sphere";
import Bull from '../components/Bull';


const HeroBanner = () => {

    useEffect(() => {
        // Animate crescendo span
        const spans = document.querySelectorAll('h1 span');
        let delay = 50; // Délai en millisecondes
    
        spans.forEach((span, index) => {
            setTimeout(() => {
                // Ajoute la classe animActivate
                span.classList.add('animActivate');
            }, index * delay);
        });
    }, []);

    return (
        <div className='banner'>
            <Bull />
            <Bull />
            <Bull />
            <Sphere />
            <h2>Virgil Garcia.</h2>
            <h1>
                <p className="welcome">Welcome to my portfolio.</p>
                <span>S</span>
                <span>O</span>
                <span>F</span>
                <span>T</span>
                <span>W</span>
                <span>A</span>
                <span>R</span>
                <span>E</span>
                &nbsp;&nbsp;
                <span>A</span>
                <span>R</span>
                <span>C</span>
                <span>H</span>
                <span>I</span>
                <span>T</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
            </h1>
            <p id="scroll">⌵</p>
        </div>
    );
};

export default HeroBanner;
