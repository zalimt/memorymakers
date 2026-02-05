import React from 'react';
import './TeamSection.scss';
import mariannaKonina from './assets/Marianna-Konina.webp';
import polinaDemidova from './assets/Polina-Demidova.webp';
import galaGrigoreva from './assets/Gala-Grigoreva.webp';

const TeamSection = () => (
  <article className="team-section pv">
    <section id="team" className="team">
      <h2 className="section-title">Team</h2>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-image">
            <img src={mariannaKonina} alt="Marianna Konina" />
          </div>
          <h3 className="team-name">Marianna Konina</h3>
          <div className="team-title">Strategic Communication Advisor</div>
          <p className="team-bio">
            Founder of{' '}
            <a href="https://reputation.city/" target="_blank" rel="noopener noreferrer">
              Reputation City
            </a>{' '}
            - a reputation management company. Marianna has over 20 years of professional experience
            in strategic communications, reputation management, and industry-level positioning across
            international markets. Her company creates clients&apos; Digital Profiles with a
            compliance-first mindset across search engines and AI platforms.
          </p>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src={polinaDemidova} alt="Polina Demidova" />
          </div>
          <h3 className="team-name">Polina Demidova</h3>
          <div className="team-title">Ambassador of HR Summit Community. Founder of HRocket</div>
          <p className="team-bio">
            More than 15 years of experience on different admin and HR roles at the Bank,
            Coca-Cola, Yandex, Playrix, IT (Fintech) and nowadays collaboration with startups
            and other business in making their HR processes and teams more efficient and effective.
            Cross-cultural communication and well-being lead, art integrator building meaningful
            bridges between business and culture. Mentor at Women in Tech and Women in Big Data.
          </p>
        </div>
        <div className="team-card">
          <div className="team-image">
            <img src={galaGrigoreva} alt="Gala Grigoreva" />
          </div>
          <h3 className="team-name">Gala Grigoreva</h3>
          <div className="team-title">
            Strategic Advisor, Co-Founder & Corporate Wellbeing Trainer at Integrated Professional Growth
          </div>
          <p className="team-bio">
            Drawing on 15 years in the corporate world and over 10 years in senior leadership, Gala
            supports organisations in creating environments where people can thrive. Her work is rooted
            in a human-centred approach that fuels resilience, engagement, and long-term business
            sustainability.
          </p>
        </div>
      </div>
    </section>
  </article>
);

export default TeamSection;
