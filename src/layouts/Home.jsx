import React from 'react'
import Intro from '../Components/Intro'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import { DSAStats } from '../Components/DSA'
import {AppNavbar} from '../Components/Navbar'
import Contact from '../Components/Contact'
import { Milestone } from '../Components/Milestone'
import EXPERIENCE  from '../data/Experience'

function Home() {
  return (
    <div className='min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6'>
      <AppNavbar />
      <Intro />
      <Skills />
      <div className='mt-12'>
        <h2 className='text-xl font-bold mb-6'>Experience</h2>
        {
          EXPERIENCE.map((item, index) => (
            <div key={index} className='mb-4'>
              <Milestone
                logoUrl={item.logoUrl}
                altText={item.company}
                title={item.title}
                subtitle={item.company}
                href={item.href}
                badges={item.badges}
                period={`${item.start} - ${item.end}`}
                description={item.description}
              />
            </div>
          ))
        }
      </div>
      <Projects />
      <DSAStats />
      <Contact />
    </div>
  )
}

export default Home