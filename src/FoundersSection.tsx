import React from 'react';
import './FoundersSection.scss';
import ngorislavtseva from './assets/ngorislavtseva.webp';
import dtishenko from './assets/dtishenko.webp';

const FoundersSection = () => (
  <article className="founders-section pv">
    <section id="founders" className="founders">
      <h2 className="section-title">Meet the Founders</h2>
      <p className="section-description">
        Our founders bring together decades of experience in travel, events, and business networking to create exceptional experiences and meaningful connections.
      </p>
      <div className="founders-list">
        <div className="founder-card">
          <div className="founder-photo">
            <div className="founder-photo-container">
              <img src={ngorislavtseva} alt="Nadezhda Gorislavtseva" />
            </div>
          </div>
          <h3 className="founder-name">Nadezhda Gorislavtseva</h3>
          <div className="founder-title">
            Strategic Partner for HR Leaders in Experiences, Travel & Community
            <br />
            Co-founder of Memory Makers Group
          </div>
          <p className="founder-description">
            Brings 20+ years of expertise at the intersection of travel, events, and human-centric business experiences. Today Memory Makers Group is recognized by leading hotels as one of the top travel and event agencies in Europe and the CIS. Working with global companies of 5,000+ employees and offices in 20+ countries.
          </p>
        </div>
        <div className="founder-card">
          <div className="founder-photo">
            <div className="founder-photo-container">
              <img src={dtishenko} alt="Dmitriy Tishenko" />
            </div>
          </div>
          <h3 className="founder-name">Dmitriy Tishenko</h3>
          <div className="founder-title">
            Expert in Corporate Travel & Events Marketing Strategist
            <br />
            Co-founder of Memory Makers Group
          </div>
          <p className="founder-description">
            Dmitriy has 15+ years in the global tourism and travel industry. Dmitriy has worked across diverse international markets, shaping large-scale corporate and business travel ecosystems. His vision is to create future-oriented experiences that support leadership and cross-cultural connection.
          </p>
        </div>
      </div>
    </section>
  </article>
);

export default FoundersSection; 