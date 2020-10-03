import React from 'react';
import './App.css';
import NavigationDrawer from "./components/navigationDrawer";
import {BrowserRouter as Router} from 'react-router-dom'
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
