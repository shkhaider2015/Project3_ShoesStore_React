import React from 'react';
import './App.css';
import NavigationDrawer from "./components/navigationDrawer";
import {BrowserRouter as Router} from 'react-router-dom'
import Product from "./components/product";


function App() {
  return (
    <div>
      <Product />
      {/* <Router>
      <NavigationDrawer />
      </Router> */}
    </div>
  );
}

export default App;
