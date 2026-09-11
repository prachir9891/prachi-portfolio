import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';
import { Pencil, Trash2, Plus, FileText } from 'lucide-react';

export default function AdminServices() {
  const navigate = useNavigate();
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ title: '', desc: '', iconName: '' });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (portfolioData?.services) {
      setServices(portfolioData.services);
    }
  }, [portfolioData]);

  const handleOpenModal = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setFormData(services[index]);
    } else {
      setEditingIndex(null);
      setFormData({ title: '', desc: '', iconName: 'Monitor' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    let updatedServices = [...services];
    
    if (editingIndex !== null) {
      updatedServices[editingIndex] = formData;
    } else {
      updatedServices.push(formData);
    }

    try {
      await axios.put('/api/portfolio/array/services', updatedServices);
      await fetchPortfolio();
      handleCloseModal();
    } catch (err) {
      console.error(err);
      alert('Failed to save service.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      let updatedServices = [...services];
      updatedServices.splice(index, 1);
      try {
        await axios.put('/api/portfolio/array/services', updatedServices);
        await fetchPortfolio();
      } catch (err) {
        console.error(err);
        alert('Failed to delete service.');
      }
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 className="admin-title">Manage Services</h2>
          <p className="admin-desc" style={{ marginBottom: 0 }}>Add, edit, or remove services from your portfolio.</p>
        </div>
        <button className="admin-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => handleOpenModal()}>
          <Plus size={18} /> Add New Service
        </button>
      </div>

      <div className="admin-list">
        {services.map((service, index) => (
          <div key={index} className="admin-list-item">
            <div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
            <div className="admin-item-actions">
              <button className="admin-btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '1rem' }} onClick={() => navigate(`/admin/services/${service.slug}`)}>
                <FileText size={16} /> Internal Page
              </button>
              <button className="admin-icon-btn" onClick={() => handleOpenModal(index)}>
                <Pencil size={18} />
              </button>
              <button className="admin-icon-btn delete" onClick={() => handleDelete(index)}>
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        {services.length === 0 && <p style={{ color: '#94a3b8' }}>No services added yet.</p>}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h3>{editingIndex !== null ? 'Edit Service' : 'Add New Service'}</h3>
              <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-form-group">
                <label>Service Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="admin-input" required />
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea name="desc" value={formData.desc} onChange={handleChange} className="admin-textarea" style={{ minHeight: '80px' }} required />
              </div>
              <div className="admin-form-group">
                <label>Icon Name (from Lucide React, e.g. Monitor, Smartphone, Code)</label>
                <input type="text" name="iconName" value={formData.iconName} onChange={handleChange} className="admin-input" required />
              </div>
              <div className="admin-form-group">
                <label>Service Slug (URL path)</label>
                <input type="text" name="slug" value={formData.slug || ''} onChange={handleChange} className="admin-input" placeholder="e.g. web-development" required />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" className="admin-btn" style={{ backgroundColor: 'transparent', border: '1px solid #38bdf8', color: '#38bdf8' }} onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="admin-btn" disabled={isSaving}>{isSaving ? 'Saving...' : 'Save Service'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
