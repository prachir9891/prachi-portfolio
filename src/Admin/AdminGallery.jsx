import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PortfolioContext } from '../context/PortfolioContext';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function AdminGallery() {
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  
  const initialFormState = { 
    title: '', 
    description: '', 
    image: '', 
    technologies: '', 
    features: '', 
    links: { github: '', live: '' } 
  };
  const [formData, setFormData] = useState(initialFormState);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (portfolioData?.projects) {
      setProjects(portfolioData.projects);
    }
  }, [portfolioData]);

  const handleOpenModal = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      const proj = projects[index];
      setFormData({
        ...proj,
        technologies: proj.technologies ? proj.technologies.join(', ') : '',
        features: proj.features ? proj.features.join('\n') : '',
        links: proj.links || { github: '', live: '' }
      });
    } else {
      setEditingIndex(null);
      setFormData(initialFormState);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'github' || name === 'live') {
      setFormData({ ...formData, links: { ...formData.links, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    let updatedProjects = [...projects];
    
    // Format arrays
    const formattedData = {
      ...formData,
      technologies: formData.technologies.split(',').map(s => s.trim()).filter(s => s),
      features: formData.features.split('\n').map(s => s.trim()).filter(s => s)
    };

    if (editingIndex !== null) {
      updatedProjects[editingIndex] = formattedData;
    } else {
      updatedProjects.push(formattedData);
    }

    try {
      await axios.put('/api/portfolio/array/projects', updatedProjects);
      await fetchPortfolio();
      handleCloseModal();
    } catch (err) {
      console.error(err);
      alert('Failed to save project.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      let updatedProjects = [...projects];
      updatedProjects.splice(index, 1);
      try {
        await axios.put('/api/portfolio/array/projects', updatedProjects);
        await fetchPortfolio();
      } catch (err) {
        console.error(err);
        alert('Failed to delete project.');
      }
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 className="admin-title">Manage Projects / Gallery</h2>
          <p className="admin-desc" style={{ marginBottom: 0 }}>Add, edit, or remove portfolio projects.</p>
        </div>
        <button className="admin-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => handleOpenModal()}>
          <Plus size={18} /> Add New Project
        </button>
      </div>

      <div className="admin-list">
        {projects.map((proj, index) => (
          <div key={index} className="admin-list-item" style={{ alignItems: 'flex-start' }}>
            <div style={{ flex: 1, marginRight: '1rem' }}>
              <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>{proj.title}</h4>
              <p style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {proj.description}
              </p>
              <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', display: 'flex', gap: '1rem' }}>
                {proj.links?.live && <a href={proj.links.live} target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>Live Link</a>}
                {proj.links?.github && <a href={proj.links.github} target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>GitHub</a>}
              </div>
            </div>
            {proj.image && (
              <img src={proj.image} alt={proj.title} style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px', marginRight: '1rem' }} />
            )}
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
        {projects.length === 0 && <p style={{ color: '#94a3b8' }}>No projects added yet.</p>}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '800px' }}>
            <div className="admin-modal-header">
              <h3>{editingIndex !== null ? 'Edit Project' : 'Add New Project'}</h3>
              <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            </div>
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="admin-form-group">
                  <label>Project Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} className="admin-input" required />
                </div>
                <div className="admin-form-group">
                  <label>Image URL</label>
                  <input type="text" name="image" value={formData.image} onChange={handleChange} className="admin-input" />
                </div>
              </div>
              
              <div className="admin-form-group">
                <label>Description (Use \n\n for paragraphs)</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="admin-textarea" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="admin-form-group">
                  <label>Technologies (Comma separated)</label>
                  <textarea name="technologies" value={formData.technologies} onChange={handleChange} className="admin-textarea" style={{ minHeight: '80px' }} />
                </div>
                <div className="admin-form-group">
                  <label>Features (One per line)</label>
                  <textarea name="features" value={formData.features} onChange={handleChange} className="admin-textarea" style={{ minHeight: '80px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="admin-form-group">
                  <label>Live URL</label>
                  <input type="text" name="live" value={formData.links?.live || ''} onChange={handleChange} className="admin-input" />
                </div>
                <div className="admin-form-group">
                  <label>GitHub URL</label>
                  <input type="text" name="github" value={formData.links?.github || ''} onChange={handleChange} className="admin-input" />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className="admin-btn" style={{ backgroundColor: 'transparent', border: '1px solid #38bdf8', color: '#38bdf8' }} onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="admin-btn" disabled={isSaving}>{isSaving ? 'Saving...' : 'Save Project'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
