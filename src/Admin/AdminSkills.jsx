import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PortfolioContext } from '../context/PortfolioContext';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function AdminSkills() {
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ title: '', items: '', iconSvg: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingDesc, setIsSavingDesc] = useState(false);

  useEffect(() => {
    if (portfolioData?.skills) {
      setCategories(portfolioData.skills.categories || []);
      setDescription(portfolioData.skills.description || '');
    }
  }, [portfolioData]);

  const handleSaveDesc = async () => {
    setIsSavingDesc(true);
    try {
      // we need to save the whole skills object
      await axios.put('/api/portfolio/skills', { description, categories });
      await fetchPortfolio();
      alert('Description saved!');
    } catch (err) {
      console.error(err);
      alert('Failed to save description.');
    } finally {
      setIsSavingDesc(false);
    }
  };

  const handleOpenModal = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setFormData(categories[index]);
    } else {
      setEditingIndex(null);
      setFormData({ title: '', items: '', iconSvg: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    let updatedCategories = [...categories];
    
    if (editingIndex !== null) {
      updatedCategories[editingIndex] = formData;
    } else {
      updatedCategories.push(formData);
    }

    try {
      await axios.put('/api/portfolio/array/skills_categories', updatedCategories);
      await fetchPortfolio();
      handleCloseModal();
    } catch (err) {
      console.error(err);
      alert('Failed to save skill category.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this skill category?')) {
      let updatedCategories = [...categories];
      updatedCategories.splice(index, 1);
      try {
        await axios.put('/api/portfolio/array/skills_categories', updatedCategories);
        await fetchPortfolio();
      } catch (err) {
        console.error(err);
        alert('Failed to delete skill category.');
      }
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 className="admin-title">Manage Skills</h2>
          <p className="admin-desc" style={{ marginBottom: 0 }}>Update your skills description and categories.</p>
        </div>
      </div>

      <div className="admin-form-group" style={{ marginBottom: '3rem' }}>
        <label>Skills Section Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="admin-textarea" 
          style={{ minHeight: '80px', marginBottom: '1rem' }} 
        />
        <button className="admin-btn" style={{ alignSelf: 'flex-start' }} onClick={handleSaveDesc} disabled={isSavingDesc}>
          {isSavingDesc ? 'Saving...' : 'Save Description'}
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc' }}>Skill Categories</h3>
        <button className="admin-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }} onClick={() => handleOpenModal()}>
          <Plus size={16} /> Add Category
        </button>
      </div>

      <div className="admin-list">
        {categories.map((cat, index) => (
          <div key={index} className="admin-list-item">
            <div>
              <h4 style={{ color: '#38bdf8' }}>{cat.title}</h4>
              <p>{cat.items}</p>
            </div>
            <div className="admin-item-actions">
              <button className="admin-icon-btn" onClick={() => handleOpenModal(index)}>
                <Pencil size={18} />
              </button>
              <button className="admin-icon-btn delete" onClick={() => handleDelete(index)}>
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        {categories.length === 0 && <p style={{ color: '#94a3b8' }}>No skill categories added yet.</p>}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h3>{editingIndex !== null ? 'Edit Category' : 'Add New Category'}</h3>
              <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            </div>
            <form onSubmit={handleSaveCategory}>
              <div className="admin-form-group">
                <label>Category Title (e.g. Frontend Development)</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="admin-input" required />
              </div>
              <div className="admin-form-group">
                <label>Skills/Items (comma separated)</label>
                <textarea name="items" value={formData.items} onChange={handleChange} className="admin-textarea" style={{ minHeight: '80px' }} required />
              </div>
              <div className="admin-form-group">
                <label>Icon SVG Code (Optional)</label>
                <textarea name="iconSvg" value={formData.iconSvg} onChange={handleChange} className="admin-textarea" style={{ minHeight: '80px', fontFamily: 'monospace', fontSize: '0.85rem' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" className="admin-btn" style={{ backgroundColor: 'transparent', border: '1px solid #38bdf8', color: '#38bdf8' }} onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="admin-btn" disabled={isSaving}>{isSaving ? 'Saving...' : 'Save Category'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
