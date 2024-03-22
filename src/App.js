import React from 'react';
import HeroBanner from "./sections/HeroBanner";
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Footer from './components/Footer';
import Timeline from './sections/Timeline';
import Project from './sections/Project';
import Contact from './sections/Contact';

const App = () => {
    return (
        <>
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Timeline />
            <Project />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
