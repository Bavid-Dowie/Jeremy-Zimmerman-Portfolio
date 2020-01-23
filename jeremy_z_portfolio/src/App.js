import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import HeaderBackground from './components/HeaderBackground'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import './styles/style.css'

function App() {
  return (
    <div className='main'>
      <Header />
      <HeaderBackground />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <hr />
      <Footer />
    </div>
  )
}

export default App
