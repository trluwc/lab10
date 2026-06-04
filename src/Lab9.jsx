import React from 'react';
import logoFpt from '../imagesss/logofpt.png';

export default function Lab9() {
  return (
    <div className="lab9-layout">
      {/* Header Section */}
      <header className="lab9-header">
        <div className="lab9-logo-container">
          <img src={logoFpt} alt="FPT Education & University Logo" className="lab9-logo-img" />
        </div>
        <nav className="lab9-nav">
          <span className="lab9-nav-link">Home</span>
          <span className="lab9-nav-link">About</span>
          <span className="lab9-nav-link">Contact</span>
        </nav>
      </header>
      
      {/* Content Section */}
      <main className="lab9-content">
        <section className="lab9-section-item">
          <h2 className="lab9-heading">About</h2>
          <p className="lab9-text">This is the about section of the website.</p>
        </section>
        
        <section className="lab9-section-item text-center">
          <h2 className="lab9-heading">Contact</h2>
          <p className="lab9-text">For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>
      
      {/* Footer Section */}
      <footer className="lab9-footer">
        <p className="lab9-footer-text">© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
