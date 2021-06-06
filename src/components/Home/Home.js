import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Product from '../Product/Product.js';
import productImg from './images/background-img.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* <img className="background-img" src={backgroundImg} alt="background-img"></img> */}
      <Product 
        heading="Iphone X"
        price="$500"
        rating="⭐⭐⭐"
        img={productImg}
      />
    </div>
  );
  
}

export default Home;
