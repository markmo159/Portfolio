import React, { useState } from "react";
import worksData from "./worksData";

import reactimg from "../../styles/react2.png";
import nodeimg from "../../styles/node.png";
import cssimg from "../../styles/css.png";
import htmlimg from "../../styles/html.png";
import jsimg from "../../styles/js.png";

const skills = [
  { title: "HTML", imgSrc: htmlimg, position: "up" },
  { title: "CSS", imgSrc: cssimg, position: "up" },
  { title: "JavaScript", imgSrc: jsimg, position: "up" },
  { title: "React", imgSrc: htmlimg, position: "bottom" },
  { title: "Node.js", imgSrc: htmlimg, position: "bottom" },
];

const PortfolioSkills = () => {
  function scrollDown() {
    document.getElementById("here").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div id="portfolio-skills" className="portfolio-skills">
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "60px",
            paddingTop: "10px",
            fontSize: "80px",
            color: "#33C0FF",
          }}
        >
          me.map()
        </h1>
        <div className="skills">
          <div className="upper">
            {skills
              .filter((skill) => skill.position === "up")
              .map((skill) => (
                <Card imgSrc={skill.imgSrc} title={skill.title} />
              ))}
          </div>
          <div className="lower">
            {skills
              .filter((skill) => skill.position === "bottom")
              .map((skill) => (
                <Card imgSrc={skill.imgSrc} title={skill.title} />
              ))}
          </div>
        </div>
        <Gallery 
          items={worksData}
        />
      </div>
      <button className="arrow3 clear" onClick={scrollDown}>
        <i className="fas fa-chevron-down fa-3x bounce"></i>
      </button>
      <button className="arrow4 clear" onClick={scrollDown}>
        <i className="fas fa-chevron-down fa-3x bounce"></i>
      </button>
    </div>
  );
};

export default PortfolioSkills;
