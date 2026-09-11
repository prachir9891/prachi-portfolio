import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';
import { Plus, Trash2, ArrowLeft } from 'lucide-react';
import './Admin.css';

export default function AdminServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { portfolioData, fetchPortfolio } = useContext(PortfolioContext);
  
  const [serviceIndex, setServiceIndex] = useState(-1);
  const [formData, setFormData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (portfolioData?.services) {
      const idx = portfolioData.services.findIndex(s => s.slug === slug);
      if (idx !== -1) {
        setServiceIndex(idx);
        // Initialize internalPage if it doesn't exist
        const defaultInternal = {
          heroTitle: '', heroSubtitle: '',
          typesTitle: '', typesItems: [],
          capabilitiesTitle: '', capabilitiesItems: [],
          featuresTitle: '', featuresItems: [],
          techStackTitle: '', techStackItems: [],
          processTitle: '', processSteps: [],
          ctaTitle: '', ctaSubtitle: '', ctaButtonText: '', ctaButtonLink: ''
        };
        setFormData({
          ...defaultInternal,
          ...(portfolioData.services[idx].internalPage || {})
        });
      }
    }
  }, [portfolioData, slug]);

  if (serviceIndex === -1 || !formData) return <div className="admin-page fade-in-up">Loading...</div>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Array Handlers
  const handleArrayChange = (arrayName, index, field, value) => {
    const newArray = [...formData[arrayName]];
    if (field) {
      newArray[index] = { ...newArray[index], [field]: value };
    } else {
      newArray[index] = value;
    }
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const addArrayItem = (arrayName, emptyTemplate) => {
    setFormData({ ...formData, [arrayName]: [...formData[arrayName], emptyTemplate] });
  };

  const removeArrayItem = (arrayName, index) => {
    const newArray = [...formData[arrayName]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const updatedServices = [...portfolioData.services];
      updatedServices[serviceIndex] = {
        ...updatedServices[serviceIndex],
        internalPage: formData
      };
      
      await axios.put('/api/portfolio/array/services', updatedServices);
      await fetchPortfolio();
      alert('Internal page details saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save details.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page fade-in-up">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="admin-icon-btn" onClick={() => navigate('/admin/services')}>
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="admin-title">Editing Internal Page: {portfolioData.services[serviceIndex].title}</h2>
          <p className="admin-desc" style={{ marginBottom: 0 }}>Manage the detailed content shown when users click on this service.</p>
        </div>
      </div>

      <form onSubmit={handleSave}>
        
        {/* HERO SECTION */}
        <div className="admin-section-box">
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Hero Section</h3>
          <div className="admin-form-group">
            <label>Hero Title</label>
            <input type="text" name="heroTitle" value={formData.heroTitle} onChange={handleChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label>Hero Subtitle</label>
            <textarea name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} className="admin-textarea" />
          </div>
        </div>

        {/* TYPES SECTION */}
        <div className="admin-section-box" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Types / Categories</h3>
          <div className="admin-form-group">
            <label>Section Title</label>
            <input type="text" name="typesTitle" value={formData.typesTitle} onChange={handleChange} className="admin-input" />
          </div>
          
          {formData.typesItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <input type="text" placeholder="Title (e.g. E-Commerce Apps)" value={item.title} onChange={(e) => handleArrayChange('typesItems', i, 'title', e.target.value)} className="admin-input" />
              <input type="text" placeholder="Lucide Icon (e.g. Monitor)" value={item.iconName} onChange={(e) => handleArrayChange('typesItems', i, 'iconName', e.target.value)} className="admin-input" />
              <button type="button" className="admin-icon-btn delete" onClick={() => removeArrayItem('typesItems', i)}><Trash2 size={18} /></button>
            </div>
          ))}
          <button type="button" className="admin-btn" style={{ padding: '0.5rem 1rem' }} onClick={() => addArrayItem('typesItems', { title: '', iconName: 'Code' })}><Plus size={16} /> Add Type</button>
        </div>

        {/* CAPABILITIES SECTION */}
        <div className="admin-section-box" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Technical Capabilities</h3>
          <div className="admin-form-group">
            <label>Section Title</label>
            <input type="text" name="capabilitiesTitle" value={formData.capabilitiesTitle} onChange={handleChange} className="admin-input" />
          </div>
          
          {formData.capabilitiesItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input type="text" placeholder="Title" value={item.title} onChange={(e) => handleArrayChange('capabilitiesItems', i, 'title', e.target.value)} className="admin-input" />
                <textarea placeholder="Description" value={item.desc} onChange={(e) => handleArrayChange('capabilitiesItems', i, 'desc', e.target.value)} className="admin-textarea" style={{ minHeight: '60px' }} />
              </div>
              <input type="text" placeholder="Lucide Icon" value={item.iconName} onChange={(e) => handleArrayChange('capabilitiesItems', i, 'iconName', e.target.value)} className="admin-input" style={{ width: '150px' }} />
              <button type="button" className="admin-icon-btn delete" onClick={() => removeArrayItem('capabilitiesItems', i)}><Trash2 size={18} /></button>
            </div>
          ))}
          <button type="button" className="admin-btn" style={{ padding: '0.5rem 1rem' }} onClick={() => addArrayItem('capabilitiesItems', { title: '', desc: '', iconName: 'Settings' })}><Plus size={16} /> Add Capability</button>
        </div>

        {/* FEATURES SECTION */}
        <div className="admin-section-box" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Key Features & Standards</h3>
          <div className="admin-form-group">
            <label>Section Title</label>
            <input type="text" name="featuresTitle" value={formData.featuresTitle} onChange={handleChange} className="admin-input" />
          </div>
          
          {formData.featuresItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input type="text" placeholder="Feature Title" value={item.title} onChange={(e) => handleArrayChange('featuresItems', i, 'title', e.target.value)} className="admin-input" />
                <textarea placeholder="Description" value={item.desc} onChange={(e) => handleArrayChange('featuresItems', i, 'desc', e.target.value)} className="admin-textarea" style={{ minHeight: '60px' }} />
              </div>
              <input type="text" placeholder="Lucide Icon" value={item.iconName} onChange={(e) => handleArrayChange('featuresItems', i, 'iconName', e.target.value)} className="admin-input" style={{ width: '150px' }} />
              <button type="button" className="admin-icon-btn delete" onClick={() => removeArrayItem('featuresItems', i)}><Trash2 size={18} /></button>
            </div>
          ))}
          <button type="button" className="admin-btn" style={{ padding: '0.5rem 1rem' }} onClick={() => addArrayItem('featuresItems', { title: '', desc: '', iconName: 'CheckCircle' })}><Plus size={16} /> Add Feature</button>
        </div>

        {/* TECH STACK SECTION */}
        <div className="admin-section-box" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Tech Stack</h3>
          <div className="admin-form-group">
            <label>Section Title</label>
            <input type="text" name="techStackTitle" value={formData.techStackTitle} onChange={handleChange} className="admin-input" />
          </div>
          
          {formData.techStackItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <input type="text" placeholder="Tech Name (e.g. React.js)" value={item.name} onChange={(e) => handleArrayChange('techStackItems', i, 'name', e.target.value)} className="admin-input" />
              <input type="text" placeholder="Lucide Icon (Optional)" value={item.iconName || ''} onChange={(e) => handleArrayChange('techStackItems', i, 'iconName', e.target.value)} className="admin-input" />
              <button type="button" className="admin-icon-btn delete" onClick={() => removeArrayItem('techStackItems', i)}><Trash2 size={18} /></button>
            </div>
          ))}
          <button type="button" className="admin-btn" style={{ padding: '0.5rem 1rem' }} onClick={() => addArrayItem('techStackItems', { name: '', iconName: 'Code' })}><Plus size={16} /> Add Tech</button>
        </div>

        {/* PROCESS SECTION */}
        <div className="admin-section-box" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Development Process</h3>
          <div className="admin-form-group">
            <label>Section Title</label>
            <input type="text" name="processTitle" value={formData.processTitle} onChange={handleChange} className="admin-input" />
          </div>
          
          {formData.processSteps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>Step {i + 1}</span>
              <input type="text" placeholder="Step Name" value={step} onChange={(e) => handleArrayChange('processSteps', i, null, e.target.value)} className="admin-input" />
              <button type="button" className="admin-icon-btn delete" onClick={() => removeArrayItem('processSteps', i)}><Trash2 size={18} /></button>
            </div>
          ))}
          <button type="button" className="admin-btn" style={{ padding: '0.5rem 1rem' }} onClick={() => addArrayItem('processSteps', '')}><Plus size={16} /> Add Process Step</button>
        </div>

        {/* CTA SECTION */}
        <div className="admin-section-box" style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Call To Action (CTA)</h3>
          <div className="admin-form-group">
            <label>CTA Title</label>
            <input type="text" name="ctaTitle" value={formData.ctaTitle} onChange={handleChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label>CTA Subtitle</label>
            <input type="text" name="ctaSubtitle" value={formData.ctaSubtitle} onChange={handleChange} className="admin-input" />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="admin-form-group" style={{ flex: 1 }}>
              <label>Button Text</label>
              <input type="text" name="ctaButtonText" value={formData.ctaButtonText} onChange={handleChange} className="admin-input" />
            </div>
            <div className="admin-form-group" style={{ flex: 1 }}>
              <label>Button Link</label>
              <input type="text" name="ctaButtonLink" value={formData.ctaButtonLink} onChange={handleChange} className="admin-input" placeholder="/#contact" />
            </div>
          </div>
        </div>

        <button type="submit" className="admin-btn" style={{ marginTop: '2rem', width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={isSaving}>
          {isSaving ? 'Saving Changes...' : 'Save Internal Page Changes'}
        </button>

      </form>
    </div>
  );
}
