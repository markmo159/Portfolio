import React, {useState} from "react";
import worksData from './worksData'

import reactimg from '../../styles/react2.png';
import nodeimg from '../../styles/node.png';
import cssimg from '../../styles/css.png';
import htmlimg from '../../styles/html.png';
import jsimg from '../../styles/js.png';

const PortfolioSkills = () => {
  const [workNum, setWorkNum] = useState(1);

  function moveWorks (direction) {
    if (direction === 'right' && workNum < 3) {
      document.getElementById("arrow-left").classList.remove("arrow-max")
      document.getElementById("work-card").classList.add("slide-out-right")
      setTimeout(function(){ 
        setWorkNum (workNum + 1);
        document.getElementById("work-card").classList.remove("slide-out-right")
      }, 600);
      if (workNum === 2) {
        document.getElementById("arrow-right").classList.add("arrow-max")
      }
    } else if(direction === "left" && workNum > 1) {
      document.getElementById("arrow-right").classList.remove("arrow-max");
      document.getElementById("work-card").classList.add("slide-out-left")
      setTimeout(function(){ 
        setWorkNum (workNum - 1 );
        document.getElementById("work-card").classList.remove("slide-out-left")
      }, 600);
      if (workNum === 2) {
        document.getElementById("arrow-left").classList.add("arrow-max")
      }
    } 
  }

  function scrollDown () {
    document.getElementById('here').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div id="portfolio-skills" className="portfolio-skills">
      <div className="container">
        <h1 style={{textAlign:'center',paddingBottom:'60px',paddingTop:'10px',fontSize:'80px',color:'#33C0FF'}}>me.map()</h1>
        <div className="skills">
          <div className="upper">
            <div className="card">
              <div className="circle pulsate-fwd"><img src={htmlimg} alt="" /></div>
              <p>HTML</p>
            </div>
            <div className="card">
              <div className="circle pulsate-fwd"><img src={cssimg} alt="" /></div>
              <p>CSS</p>
            </div>
            <div className="card">
              <div className="circle pulsate-fwd"><img src={jsimg} alt="" /></div>
              <p>JavaScript</p>
            </div>
         </div>
         <div className="lower">
            <div className="card">
              <div className="circle pulsate-fwd"><img src={reactimg} alt="" /></div>
              <p>React</p>
            </div>
            <div className="card">
              <div className="circle pulsate-fwd"><img src={nodeimg} alt="" /></div>
              <p>Node.JS</p>
            </div>
          </div>
        </div>
        <div className="works">
          <i id="arrow-left" className="fas fa-chevron-left fa-3x works-arrow arrow-max" onClick={() => moveWorks('left')}></i>
          <div id="work-card" className="work-card">
            <img src={worksData[workNum].img} alt="project" />
            <div>
              <p>{worksData[workNum].p1}</p>
              <p>{worksData[workNum].p2}</p>
            </div>
            <button className="btn">Try it</button>
          </div>
          <i id="arrow-right" className="fas fa-chevron-right fa-3x works-arrow" onClick={() => moveWorks('right')}></i>
        </div>
      </div>
      <button className="arrow3 clear" onClick={scrollDown}><i className="fas fa-chevron-down fa-3x bounce"></i></button>
      <button className="arrow4 clear" onClick={scrollDown}><i className="fas fa-chevron-down fa-3x bounce"></i></button>
    </div>
  )
}

export default PortfolioSkills;