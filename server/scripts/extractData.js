import fs from 'fs';
import path from 'path';

const files = [
  { file: 'WebsiteDevelopment.jsx', slug: 'website-development', iconName: 'Monitor' },
  { file: 'MobileDevelopment.jsx', slug: 'mobile-development', iconName: 'Smartphone' },
  { file: 'SoftwareDevelopment.jsx', slug: 'software-development', iconName: 'Code' },
  { file: 'UiUxDesign.jsx', slug: 'ui-ux-design', iconName: 'PenTool' },
  { file: 'GraphicDesign.jsx', slug: 'graphic-design', iconName: 'Layout' },
  { file: 'CloudServices.jsx', slug: 'cloud-services', iconName: 'Cloud' },
  { file: 'DigitalMarketing.jsx', slug: 'digital-marketing', iconName: 'TrendingUp' },
  { file: 'SocialMedia.jsx', slug: 'social-media', iconName: 'Share2' }
];

const dir = path.join(process.cwd(), '../src/pages');

const extractedServices = [];

const parseFile = (filename, slug, mainIcon) => {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf-8');

  // Regex extraction
  const heroTitle = content.match(/<h1 className="webdev-title">(.*?)<\/h1>/)?.[1] || '';
  const heroSubtitle = content.match(/<p className="webdev-subtitle">\s*(.*?)\s*<\/p>/)?.[1] || '';

  // Types array
  const typesMatch = content.match(/{\['(.*?)'\]\.map/);
  let typesItems = [];
  if (typesMatch) {
    const arrStr = `['${typesMatch[1]}']`;
    try {
      // Evaluate array safely
      const arr = eval(arrStr);
      typesItems = arr.map(t => ({ title: t, iconName: mainIcon }));
    } catch(e) {}
  }
  const typesTitle = content.match(/<h2 className="section-title">(.*?)<\/h2>/g)?.[0]?.replace(/<[^>]+>/g, '') || 'Types We Develop';

  // Tech stack
  let techStackItems = [];
  const directTechMatch = content.match(/{\['(.*?)'\]\.map/g);
  if (directTechMatch && directTechMatch.length > 1) {
    const arrStr = directTechMatch[1].replace(/{/, '').replace(/\.map.*/, '');
    try {
      const arr = eval(arrStr);
      techStackItems = arr.map(t => ({ name: t, iconName: 'Code' }));
    } catch(e) {}
  } else {
    // If it uses techStack array variable
    const techStackVar = content.match(/const techStack = \[([\s\S]*?)\];/);
    if (techStackVar) {
      const names = [...techStackVar[1].matchAll(/name:\s*'([^']+)'/g)].map(m => m[1]);
      techStackItems = names.map(t => ({ name: t, iconName: 'Code' }));
    }
  }

  // Process
  let processSteps = [];
  const processMatch = content.match(/{\['(.*?)'\]\.map/g);
  if (processMatch) {
    const lastArrStr = processMatch[processMatch.length - 1].replace(/{/, '').replace(/\.map.*/, '');
    try {
      const arr = eval(lastArrStr);
      processSteps = arr;
    } catch(e) {}
  }

  // CTA
  const ctaTitleMatch = content.match(/<h2>(.*?)<\/h2>/g);
  const ctaTitle = ctaTitleMatch ? ctaTitleMatch[ctaTitleMatch.length-1].replace(/<[^>]+>/g, '') : 'Ready to start?';
  const ctaSubMatch = content.match(/<p>(Let's.*?)<\/p>/);
  const ctaSubtitle = ctaSubMatch ? ctaSubMatch[1] : '';

  return {
    title: heroTitle || slug,
    desc: heroSubtitle.substring(0, 50) + '...',
    iconName: mainIcon,
    slug,
    internalPage: {
      heroTitle,
      heroSubtitle,
      typesTitle,
      typesItems,
      capabilitiesTitle: 'Technical Capabilities',
      capabilitiesItems: [
        { title: 'Feature 1', desc: 'Description 1', iconName: mainIcon },
        { title: 'Feature 2', desc: 'Description 2', iconName: mainIcon },
        { title: 'Feature 3', desc: 'Description 3', iconName: mainIcon }
      ],
      featuresTitle: 'Key Features & Standards',
      featuresItems: [
        { title: 'Standard 1', desc: 'Description 1', iconName: 'CheckCircle' },
        { title: 'Standard 2', desc: 'Description 2', iconName: 'CheckCircle' },
        { title: 'Standard 3', desc: 'Description 3', iconName: 'CheckCircle' }
      ],
      techStackTitle: 'Our Tech Stack',
      techStackItems,
      processTitle: 'Our Development Process',
      processSteps,
      ctaTitle,
      ctaSubtitle,
      ctaButtonText: 'Start Your Project',
      ctaButtonLink: '/#contact'
    }
  };
};

for (const file of files) {
  const data = parseFile(file.file, file.slug, file.iconName);
  if (data) extractedServices.push(data);
}

fs.writeFileSync(path.join(process.cwd(), 'extracted.json'), JSON.stringify(extractedServices, null, 2));
console.log('Extraction complete');
