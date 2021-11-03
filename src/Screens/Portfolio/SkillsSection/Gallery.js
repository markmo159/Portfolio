import React, { useState } from 'react';

const Gallery = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const isRightArrowEnabled = selectedItemIndex > 0;
  const isLeftArrowEnabled = selectedItemIndex < items.length - 1 ;

  function moveItem(direction) {
    if (direction === "right" && selectedItemIndex < items.length - 1) {
      document.getElementById("gallery-card").classList.add("slide-out-right");
      setTimeout(function () {
        setSelectedItemIndex(selectedItemIndex + 1);
        document
          .getElementById("gallery-card")
          .classList.remove("slide-out-right");
      }, 600);
    } else if (direction === "left" && selectedItemIndex > 0) {
      document.getElementById("gallery-card").classList.add("slide-out-left");
      setTimeout(function () {
        setSelectedItemIndex(selectedItemIndex - 1);
        document.getElementById("gallery-card").classList.remove("slide-out-left");
      }, 600);
    }
  }

  return (
    <div className="gallery d-f jc-c ai-c">
      <i 
        id="arrow-left" 
        className={`fas fa-chevron-left fa-3x pointer ${isRightArrowEnabled ? "" : "arrow-max"}`}
        onClick={() => moveItem("left")}
      ></i>
      <div id="gallery-card" className="gallery-card d-f fd-c jc-sb">
        <img src={items[selectedItemIndex].img} alt="project" key={selectedItemIndex} />
        <div>
          <p>{items[selectedItemIndex].p1}</p>
          <p>{items[selectedItemIndex].p2}</p>
        </div>
        <button className="btn">Try it</button>
      </div>
      <i
        id="arrow-right"
        className={`fas fa-chevron-right fa-3x pointer ${isLeftArrowEnabled ? "" : "arrow-max"}`}
        onClick={() => moveItem("right")}
      ></i>
    </div>
  );
};


export default Gallery;