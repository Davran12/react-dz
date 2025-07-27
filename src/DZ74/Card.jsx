import React from "react"
import "./Card.css"

const Card = ({title, children, footer}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">{children}</div>
      <div className="card-footer">{footer}</div>
    </div>
  )
}

export default Card
