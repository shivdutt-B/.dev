import React from 'react'
// import Intro from '../components/Intro'
import Skills from 'src/components/Skills'
import Projects from '../Components/Projects'
import { DSAStats } from '@/components/DSA'
import {AppNavbar} from '../components/Navbar'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6'>
      <AppNavbar />
      {/* <Intro /> */}
      <Skills />
      <Projects />
      <DSAStats />
      <Contact />
    </div>
  )
}

export default Home