import React from 'react';
import './PartnersSection.scss';

import reputationCity from './assets/partners/reputation-city.svg';
import mellow from './assets/partners/mellow.svg';
import municorn from './assets/partners/municorn.svg';
import evrika from './assets/partners/evrika.svg';
import hercules from './assets/partners/hercules.svg';
import yummyKitchen from './assets/partners/yummy-kitchen.svg';
import warehouse from './assets/partners/warehouse.svg';
import cyhr from './assets/partners/cyhr.svg';
import techisland from './assets/partners/techisland.png';
import alberBlank from './assets/partners/alber-blank.svg';
import ipg from './assets/partners/ipg.svg';
import womenInTech from './assets/partners/womenintech.svg';
import eptaPro from './assets/partners/epta-pro.svg';
import digitalTree from './assets/partners/digital-tree.svg';
import paysonix from './assets/partners/paysonix.svg';
import fastForward from './assets/partners/fastforward.svg';
import sense from './assets/partners/sense.svg';
import cbg from './assets/partners/cbg.svg';
import malina from './assets/partners/malina.svg';

const partnerLogos = [
  { href: 'https://reputation.city', src: reputationCity, alt: 'Reputation City' },
  { href: 'https://mellow.io', src: mellow, alt: 'mellow' },
  { href: 'https://municorn.com', src: municorn, alt: 'municorn' },
  { href: 'https://evrikakids.com', src: evrika, alt: 'EVRIKA KIDS' },
  { href: 'https://hercules-group.com', src: hercules, alt: 'HERCULES' },
  { href: 'https://yummykitchencyprus.com/en/', src: yummyKitchen, alt: 'Yummy kitchen' },
  { href: 'https://warehousecy.com', src: warehouse, alt: 'WAREHOUSE BY IT QUARTER' },
  { href: 'https://www.cyhrma.org', src: cyhr, alt: 'CHR ASSOCIATION' },
  { href: 'https://thetechisland.org', src: techisland, alt: 'techisland' },
  { href: 'https://alberblanc.com', src: alberBlank, alt: 'Àlber Blanc' },
  { href: 'https://ipg.global', src: ipg, alt: 'IPG' },
  { href: 'https://women-in-tech.org/cy/', src: womenInTech, alt: 'WOMEN in tech Cyprus' },
  { href: 'https://eptapro.com', src: eptaPro, alt: 'EPTA PRO' },
  { href: 'https://digitaltree.com.cy', src: digitalTree, alt: 'DIGITAL TREE' },
  { href: 'https://paysonix.com', src: paysonix, alt: 'PAY SONIX' },
  { href: 'https://fastforward.com.cy', src: fastForward, alt: 'FAST FORWARD' },
  { href: 'https://www.instagram.com/sense.productions/', src: sense, alt: 'sense' },
  { href: 'https://cyprusbusinessgroup.com', src: cbg, alt: 'CBG' },
  { href: 'https://www.instagram.com/malinabeauty.cy', src: malina, alt: 'MALINA HAIR & BEAUTY' },
];

const PartnersSection = () => {
  // Double the array to ensure seamless looping
  const doubledLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="partners pv">
      <h2 className="section-title">Partners and Clients</h2>
      <p className="section-description">
        We are proud to work with leading companies and organizations across various industries, 
        delivering exceptional experiences and creating lasting partnerships.
      </p>
      <div className="partners-slider">
        <div className="partners-track">
          {doubledLogos.map((logo, index) => (
            <a
              key={`logo-${index}`}
              className="partner-logo"
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo.src} alt={logo.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 