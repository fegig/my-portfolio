import { useEffect } from 'react'
import './App.css'
import Bios from './components/Bios'
import Header from './components/header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Aos from "aos";
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    Aos.init();

  },[])

  return (
    <div className='snap-mandatory snap-y'>
      <Header />
      <Hero />
      <Bios />
      <Projects />
    </div>
  )
}

export default App
