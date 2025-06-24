import React, { useState } from 'react';
import './BrandsSection.scss';
import ptaLogo from './assets/pta-logo.svg';
import memoryLogo from './assets/memory-logo.svg';
import hrscyLogo from './assets/hrscy-logo.svg';

const tabNames = [
  'Personal Travel Assist',
  'Memory Makers',
  'HR Summit CY',
];

const BrandsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="brands pv">
      <h2 className="t-38 up">Our Brands</h2>
      <p className="t-18">From VIP journeys to unforgettable events and powerful business forums, our brands redefine excellence. Personal Travel Assist crafts tailor-made executive travel experiences with a touch of luxury. Memory Makers Events turns high-level corporate visions into bold, immersive realities. HR Summit Cy unites top HR minds through exclusive summits that spark innovation and leadership.</p>
      <div className="brands-tabs">
        {tabNames.map((name, idx) => (
          <button
            key={name}
            className={`brands-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            {name}
          </button>
        ))}
      </div>
      <div className="brands-list">
        {activeTab === 0 && (
          <div className="brand-card">
            <div className="brand-logo">
              <img src={ptaLogo} alt="Personal Travel Assist Logo" />
            </div>
            <h3>Personal Travel Assist</h3>
            <div className="brand-section">
              <div className="brand-section-title">
                <span className="brand-title-bold">A</span><span className="brand-title-gradient">BOUT THE BRAND</span>
              </div>
              <p className="t-18">
                <strong>Personal Travel Assist</strong> is an international company providing services in the field of <strong>booking hotels, air tickets, transfers, excursions</strong>, as well as creating <strong>individual routes at the client's request</strong> (logistics, flight plans, etc.).
              </p>
            </div>
            <div className="brand-section">
              <div className="brand-section-title">
                <span className="brand-title-bold">S</span><span className="brand-title-gradient">ERVICES</span>
              </div>
              <p className="t-18">
                We provide services to <strong>both individuals and legal entities</strong> in the following areas: <strong>excursion and combined tours, therapeutic and wellness programs, training for children and adults</strong>, work with corporate clients and businesses, expeditions, event tourism, weddings, etc.<br/><br/>
                Our company professionally resolves issues of <strong>corporate travel</strong> for training, workshops, business conferences, exhibitions, recreation or active pastime of the client company's team for <strong>more than 15 years.</strong>
              </p>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="brand-card">
            <div className="brand-logo-placeholder">Logo</div>
            <h3>Memory Makers</h3>
            <p>An expert event production agency managing high-level corporate events, brand activations, and incentive programs.</p>
            {/* You can hardcode any unique content for this card here */}
          </div>
        )}
        {activeTab === 2 && (
          <div className="brand-card">
            <div className="brand-logo-placeholder">Logo</div>
            <h3>HR Summit CY</h3>
            <p>A platform for executive networking, bringing together top HR professionals and decision-makers through exclusive summits and industry forums.</p>
            {/* You can hardcode any unique content for this card here */}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection; 