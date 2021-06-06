import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div className="product">
      <p>{props.heading}</p>
      <p>{props.price}</p>
      <p>{props.rating}</p>
      <br></br>
      <img src={props.img} alt="product-img"></img>
      <button>Add to cart</button> 
    </div>
  );

};

export default Product;
