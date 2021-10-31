import React from 'react';


import PortfolioMe from './portfolioComponents/PortfolioMe';
import PortfolioSkills from './portfolioComponents/PortfolioSkills';
import PortfolioContact from './portfolioComponents/PortfolioContact';

const Portfolio = () => {

  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
  <div className="portfolio" >
    <button onClick={backToTop} className="btn toTopBtn">
      <div>
      <i className="fas fa-arrow-up"></i>
      <p>Back to Top</p>
      </div>
    </button>
    <PortfolioMe />
    <PortfolioSkills />
    <PortfolioContact />
  </div>
  );
}

export default Portfolio;