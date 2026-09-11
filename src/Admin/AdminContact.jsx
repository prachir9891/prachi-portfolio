import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PortfolioContext } from '../context/PortfolioContext';

export default function AdminContact() {
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({ address: '', phone: '', email: '', mapIframeUrl: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (portfolioData?.contact) {
      setFormData({
        address: portfolioData.contact.address || '',
        phone: portfolioData.contact.phone || '',
        email: portfolioData.contact.email || '',
        mapIframeUrl: portfolioData.contact.mapIframeUrl || ''
      });
    }
  }, [portfolioData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');
    try {
      await axios.put('/api/portfolio/contact', formData);
      await fetchPortfolio();
      setMessage('Contact info updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to update contact info.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <h2 className="admin-title">Edit Contact Info</h2>
      <p className="admin-desc">Update your contact details displayed on the website.</p>

      {message && <div style={{ color: message.includes('success') ? '#4ade80' : '#ef4444', marginBottom: '1rem' }}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="admin-form-group">
          <label>Email Address</label>
          <input 
            type="email"
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="admin-input"
            required
          />
        </div>
        <div className="admin-form-group">
          <label>Phone Number</label>
          <input 
            type="text"
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="admin-input"
          />
        </div>
        <div className="admin-form-group">
          <label>Address / Location</label>
          <input 
            type="text"
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            className="admin-input"
          />
        </div>
        <div className="admin-form-group">
          <label>Google Maps Embed URL (Optional)</label>
          <textarea 
            name="mapIframeUrl" 
            value={formData.mapIframeUrl} 
            onChange={handleChange} 
            className="admin-textarea"
            placeholder='<iframe src="..."></iframe>'
          />
        </div>
        <button type="submit" className="admin-btn" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
