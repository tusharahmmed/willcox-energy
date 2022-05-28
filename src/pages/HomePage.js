import React from 'react';
import { ContactsUs, Exploration, FormSection, HeroSection, OurPartner, Stats } from '../components/home';
import { Footer, Header } from '../components/shared';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Stats />
            <Exploration />
            <OurPartner />
            <ContactsUs />
            <FormSection />
            <Footer />
        </>
    );
};

export default HomePage;