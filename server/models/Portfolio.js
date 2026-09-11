import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  hero: {
    title: { type: String, default: 'Full Stack\nDeveloper' },
    subtitle: { type: String, default: 'Crafting modern web applications with clean code and creative solutions.' },
    stats: [{ number: String, label: String }]
  },
  about: {
    title: { type: String, default: 'About Me' },
    description: { type: String, default: 'I\'m a passionate Software Developer with a strong interest in building modern, scalable, and user-friendly web applications.' },
    image: { type: String, default: '/prachi.png' },
    features: [{ iconSvg: String, text: String }]
  },
  services: [{
    title: String,
    desc: String,
    iconName: String, // Lucide icon name, e.g. 'Monitor', 'Smartphone'
    slug: String,
    internalPage: {
      heroTitle: String,
      heroSubtitle: String,
      typesTitle: String,
      typesItems: [{ title: String, iconName: String }],
      capabilitiesTitle: String,
      capabilitiesItems: [{ title: String, desc: String, iconName: String }],
      featuresTitle: String,
      featuresItems: [{ title: String, desc: String, iconName: String }],
      techStackTitle: String,
      techStackItems: [{ name: String, iconName: String }],
      processTitle: String,
      processSteps: [String],
      ctaTitle: String,
      ctaSubtitle: String,
      ctaButtonText: String,
      ctaButtonLink: String
    }
  }],
  skills: {
    description: { type: String, default: 'Skilled in modern full-stack development, cloud technologies, databases, and AI tools for building scalable and efficient applications.' },
    categories: [{
      iconSvg: String,
      title: String,
      items: String // e.g. "Java, C, JavaScript, Python, SQL"
    }]
  },
  projects: [{
    title: String,
    description: String,
    image: String,
    technologies: [String],
    features: [String],
    links: {
      github: String,
      live: String
    }
  }],
  contact: {
    address: { type: String, default: '123 Main Street, City, Country' },
    phone: { type: String, default: '+1234567890' },
    email: { type: String, default: 'example@email.com' },
    mapIframeUrl: { type: String, default: '' }
  }
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
