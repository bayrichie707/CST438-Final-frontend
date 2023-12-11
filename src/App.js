import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import Home from './components/Home';
import Login from './components/Login';
import CoinDetails from './components/CoinDetails';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cryptos/*" element={<CryptoList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/coin/:coinId" element={<CoinDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
