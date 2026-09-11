import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Hero() {
  const { portfolioData } = useContext(PortfolioContext);
  const hero = portfolioData?.hero;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-title fade-in-up delay-2">
          {hero?.title?.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          )) || <>Full Stack<br />Developer</>}
        </h1>
        <p className="hero-subtitle fade-in-up delay-3">
          {hero?.subtitle || 'Crafting modern web applications with clean code and creative solutions.'}
        </p>

        <div className="hero-stats fade-in-up delay-4">
          {hero?.stats?.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
