import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technology from './components/Technologies'

function App() {
  return (
    <div className='mx-auto  container max-w-6xl'>
      <Navbar />
      <Hero />
      <Projects/>
      <Technology/>
    </div>
  )
}

export default App
