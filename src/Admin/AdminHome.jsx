import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function AdminHome() {
  const { portfolioData, isLoading } = useContext(PortfolioContext);

  if (isLoading) return <div>Loading dashboard...</div>;

  return (
    <div className="admin-page fade-in-up">
      <h1 className="admin-title">Welcome to the Admin Portal</h1>
      <p className="admin-desc">
        Here you can manage all sections of your live portfolio website dynamically.
        Changes made here will automatically reflect on the public site!
      </p>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Services Count</h3>
          <p className="stat-number">{portfolioData?.services?.length || 0}</p>
        </div>
        <div className="admin-stat-card">
          <h3>Projects Count</h3>
          <p className="stat-number">{portfolioData?.projects?.length || 0}</p>
        </div>
        <div className="admin-stat-card">
          <h3>Skills Categories</h3>
          <p className="stat-number">{portfolioData?.skills?.categories?.length || 0}</p>
        </div>
      </div>
    </div>
  );
}
