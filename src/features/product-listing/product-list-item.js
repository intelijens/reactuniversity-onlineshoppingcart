import React from 'react'

export default function ProductListItem(props) {
  return <div className="product-list-item">
    <h3> {props.product.name}</h3>
    <div></div>
    {/* <img 
      height ={100}
      title={props.name}
      src={`/products/${props.image}`}
      /> */}
    <div>{props.product.description}</div>
    <div>{props.product.price}</div>
    <div>
      <button>
        add to cart
      </button>
    </div>
  </div>
}