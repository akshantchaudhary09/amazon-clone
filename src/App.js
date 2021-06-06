import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    // <Home Route path = "/" />
    <Header Route path = "/" />
  );
}

export default App;
