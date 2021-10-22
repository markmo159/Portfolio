import React from "react";

const Gallery = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);

  const isRightArrowEnabled = selectedItemIndex > 1;
  const isLeftArrowEnabled = selectedItemIndex < items.length;

  function moveItem(direction) {
    if (direction === "right" && items < items.length) {
      document.getElementById("work-card").classList.add("slide-out-right");
      setTimeout(function () {
        setSelectedItemIndex(selectedItemIndex + 1);
        document
          .getElementById("work-card")
          .classList.remove("slide-out-right");
      }, 600);
    } else if (direction === "left" && selectedItemIndex > 1) {
      document.getElementById("work-card").classList.add("slide-out-left");
      setTimeout(function () {
        setSelectedItemIndex(selectedItemIndex - 1);
        document.getElementById("work-card").classList.remove("slide-out-left");
      }, 600);
    }
  }

  return (
    <div className="works">
      <i
        id="arrow-left"
        className={`fas fa-chevron-left fa-3x works-arrow ${
          isRightArrowEnabled ? "" : "arrow-max"
        }`}
        onClick={() => moveItem("left")}
      ></i>
      <div id="work-card" className="work-card">
        <img src={items[selectedItemIndex].img} alt="project" />
        <div>
          <p>{items[selectedItemIndex].p1}</p>
          <p>{items[selectedItemIndex].p2}</p>
        </div>
        <button className="btn">Try it</button>
      </div>
      <i
        id="arrow-right"
        className={`fas fa-chevron-right fa-3x works-arrow ${
          isLeftArrowEnabled ? "" : "arrow-max"
        }`}
        onClick={() => moveItem("right")}
      ></i>
    </div>
  );
};
