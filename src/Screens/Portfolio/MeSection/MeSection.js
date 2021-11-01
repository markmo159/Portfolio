import React from 'react';

import me from '../../../PNGs/me.png';

const MeSection = () => {

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
    <div id="portfolio-me" className="meSection" >
      <div className="container">
        <div className="about jc-sb ai-fe">
          <div className="about-text">
            <h1 className="about-text-h1" >Welcome</h1>
            <h2 className="about-text-h2" >Its me Mark Moiseev</h2>
            <h2 className="about-text-h2" >I am a <span className="font-color-danger">Full Stack Developer</span></h2>
            <button onClick={scrollingContact} className="btn">Contact me</button>
          </div>
          <div className=" heptagon heptagon-meSection"><img className="image-me pos-abs" src={me} alt='me' /></div>
        </div>
        <div className="text-box info">
          <p>Graduated from Ben-Gurion University with B.Sc degree in material engineering.</p>
          <p>I later realized my passion is to something alse.</p>
          <p>I started programming and I fell in love.</p>
          <p>From then to now I waste my free time to study, research and implement coding.</p>
          <p>The passion that comes with me will push every project I will work on to its limits !</p>
        </div>
        <i onClick={scrollDown} className="fas fa-chevron-down fa-3x bounce arrow-down arrow1"></i>
        <i onClick={scrollDown} className="fas fa-chevron-down fa-3x bounce arrow-down arrow2"></i>
      </div>
    </div>
  )
}

export default MeSection;