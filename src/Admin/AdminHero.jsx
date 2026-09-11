import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PortfolioContext } from '../context/PortfolioContext';

export default function AdminHero() {
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({ title: '', subtitle: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (portfolioData?.hero) {
      setFormData({
        title: portfolioData.hero.title || '',
        subtitle: portfolioData.hero.subtitle || ''
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
      await axios.put('/api/portfolio/hero', formData);
      await fetchPortfolio();
      setMessage('Hero section updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to update hero section.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <h2 className="admin-title">Edit Hero Section</h2>
      <p className="admin-desc">Update the main heading and subtitle of your portfolio.</p>

      {message && <div style={{ color: message.includes('success') ? '#4ade80' : '#ef4444', marginBottom: '1rem' }}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="admin-form-group">
          <label>Title (Use \n for line breaks)</label>
          <textarea 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="admin-textarea"
            style={{ minHeight: '80px' }}
            required
          />
        </div>
        <div className="admin-form-group">
          <label>Subtitle</label>
          <textarea 
            name="subtitle" 
            value={formData.subtitle} 
            onChange={handleChange} 
            className="admin-textarea"
            required
          />
        </div>
        <button type="submit" className="admin-btn" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
