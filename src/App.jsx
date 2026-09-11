import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SkillsMarquee from './components/SkillsMarquee';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AdminLayout from './Admin/AdminLayout';
import { PortfolioProvider } from './context/PortfolioContext';
import './App.css';

function App() {
  return (
    <PortfolioProvider>
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/*" element={
            <>
              <SkillsMarquee />
              <Navbar />
              <div className="main-content" style={{ position: 'relative', zIndex: 10 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/:slug" element={<ServiceDetail />} />
                </Routes>
              </div>
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </div>
    </PortfolioProvider>
  );
}

export default App;
