import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SkillsMarquee from './components/SkillsMarquee';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AdminLayout from './Admin/AdminLayout';
import { PortfolioProvider, PortfolioContext } from './context/PortfolioContext';
import './App.css';

function AppContent() {
  const { error } = React.useContext(PortfolioContext);
  
  return (
    <div className="app-container">
      {error && (
        <div style={{ backgroundColor: '#ef4444', color: 'white', padding: '1rem', textAlign: 'center', zIndex: 9999, position: 'relative' }}>
          <strong>API Connection Error:</strong> {error} <br/> 
          (Make sure VITE_API_URL is set in Vercel, Redeployed, and latest code is pushed!)
        </div>
      )}
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
  );
}

function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}

export default App;
