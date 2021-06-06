import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import './App.css';

function App() {
  return <Home Route path = "/" />;
}

export default App;
