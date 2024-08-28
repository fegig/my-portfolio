import './App.css'
import Bios from './components/Bios'
import Header from './components/header'
import Hero from './components/Hero'
import Projects from './components/Projects'
function App() {
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
