import React from 'react';
import './LandingPage.scss';
import HeroSection from './HeroSection';
import BrandsSection from './BrandsSection';
import FoundersSection from './FoundersSection';
import PartnersSection from './PartnersSection';
import ConnectSection from './ConnectSection';
import ContactFormSection from './ContactFormSection';
import Header from './components/Header';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <BrandsSection />
      <FoundersSection />
      <PartnersSection />
      <ConnectSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default LandingPage; 