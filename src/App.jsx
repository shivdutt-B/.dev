import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Intro />
    </>
  )
}

export default App