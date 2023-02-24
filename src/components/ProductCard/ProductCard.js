import React from 'react'
import Button, { buttonStyles } from '../Button/Button';

import './ProductCard.css'

const ProductCard = ({
  title,
  description,
  content,
  manufacturer,
  quantity,
  price,
  onEdit,
  onRemove
}) => (
  <div className="ProductCard">
    <h3 className="ProductCard-Title">{title}</h3>
    <p className="ProductCard-Description">{description}</p>
    <p className="ProductCard-Description">{content}</p>
    <span className="ProductCard-Manufacturer">{manufacturer}</span>
    <span className="ProductCard-Quantity">qty: {quantity}</span>
    <span className="ProductCard-Price">{price}$</span>
    <div className="ProductCard-Actions">
      <Button onClick={onEdit}>
        Edit
      </Button>
      <Button onClick={onRemove} style={buttonStyles.RED}>
        Remove
      </Button>
    </div>
  </div>
)

export default ProductCard;
