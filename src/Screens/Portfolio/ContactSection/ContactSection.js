import React from "react";

import swing from '../../../PNGs/swing.png';
import facebook from '../../../PNGs/facebook.png';
import mail from '../../../PNGs/mail.png';
import grass from '../../../PNGs/grass.png';
import slide from '../../../PNGs/slide.png';
import linkdin from '../../../PNGs/linkdin.png';
import sun from '../../../PNGs/sun.png';
import cloud from '../../../PNGs/cloud.png';


const ContactSection = () => {
return (
  <div id="here" className="ContactSection">
          <h1 className="page-header font-color-2">me.find()</h1>
          <div className="main-block pos-rel" >
            <img src={swing} className="pos-abs swing" alt='swing' />
            <a href='https://www.facebook.com/markmo159/' target="_blank" rel="noreferrer"><img src={facebook} className="pos-abs facebook" alt='facebook' /></a>
            <a href="mailto:markmo159@gmail.com"><img src={mail} className="pos-abs mail" alt='mail' /></a>
            <img src={grass} className="pos-abs grass" alt='grass' />
            <img src={slide} className="pos-abs slide" alt='slide' />
            <a href='https://www.linkedin.com/in/mark-moiseev-05389618b/' target="_blank" rel="noreferrer"><img src={linkdin} className="pos-abs linkdin" alt='linkdin' /></a>
            <img src={sun} className="pos-abs sun" alt='sun' />
            <img src={cloud} className="pos-abs cloud1 slide-right" alt='cloud' />
            <img src={cloud} className="pos-abs cloud2 slide-left" alt='cloud' />
          </div>
    </div>
)
}

export default ContactSection;