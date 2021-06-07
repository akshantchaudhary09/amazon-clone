import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './Header.css';
import amazonLogo from './images/Amazon_logo.svg.png';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../StateProvider.js';

const Header = () => {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="amazon-logo" src={amazonLogo} alt="amazon-logo"></img>
      </Link>
      <input type="text" placeholder="Search.."></input>
      <button className="search-bar-btn"><SearchIcon fontSize="medium"/></button>
      <Button className="btn">Login</Button>
      <Button className="btn"><span>Returns</span><br/> <span>& Orders</span></Button>
      <Button className="btn"><span>Your</span><br /> <span>prime</span></Button>
      <Link to="/checkout">
        <Button className="btn"><ShoppingCartIcon /></Button>
        <span className="count-basket">{basket?.length}</span>
      </Link>
    </div>
  );
}

export default Header;
