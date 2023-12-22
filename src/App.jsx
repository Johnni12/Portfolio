import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technology from './components/Technologies'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className='mx-auto  container max-w-6xl'>
      <Navbar />
      <Hero />
      <Projects/>
      <Technology/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
