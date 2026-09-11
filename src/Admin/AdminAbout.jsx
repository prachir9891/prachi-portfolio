import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PortfolioContext } from '../context/PortfolioContext';

export default function AdminAbout() {
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (portfolioData?.about) {
      setFormData({
        title: portfolioData.about.title || '',
        description: portfolioData.about.description || '',
        image: portfolioData.about.image || ''
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
      await axios.put('/api/portfolio/about', formData);
      await fetchPortfolio();
      setMessage('About section updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to update about section.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <h2 className="admin-title">Edit About Section</h2>
      <p className="admin-desc">Update your personal description and profile image.</p>

      {message && <div style={{ color: message.includes('success') ? '#4ade80' : '#ef4444', marginBottom: '1rem' }}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="admin-form-group">
          <label>Title</label>
          <input 
            type="text"
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="admin-input"
            required
          />
        </div>
        <div className="admin-form-group">
          <label>Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="admin-textarea"
            required
          />
        </div>
        <div className="admin-form-group">
          <label>Image URL (or local path like /prachi.png)</label>
          <input 
            type="text"
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            className="admin-input"
          />
        </div>
        <button type="submit" className="admin-btn" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
