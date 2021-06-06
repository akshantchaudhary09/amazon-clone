import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import amazonLogo from './images/Amazon_logo.svg.png';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  return (
    <div className="header">
      <img className="amazon-logo" src={amazonLogo} alt="amazon-logo"></img>
      <input type="text" placeholder="Search.."></input>
      <button className="search-bar-btn"><SearchIcon fontSize="medium"/></button>
      <Button className="btn">Login</Button>
      <Button className="btn"><span>Returns</span><br/> <span>& Orders</span></Button>
      <Button className="btn"><span>Your</span><br /> <span>prime</span></Button>
      <Button className="btn"><ShoppingCartIcon /></Button>
    </div>
  );
}

export default Header;