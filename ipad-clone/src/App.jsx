import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Video from './components/Video'
import Cards from './components/Cards'
import Explore from './components/Explore'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Navbar1/>
   <Video/>
   <Cards/>
   <Explore/>
   </>
  )
}

export default App
