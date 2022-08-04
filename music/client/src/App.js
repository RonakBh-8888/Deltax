import React from 'react';
import Music from './components/Music';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Addsong from './components/Addsong';
//import {Switch,Route} from "react-router-dom"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Music />
      <Routes>
         <Route exact path="/Addsong" element={<Addsong />} />
      </Routes>
      
      
        
        
    </Router>
    </>
  );
}

export default App;
