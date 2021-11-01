import React from "react";
import worksData from '../Data/worksData'
import Card from './Card';
import Gallery from './Gallery';

import reactimg from '../../../PNGs/react2.png';
import nodeimg from '../../../PNGs/node.png';
import cssimg from '../../../PNGs/css.png';
import htmlimg from '../../../PNGs/html.png';
import jsimg from '../../../PNGs/js.png';

const SkillsSection = () => {

  const skills = [
    { title: "HTML", imgSrc: htmlimg, position: "up" },
    { title: "CSS", imgSrc: cssimg, position: "up" },
    { title: "JavaScript", imgSrc: jsimg, position: "up" },
    { title: "React", imgSrc: reactimg, position: "bottom" },
    { title: "Node.js", imgSrc: nodeimg, position: "bottom" },
  ];

  function scrollDown() {
    document.getElementById("here").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div id="portfolio-skills" className="skillsSection">
      <div className="container">
        <h1 className="page-header font-color-1">
            me.map()
        </h1>
        <div>
          <div className="upper d-g">
            {skills
              .filter((skill) => skill.position === "up")
              .map((skill) => (
                <Card key={skill.title} imgSrc={skill.imgSrc} title={skill.title} />
              ))}
          </div>
          <div className="lower d-g">
            {skills
              .filter((skill) => skill.position === "bottom")
              .map((skill) => (
                <Card key={skill.title} imgSrc={skill.imgSrc} title={skill.title} />
              ))}
          </div>
        </div>
        <Gallery items={worksData} />
      </div>
      <i onClick={scrollDown} className="fas fa-chevron-down fa-3x arrow-down arrow3 bounce"></i>
      <i onClick={scrollDown} className="fas fa-chevron-down fa-3x arrow-down arrow4 bounce"></i>
    </div>
  )
}

export default SkillsSection;