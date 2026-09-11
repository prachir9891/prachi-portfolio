import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminHero from './AdminHero';
import AdminAbout from './AdminAbout';
import AdminServices from './AdminServices';
import AdminSkills from './AdminSkills';
import AdminGallery from './AdminGallery';
import AdminContact from './AdminContact';
import AdminServiceDetail from './AdminServiceDetail';
import './Admin.css';

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Hero Section', path: '/admin/hero' },
    { name: 'About Section', path: '/admin/about' },
    { name: 'Services', path: '/admin/services' },
    { name: 'Skills', path: '/admin/skills' },
    { name: 'Projects / Gallery', path: '/admin/gallery' },
    { name: 'Contact Info', path: '/admin/contact' }
  ];

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Portal</h2>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`admin-nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/" className="admin-nav-item return-btn">
            &larr; Back to Live Site
          </Link>
        </nav>
      </div>
      
      <div className="admin-main">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/hero" element={<AdminHero />} />
          <Route path="/about" element={<AdminAbout />} />
          <Route path="/services" element={<AdminServices />} />
          <Route path="/services/:slug" element={<AdminServiceDetail />} />
          <Route path="/skills" element={<AdminSkills />} />
          <Route path="/gallery" element={<AdminGallery />} />
          <Route path="/contact" element={<AdminContact />} />
        </Routes>
      </div>
    </div>
  );
}
