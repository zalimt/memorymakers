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
          <div className="founder-title">Business Owner | Expert in the Travel Industry | Travel Agent</div>
          <p className="founder-description">
            Has been inspiring people worldwide to build their travel collections for <strong>almost 20 years</strong>. Ranked among the <strong>top 15 travel assistants</strong> by The Leading Hotels of the World Association. Assembled a powerhouse team of professionals specializing in the organization and delivery of travel services worldwide, achieving results with over <strong>6,000 satisfied clients</strong>, half of whom are repeat customers. They have been working with some families and companies for decades.
          </p>
        </div>
        <div className="founder-card">
          <div className="founder-photo">
            <div className="founder-photo-container">
              <img src={dtishenko} alt="Dmitriy Tishenko" />
            </div>
          </div>
          <h3 className="founder-name">Dmitriy Tishenko</h3>
          <div className="founder-title">Business Owner | Expert in Corporate Travel & Events | Marketing Strategist</div>
          <p className="founder-description">
            Co-founder and managing partner of <strong>Memory Makers Group</strong> – a Cyprus-based company providing premium B2B services in corporate travel, event planning, and professional networking. Oversees the development and delivery of projects with a focus on <strong>strategic thinking, creative planning, and client-oriented execution</strong>. The company is growing dynamically and open to collaboration with businesses across various industries, offering <strong>tailored solutions and a high standard of service</strong>.
          </p>
        </div>
      </div>
    </section>
  </article>
);

export default FoundersSection; 