import React from 'react'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Projects from '../Components/Projects'

function Home() {
  return (
    <div className='min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 __variable_d65c78'>
      <Intro />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home