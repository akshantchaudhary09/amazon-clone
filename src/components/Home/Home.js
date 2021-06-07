import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Product from '../Product/Product.js';
import productImg from './images/background-img.jpg';
import Grid from '@material-ui/core/Grid';
import productList from "../Product/productList.js"

const Home = () => {
  return (
    <div className="home">
      {/* <img className="background-img" src={backgroundImg} alt="background-img"></img> */}
      <Grid container spacing={3} className="home-container1">
      {productList[0].map((product) => 
          <Grid item xs={6}>
            <Product 
              heading={product.heading}
              price={product.price}
              rating={product.rating}
              img={product.img}
            />
          </Grid>
        )}
        {productList[1].map((product) => 
          <Grid item xs={4}>
            <Product 
              heading={product.heading}
              price={product.price}
              rating={product.rating}
              img={product.img}
            />
          </Grid>
        )}    
        
      </Grid>
      
      
    </div>
  );
  
}

export default Home;
