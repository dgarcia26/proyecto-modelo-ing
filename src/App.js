import React from 'react';
import Nav from './components/Navegacion';

//Router
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Prueba from './components/Prueba';

import './App.css';

function App() {
 
  return (
    <div>      
    <Prueba/>         
    </div> 
      
  );
}

export default App;
