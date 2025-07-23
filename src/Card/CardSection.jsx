import React from "react"
import "./Card.css"

export function LeftColumn() {
  return (
    <div className="left-column">
      <img
        className="top-left-image"
        src={"./src/img/Mask4.png"}
        alt="Top left"
      />
      <div className="bottom-left-row">
        <img
          className="bottom-left-image"
          src={"./src/img/Mask1.png"}
          alt="Bottom left 1"
        />
        <img
          className="bottom-left-image"
          src={"./src/img/Mask2.png"}
          alt="Bottom left 2"
        />
      </div>
    </div>
  )
}

export function RightColumn() {
  return (
    <div className="right-column">
      <img className="right-image" src={"./src/img/Mask3.png"} alt="Right" />
      <div className="category-label">CATEGORY NAME</div>
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="gallery-container">
      <LeftColumn />
      <RightColumn />
    </div>
  )
}
