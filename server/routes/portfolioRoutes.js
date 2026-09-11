import express from 'express';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

// Seed data function to initialize DB if empty
const seedDatabase = async () => {
  const count = await Portfolio.countDocuments();
  if (count === 0) {
    const defaultData = new Portfolio({
      hero: {
        title: 'Full Stack\nDeveloper',
        subtitle: 'Crafting modern web applications with clean code and creative solutions.',
        stats: [{ number: '10', label: 'Projects Completed' }]
      },
      about: {
        title: 'About Me',
        description: "I'm a passionate Software Developer with a strong interest in building modern, scalable, and user-friendly web applications. I enjoy transforming ideas into high-quality digital solutions by writing clean, efficient, and maintainable code.",
        image: '/prachi.png',
        features: [
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>', text: 'As a Full Stack Developer, I build end-to-end web applications that are scalable, user-friendly, and performance-driven.' },
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', text: 'I enjoy solving complex problems and delivering reliable software solutions.' }
        ]
      },
      services: [
        { title: 'Website Development', desc: 'Custom, high-performance websites built for growth.', iconName: 'Monitor' },
        { title: 'Mobile App Development', desc: 'Intuitive iOS & Android applications.', iconName: 'Smartphone' },
        { title: 'Software Development', desc: 'Scalable enterprise software solutions.', iconName: 'Code' },
        { title: 'UI/UX Design', desc: 'User-centric designs that drive engagement.', iconName: 'PenTool' },
        { title: 'Graphic Design', desc: 'Stunning visuals and brand creatives.', iconName: 'Layout' },
        { title: 'Cloud Services', desc: 'Secure and scalable cloud infrastructure.', iconName: 'Cloud' },
        { title: 'Digital Marketing', desc: 'Data-driven marketing to boost your ROI.', iconName: 'TrendingUp' },
        { title: 'Social Media Management', desc: 'Engaging content and community building.', iconName: 'Share2' }
      ],
      skills: {
        description: 'Skilled in modern full-stack development, cloud technologies, databases, and AI tools for building scalable and efficient applications.',
        categories: [
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>', title: 'Programming Languages', items: 'Java, C, JavaScript, Python, SQL' },
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>', title: 'Frontend Development', items: 'HTML, CSS, Tailwind CSS, React.js' },
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>', title: 'Backend Development', items: 'REST API, Node.js, Express.js' },
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>', title: 'Databases', items: 'MySQL, MongoDB Cloud / Compass, Vector Databases, Redis' },
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>', title: 'Tools & Technologies', items: 'Git, GitHub, Netlify, Postman, Vercel, Render, HuggingFace' },
          { iconSvg: '<svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>', title: 'AI / Machine Learning', items: 'Currently learning and practicing LangChain, TensorFlow, Embeddings, Gemini API, OpenAI API, etc.' }
        ]
      },
      projects: [
        {
          title: "Personal Portfolio Website",
          description: "Developed a Full-stack personal portfolio website to showcase projects, skills, and achievements. Implemented a contact form with backend integration and email functionality using NodeMailer.",
          technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT Authentication", "MongoDB Atlas (Cloud)"],
          features: ["Responsive Design", "Project Showcase", "Secure Contact System", "Admin Dashboard"],
          links: { github: "https://github.com", live: "https://example.com" },
          image: "/portfolio.png"
        },
        {
          title: "Vendor Management System",
          description: "Developed a comprehensive Vendor Management System that streamlines vendor onboarding, profile and service management, project assignment, task tracking, purchase order creation, and deliverable submission. The platform enables Project Managers to manage projects, assign vendors, review submitted files, request changes, approve or reject deliverables, and track job status through a structured workflow.\n\nIt also provides vendors with a dedicated portal to view job offers, access task details and POs, upload deliverables, and resubmit corrected files when changes are requested. The system improves workflow transparency, reduces manual coordination, and ensures smooth collaboration between project teams and vendors.",
          technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT Authentication", "MongoDB Atlas (Cloud)", "REST API", "UI/UX", "Git", "GitHub", "Render", "Postman"],
          features: ["Four Role-Based Portals", "Secure JWT Authentication", "Project & Vendor Management", "Real-Time Workflow Tracking"],
          links: { github: "https://github.com", live: "https://example.com" },
          image: "/vendor_management_system.png"
        },
        {
          title: "LOGIN SYSTEM",
          description: "A secure full-stack login system built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, and JWT Authentication, providing user registration, secure login, protected routes, and session management.",
          technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT Authentication", "MongoDB Atlas (Cloud)"],
          features: ["Secure User Authentication", "JWT-Based Authorization", "Protected Routes", "Responsive User Interface"],
          links: { github: "https://github.com", live: "https://example.com" },
          image: "/login.png"
        }
      ],
      contact: {
        address: "New Delhi, India",
        phone: "+91 9876543210", // Placeholder
        email: "prachi989139@gmail.com",
        mapIframeUrl: ""
      }
    });
    await defaultData.save();
  }
};

// @route   GET /api/portfolio
// @desc    Get portfolio data
// @access  Public
router.get('/', async (req, res) => {
  try {
    await seedDatabase(); // Ensure data exists
    const portfolio = await Portfolio.findOne();
    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/portfolio/:section
// @desc    Update a section of the portfolio (hero, about, contact)
// @access  Public (for now)
router.put('/:section', async (req, res) => {
  const { section } = req.params;
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ msg: 'Portfolio not found' });
    }

    if (['hero', 'about', 'skills', 'contact'].includes(section)) {
      portfolio[section] = req.body;
      await portfolio.save();
      return res.json(portfolio);
    } else {
      return res.status(400).json({ msg: 'Invalid section' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/portfolio/array/:section
// @desc    Update the entire array of a section (services, projects, skills.categories)
// @access  Public
router.put('/array/:section', async (req, res) => {
    const { section } = req.params;
    try {
        const portfolio = await Portfolio.findOne();
        if (!portfolio) {
            return res.status(404).json({ msg: 'Portfolio not found' });
        }
        
        if (['services', 'projects'].includes(section)) {
            portfolio[section] = req.body;
            await portfolio.save();
            return res.json(portfolio);
        } else if (section === 'skills_categories') {
            portfolio.skills.categories = req.body;
            await portfolio.save();
            return res.json(portfolio);
        } else {
            return res.status(400).json({ msg: 'Invalid section' });
        }
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


export default router;
