import React from 'react';
import './App.css';
import NavigationDrawer from "./components/navigationDrawer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MyProducts from "./components/products";
import { CartProvider } from "./contexts/cartContext";


function App() {
  return (
    <div>
      <CartProvider>

          <Router>

              <NavigationDrawer />

          </Router>

      </CartProvider>
    </div>
  );
}

export default App;
