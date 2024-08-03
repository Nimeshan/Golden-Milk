import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Product from './Product';
import Footer from './Footer';

function App() {
  return (
    <div>
    <Header />
      <div className='hero' id='Home'>
        <img src='/Assets/img1.jpg' alt='Golden Milk' className='mone'/>
        <div className='textContent'>
        <h1>Golden Milk</h1>
        <h4>Drink Once and Experience Difference</h4>
        <a href='#Shop'>
          <button className='cta-button'>Grab yours Now!</button>
        </a>
        </div>
      </div>
      <Body />
      <Product />
      <Footer />
  </div>
  );
}

export default App;