import React from 'react';

import me from '../../styles/me.png';

const PortfolioMe = () => {

  function scrollingContact () {
    document.getElementById('here').scrollIntoView({
      behavior: 'smooth'
    });
  }
  function scrollDown () {
    document.getElementById('portfolio-skills').scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  return (
    <div id="portfolio-me" className="portfolio-me" >
      <div className="container">
        <div className="about-me">
          <div className="about-me-text">
            <h1 style={{fontSize:'70px'}}>Welcome</h1>
            <h2 className="about-me-text-small-header" >Its me Mark Moiseev</h2>
            <h2 className="about-me-text-small-header" >I am a <span className="home-btn-dot">Full Stack Developer</span></h2>
            <button onClick={scrollingContact} className="btn">Contact me</button>
          </div>
          <div className="shape"><img className="me-img" src={me} alt='me' /></div>
        </div>
        <div className="info">
          <p>Graduated from Ben-Gurion University with B.Sc degree in material engineering.</p>
          <p>I later realized my passion is to something alse.</p>
          <p>I started programming and I fell in love.</p>
          <p>From then to now I waste my free time to study, research and implement coding.</p>
          <p>The passion that comes with me will push every project I will work on to its limits !</p>
        </div>
        <button className="arrow1 clear" onClick={scrollDown}><i className="fas fa-chevron-down fa-3x bounce"></i></button>
        <button className="arrow2 clear" onClick={scrollDown}><i className="fas fa-chevron-down fa-3x bounce"></i></button>
      </div>
    </div>
  )
}

export default PortfolioMe;