import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider.js';

const Product = (props) => {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        heading: props.heading,
        img: props.img,
        price: props.price,
        rating: props.rating,
      },
    });
  };


  return (
    <div className="product">
      <p>{props.heading}</p>
      <p>{props.price}</p>
      <p>{props.rating}</p>
      <br></br>
      <img src={props.img} alt="product-img"></img>
      <button onClick={addToBasket}>Add to cart</button> 
    </div>
  );

};

export default Product;
