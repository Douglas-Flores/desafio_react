import React, { useState } from 'react';
import logo from './ufrgslogo.webp';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="ImgHeader">
        <img src={logo} className="Ufrgs-logo" alt="UFRGS"></img>
      </div>
    </div>
  );
}

export default App;
