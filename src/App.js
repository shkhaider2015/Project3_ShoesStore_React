import React from 'react';
import './App.css';
import NavigationDrawer from "./components/navigationDrawer";
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div>
      
      <Router>
      <NavigationDrawer />
      </Router>
    </div>
  );
}

export default App;
