import React from 'react';
import '../../App.css';
import HomeSection from '../Elements/HomeSection';
import Guest from '../Elements/Guest';
import Footer from '../Elements/Footer';

function Home() {
    return(
        <>
            <HomeSection />
            <Guest />
            <Footer />
        </>
    )
}

export default Home;