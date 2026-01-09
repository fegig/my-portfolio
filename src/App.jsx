import { useEffect } from 'react'
import './App.css'
import Bios from './components/Bios'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Aos from "aos";
import 'aos/dist/aos.css';
import Lenis from 'lenis'

function App() {
  useEffect(()=>{
    Aos.init();

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  },[])

  return (
    <div className='snap-mandatory snap-y'>
      <Hero />
      <Bios />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
