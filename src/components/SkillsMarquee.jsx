import React from 'react';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss, 
  SiNodedotjs, SiPython, SiDocker, SiMongodb, 
  SiPostgresql, SiGit, SiFigma, SiTailwindcss 
} from 'react-icons/si';
import './SkillsMarquee.css';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
];

export default function SkillsMarquee() {
  // Duplicating the array multiple times to ensure enough items to fill the screen seamlessly
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {duplicatedSkills.map((skill, index) => (
          <div className="marquee-item" key={index}>
            <skill.icon 
              className="marquee-icon" 
              style={{ '--hover-color': skill.color }} 
            />
            <span className="marquee-text">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
