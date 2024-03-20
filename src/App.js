import React from 'react';
import HeroBanner from "./sections/HeroBanner";
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

const App = () => {
    return (
        <>
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Timeline />
            <Footer />
        </>
    );
};

export default App;
