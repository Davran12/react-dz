import React from "react"
import "./ProductCard.css"

const ProductCard = ({image, title, brand, oldPrice, newPrice}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-brand">{brand}</p>
      <h3 className="product-title">{title}</h3>
      <div className="product-prices">
        <span className="old-price">${oldPrice}</span>
        <span className="new-price">${newPrice}</span>
      </div>
    </div>
  )
}

export default ProductCard
