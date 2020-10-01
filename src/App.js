import React from 'react';
import './App.css';
import NavigationDrawer from "./components/navigationDrawer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MyProducts from "./components/products";
import CartList from "./components/cartList";


function App() {
  return (
    <div>
      {/* <MyProducts /> */}
      {/* <Router>
      <NavigationDrawer />
      </Router> */}
      <CartList />
    </div>
  );
}

export default App;
