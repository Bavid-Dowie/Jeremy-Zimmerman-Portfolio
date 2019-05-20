import React from 'react';
import Header from './components/Header'
import PortfolioMain from './components/PortfolioMain'
import PortfolioSecond from './components/PortfolioSecond'
import Footer from './components/Footer'
import './App.css';
import ParallaxDiv1 from './components/ParallaxDiv1';
import ParallaxDiv2 from './components/ParallaxDiv2';

function App() {
  return (
    <div className='main'>
      <Header />
      <ParallaxDiv1 />
      <PortfolioMain />
      <PortfolioSecond />
      <ParallaxDiv2 />
      <Footer />
    </div>
  );
}

export default App;
