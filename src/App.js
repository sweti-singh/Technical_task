import './App.css';
import React, { useState } from 'react';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './Components/Signin.js';
import Buy from './Components/Buy.js';
import Cart from './Components/Cart.js';
import context from "./Components/userContext.js";



function App() {
  const [data, setData] = useState([]);

  return (

    <Router>
      <context.Provider value={[data, setData]}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signin />} />
          <Route path='/Buy' element={<Buy />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </context.Provider>
    </Router>
  );
}

export default App;
