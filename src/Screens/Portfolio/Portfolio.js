import React from 'react';


import MeSection from './MeSection/MeSection.js';
import SkillsSection from './SkillsSection/SkillsSection.js';
import ContactSection from './ContactSection/ContactSection.js';

const Portfolio = () => {

  return (
  <div className="portfolio" >
    <MeSection />
    <SkillsSection />
    <ContactSection />
  </div>
  );
}

export default Portfolio;