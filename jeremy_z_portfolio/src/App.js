import React from 'react';
import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Background1 from './components/Background1';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Header />
      <Background1 />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
