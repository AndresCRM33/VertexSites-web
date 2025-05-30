import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import OurServices from './components/OurServices/OurSeervices'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <OurServices/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
