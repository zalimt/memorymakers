import React from 'react';
import './ConnectSection.scss';

const ConnectSection = () => {
  const brands = [
    {
      title: 'PERSONAL TRAVEL ASSIST',
      links: [
        { type: 'linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/company/personal-travel-assist/about/' },
        { type: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/personaltravelassist' },
        { type: 'email', text: 'info@p-travelassist.com', url: 'mailto:info@p-travelassist.com' },
        { type: 'phone', text: '+357 95 149872', url: 'tel:+35795149872' }
      ]
    },
    {
      title: 'MEMORY MAKERS',
      links: [
        { type: 'linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/company/memory-makers-group/' },
        { type: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/memory.makers.cy' },
        { type: 'email', text: 'info@memorymakers.events', url: 'mailto:info@memorymakers.events' },
        { type: 'phone', text: '+357 95 149872', url: 'tel:+35795149872' }
      ]
    },
    {
      title: 'MMG HR SUMMIT',
      links: [
        { type: 'linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/company/cyprus-hr-community/' },
        { type: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/hrsummit.cy' },
        { type: 'email', text: 'info@hrsummitcy.com', url: 'mailto:info@hrsummitcy.com' },
        { type: 'phone', text: '+357 95 149872', url: 'tel:+35795149872' }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return (
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'email':
        return (
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        );
      case 'phone':
        return (
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <article className="connect-section pv">
      <section id="connect" className="connect">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-description">
          Reach out to us through any of our brands' channels. We're always happy to hear from you.
        </p>
        <div className="connect-list">
          {brands.map((brand, index) => (
            <div key={index} className="connect-item">
              <h3 className="brand-title">{brand.title}</h3>
              <div className="connect-links">
                {brand.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="connect-link"
                    target={link.type === 'email' || link.type === 'phone' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    {getIcon(link.type)}
                    <span className="link-text">{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default ConnectSection; 