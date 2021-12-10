


import React from 'react'
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/nav';
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
