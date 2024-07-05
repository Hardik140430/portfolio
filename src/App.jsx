import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import MyExpertise from './components/MyExpertise'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <About/>
     <Service />
     <MyExpertise />
     <Footer />
    </>
  )
}

export default App
