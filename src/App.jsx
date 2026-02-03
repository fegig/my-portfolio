import './App.css'
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './routes';
import PrivacyPolicy from './routes/quizzer/privacy-policy';
import QuizzerHome from './routes/quizzer/index';
import { useEffect } from 'react';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzer" >
          <Route index element={<QuizzerHome />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
