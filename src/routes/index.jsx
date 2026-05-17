import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Positioning from '../components/Positioning'
import HomeCapabilities from '../components/HomeCapabilities'
import HomeProjectPreview from '../components/HomeProjectPreview'
import Metrics from '../components/Metrics'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Stacks from '../components/techStack';

function Home() {
  return (
    <div className="min-h-screen bg-background-100 text-foreground-100">
      <Navbar />
      <Hero />
      <Stacks/>
      <Positioning />
      <HomeCapabilities />
      <HomeProjectPreview />
      <Metrics />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
