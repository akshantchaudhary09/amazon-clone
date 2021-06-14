import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider.js';

const Product = ({ id, title, image, price, rating }) => {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        heading: title,
        img: image,
        price: price,
        rating: rating,
      },
    });
  };


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{rating}</p>
      </div>
      <img src={image} alt="product-img"></img>
      <button onClick={addToBasket}>Add to cart</button> 
    </div>
  );

};

export default Product;
