import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './routes';
import PrivacyPolicy from './routes/quizzer/privacy-policy';
import QuizzerHome from './routes/quizzer/index';
import DeleteAccount from './routes/quizzer/delete-account';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Founder from './routes/founder';
import ServicesPage from './routes/services';
import ProjectsPage from './routes/projects';
import AboutPage from './routes/about';
import InsightsPage from './routes/insights';
import ContactPage from './routes/contact';

function App() {

  useEffect(()=>{
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

    return () => {
      lenis.destroy()
    }
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/quizzer" >
          <Route index element={<QuizzerHome />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="delete-account" element={<DeleteAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
