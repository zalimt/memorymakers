import React from 'react';
import './FoundersSection.scss';

const FoundersSection = () => (
  <section className="founders">
    <h2>Meet the Founders</h2>
    <div className="founders-list">
      <div className="founder-card">
        <div className="founder-photo-placeholder">Photo</div>
        <h3>Nadezhda Gorislavtseva</h3>
        <p><b>Business Owner | Expert in the Travel Industry | Travel Agent</b></p>
        <p>Has been inspiring people worldwide to build their travel collections for almost 20 years. Ranked among the top 15 travel assistants by The Leading Hotels of the World Association. Assembled a powerhouse team of professionals specializing in the organization and delivery of travel services worldwide, achieving results with over 6,000 satisfied clients, half of whom are repeat customers. They have been working with some families and companies for decades.</p>
      </div>
      <div className="founder-card">
        <div className="founder-photo-placeholder">Photo</div>
        <h3>Dmitriy Tishenko</h3>
        <p><b>Business Owner | Expert in Corporate Travel & Events | Marketing Strategist</b></p>
        <p>Co-founder and managing partner of Memory Makers Group – a Cyprus-based company providing premium B2B services in corporate travel, event planning, and professional networking. Oversees the development and delivery of projects with a focus on strategic thinking, creative planning, and client-oriented execution. The company is growing dynamically and open to collaboration with businesses across various industries, offering tailored solutions and a high standard of service.</p>
      </div>
    </div>
  </section>
);

export default FoundersSection; 