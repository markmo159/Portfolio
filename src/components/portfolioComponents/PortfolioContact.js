import React from "react";

import swing from '../../styles/swing.png';
import facebook from '../../styles/facebook.png';
import mail from '../../styles/mail.png';
import grass from '../../styles/grass.png';
import slide from '../../styles/slide.png';
import linkdin from '../../styles/linkdin.png';
import sun from '../../styles/sun.png';
import cloud from '../../styles/cloud.png';


const PortfolioContact = () => {
return (
  <div id="here" className="portfolio-contact">
          <h1 style={{textAlign:'center',paddingBottom:'60px',paddingTop:'10px',fontSize:'80px',color:'#1B6384'}}>me.find()</h1>
          <div className="main-block" >
            <img src={swing} className="swing" alt='swing' />
            <a href='https://www.facebook.com/markmo159/' target="_blank" rel="noreferrer"><img src={facebook} className="facebook" alt='facebook' /></a>
            <a href="mailto:markmo159@gmail.com"><img src={mail} className="mail" alt='mail' /></a>
            <img src={grass} className="grass" alt='grass' />
            <img src={slide} className="slide" alt='slide' />
            <a href='https://www.linkedin.com/in/mark-moiseev-05389618b/' target="_blank" rel="noreferrer"><img src={linkdin} className="linkdin" alt='linkdin' /></a>
            <img src={sun} className="sun" alt='sun' />
            <img src={cloud} className="cloud1 slide-right" alt='cloud' />
            <img src={cloud} className="cloud2 slide-left" alt='cloud' />
          </div>
    </div>
)
}

export default PortfolioContact;