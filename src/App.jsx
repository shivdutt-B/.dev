import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import TechStack from './Components/TechStack'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <div className="max-w-[1000px] w-[100%] m-auto  px-[3vw]"> */}
        <Intro />
        <TechStack />
        <Projects />
      {/* </div> */}
    </>
  )
}

export default App
