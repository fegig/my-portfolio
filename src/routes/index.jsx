import { useEffect } from 'react'
import Bios from '../components/Bios'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'


function Home() {
 
  return (
    <div className='snap-mandatory snap-y'>
      <Hero />
      <Bios />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
