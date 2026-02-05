import React, { useState } from 'react';
import './BrandsSection.scss';
import ptaLogo from './assets/pta-logo.svg';
import memoryLogo from './assets/memory-logo.svg';
import mmgLogo from './assets/MMG-logo.svg';

const tabNames = [
  'Personal Travel Assist',
  'Memory Makers',
  'MMG HR Summit',
];

const BrandsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="brands" className="brands pv">
      <h2 className="t-38 up section-title">Our Brands</h2>
      <div className="section-description t-18">
        <p>
          Each MMG brand plays an important role within a shared vision – creating meaningful experiences that connect people, knowledge, and business impact.
        </p>
        <p>
          <strong>Personal Travel Assist</strong> supports leaders and teams with high-level business and executive travel, turning mobility into a well-organised experience rather than a logistical challenge.
        </p>
        <p>
          <strong>Memory Makers Events</strong> designs and delivers corporate events as strategic tools. From leadership events to large-scale international gatherings – where every detail serves a clear purpose: involvement, engagement, and connection.
        </p>
        <p>
          <strong>MMG HR Community</strong> is a leaders-driven platform that brings together HR leaders and experts to exchange knowledge, address shared challenges, and collectively shape the future of human capital across Cyprus and the Mediterranean region.
        </p>
        <p>
          <strong>MMG HR Summit</strong> is an international conference for HR leaders focused on the real challenges of managing people, culture, and human capital in today’s organizations.
        </p>
        <p>
          Together, our brands form an integrated ecosystem where travel, events, and professional communities work hand in hand to strengthen teams, spark ideas, and create lasting value.
        </p>
      </div>
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
          <div className="brand-card pta-card">
            <div className="brand-logo">
              <img src={ptaLogo} alt="Personal Travel Assist Logo" />
            </div>
            {/* <h3 className='card-brand-title'>Personal Travel Assist</h3> */}
            <div className="brand-section">
              <div className="brand-section-title">
                <div className="t-20 card-title">ABOUT THE BRAND</div>
              </div>
              <p className="t-18 card-description">
                <strong>Personal Travel Assist</strong> is an international company providing services in the field of <strong>booking hotels, air tickets, transfers, excursions</strong>, as well as creating <strong>individual routes at the client's request</strong> (logistics, flight plans, etc.).
              </p>
            </div>
            <div className="brand-section">
              <div className="brand-section-title">
                <div className="t-20 card-title">SERVICES</div>
              </div>
              <p className="t-18 card-description">
                We provide services to <strong>both individuals and legal entities</strong> in the following areas: <strong>excursion and combined tours, therapeutic and wellness programs, training for children and adults</strong>, work with corporate clients and businesses, expeditions, event tourism, weddings, etc.<br/><br/>
                Our company professionally resolves issues of <strong>corporate travel</strong> for training, workshops, business conferences, exhibitions, recreation or active pastime of the client company's team for <strong>more than 15 years.</strong>
              </p>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="brand-card mm-card">
            <div className="brand-logo">
              <img src={memoryLogo} alt="Memory Makers Logo" />
            </div>
            {/* <h3 className='card-brand-title'>Memory Makers</h3> */}
            <div className="brand-section">
              <div className="brand-section-title">
                <div className="t-20 card-title">ABOUT THE BRAND</div>
              </div>
              <p className="t-18 card-description">
                <strong>Memory Makers</strong> — an international agency with <strong>over 5 years of experience</strong> in organizing events and business meetings <strong>(MICE)</strong>. Over the years, we have successfully executed projects in various corners of the world, creating unique experiences for our clients.
              </p>
              <p className="t-18 card-description">
                As a full-cycle agency, we handle <strong>every aspect of event planning</strong> — from logistics and creative solutions to seamless execution. We take care of every detail so that you can focus on enjoying the process and the event itself, without worrying about the logistics. We are a team of professionals who are passionate about what we do.
              </p>
              <div className="brand-section-title">
                <div className="t-20 card-title">OUR ADVANTAGES</div>
              </div>
              <div className="t-20 paragraph-title">Concierge Service</div>
              <p className="t-18 card-description">
                <strong>Personalized approach</strong>, handling all your needs, from transfers to the most unique requests.
              </p>
              <div className="t-20 paragraph-title">Global Experience</div>
              <p className="t-18 card-description">
                We work worldwide, ensuring high-quality project execution in any country, thanks to our trusted contractors and partners.
              </p>
              <div className="t-20 paragraph-title">Events of Any Scale</div>
              <p className="t-18 card-description">
                From corporate meetings and business conferences to large-scale festivals, sports events, and exclusive VIP experiences.
              </p>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="brand-card hrscy-card">
            <div className="brand-logo">
              <img src={mmgLogo} alt="HR Summit CY Logo" />
            </div>
            {/* <h3 className='card-brand-title'>HR Summit CY</h3> */}
            <div className="brand-section">
              <div className="brand-section-title">
                <div className="t-20 card-title">ABOUT THE BRAND</div>
              </div>
              <p className="t-18 card-description">
                As Cyprus continues to grow as an international business hub, the Cyprus HR Summit serves as a bridge between the local HR community and newly relocated professionals.
              </p>
              <p className="t-18 card-description">
                The summit will address key industry topics through expert panels, interactive workshops, and networking sessions. To ensure accessibility for all, participation is completely free—because we believe that valuable knowledge and connections should be available to everyone.
              </p>
              <div className="brand-section-title">
                <div className="t-20 card-title">THE MISSION</div>
              </div>
              <p className="t-18 card-description">
                To empower the HR community by fostering innovation, inclusivity, and collaboration, driving progress and growth in human resources locally and globally, while creating better workplaces with happy employees within thriving organizations.
              </p>
              <div className="brand-section-title">
                <div className="t-20 card-title">THE GOALS</div>
              </div>
              <div className="card-bullets">
                <div className="bullet-number">1</div>
                <div className="bullet-content">
                  <div className="bullet-content-title">Unite HR Professionals</div>
                  <p>Build a vibrant community of HR leaders from diverse cultural and professional backgrounds to foster collaboration and mutual learning.</p>
                </div>
              </div>
              <div className="card-bullets">
                <div className="bullet-number">2</div>
                <div className="bullet-content">
                  <div className="bullet-content-title">Address Global Challenges</div>
                  <p>Tackle key industry topics such as employee engagement, diversity, talent retention, digital transformation, and leadership in a rapidly evolving workplace.</p>
                </div>
              </div>
              <div className="card-bullets">
                <div className="bullet-number">3</div>
                <div className="bullet-content">
                  <div className="bullet-content-title">Foster Cultural Integration</div>
                  <p>Break down barriers between cultures and languages, leveraging diversity as a strength in the HR field.</p>
                </div>
              </div>
              <div className="card-bullets">
                <div className="bullet-number">4</div>
                <div className="bullet-content">
                  <div className="bullet-content-title">Set New Standards</div>
                  <p>Establish the summit as the leading HR event in the region by providing unparalleled value, insights, and inspiration to attendees.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection; 