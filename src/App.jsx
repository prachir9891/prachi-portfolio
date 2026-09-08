import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SkillsMarquee from './components/SkillsMarquee';
import Home from './pages/Home';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import GraphicDesign from './pages/GraphicDesign';
import CloudServices from './pages/CloudServices';
import DigitalMarketing from './pages/DigitalMarketing';
import SocialMedia from './pages/SocialMedia';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SkillsMarquee />
      <Navbar />
      <div className="main-content" style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
