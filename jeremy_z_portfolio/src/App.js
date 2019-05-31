import React from 'react';
import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import './App.css';
import Background1 from './components/Background1';
import Background2 from './components/Background2';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='main'>
      <Header />
      <Background1 />
      <AboutMe />
      <Projects />
      <Background2 />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
