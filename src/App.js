import React from 'react';
import HeroBanner from "./sections/HeroBanner";
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Footer />
        </>
    );
};

export default App;
