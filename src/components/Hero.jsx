import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-title fade-in-up delay-2">Full Stack<br />Developer</h1>
        <p className="hero-subtitle fade-in-up delay-3">Crafting modern web applications with clean code and creative solutions.</p>

        <div className="hero-stats fade-in-up delay-4">
          <div className="stat-item">
            <span className="stat-number">10</span>
            <span className="stat-label">Projects Completed</span>
          </div>
        </div>

      </div>
    </section>
  );
}
