import React from 'react';


import PortfolioMe from './portfolioComponents/PortfolioMe';
import PortfolioSkills from './portfolioComponents/PortfolioSkills';
import PortfolioContact from './portfolioComponents/PortfolioContact';

const Portfolio = () => {

  return (
  <div className="portfolio" >
    <PortfolioMe />
    <PortfolioSkills />
    <PortfolioContact />
  </div>
  );
}

export default Portfolio;