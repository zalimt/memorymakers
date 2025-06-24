import React from 'react';
import './PartnersSection.scss';

// Import all partner logos
import partnerLogo1 from './assets/partner-logo1.png';
import partnerLogo2 from './assets/partner-logo2.png';
import partnerLogo3 from './assets/partner-logo3.png';
import partnerLogo4 from './assets/partner-logo4.png';
import partnerLogo5 from './assets/partner-logo5.png';
import partnerLogo6 from './assets/partner-logo6.png';
import partnerLogo7 from './assets/partner-logo7.png';
import partnerLogo8 from './assets/partner-logo8.png';
import partnerLogo9 from './assets/partner-logo9.png';
import partnerLogo10 from './assets/partner-logo10.png';
import partnerLogo11 from './assets/partner-logo11.png';
import partnerLogo12 from './assets/partner-logo12.png';
import partnerLogo13 from './assets/partner-logo13.png';
import partnerLogo14 from './assets/partner-logo14.png';
import partnerLogo15 from './assets/partner-logo15.png';
import partnerLogo16 from './assets/partner-logo16.png';
import partnerLogo17 from './assets/partner-logo17.png';
import partnerLogo18 from './assets/partner-logo18.png';
import partnerLogo19 from './assets/partner-logo19.png';

const partnerLogos = [
  { src: partnerLogo1, alt: 'Partner 1' },
  { src: partnerLogo2, alt: 'Partner 2' },
  { src: partnerLogo3, alt: 'Partner 3' },
  { src: partnerLogo4, alt: 'Partner 4' },
  { src: partnerLogo5, alt: 'Partner 5' },
  { src: partnerLogo6, alt: 'Partner 6' },
  { src: partnerLogo7, alt: 'Partner 7' },
  { src: partnerLogo8, alt: 'Partner 8' },
  { src: partnerLogo9, alt: 'Partner 9' },
  { src: partnerLogo10, alt: 'Partner 10' },
  { src: partnerLogo11, alt: 'Partner 11' },
  { src: partnerLogo12, alt: 'Partner 12' },
  { src: partnerLogo13, alt: 'Partner 13' },
  { src: partnerLogo14, alt: 'Partner 14' },
  { src: partnerLogo15, alt: 'Partner 15' },
  { src: partnerLogo16, alt: 'Partner 16' },
  { src: partnerLogo17, alt: 'Partner 17' },
  { src: partnerLogo18, alt: 'Partner 18' },
  { src: partnerLogo19, alt: 'Partner 19' },
];

const PartnersSection = () => {
  // Double the array to ensure seamless looping
  const doubledLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="partners pv">
      <h2 className="section-title">Partners and Clients</h2>
      <p className="section-description">
        We are proud to work with leading companies and organizations across various industries, 
        delivering exceptional experiences and creating lasting partnerships.
      </p>
      <div className="partners-slider">
        <div className="partners-track">
          {doubledLogos.map((logo, index) => (
            <div key={`logo-${index}`} className="partner-logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 