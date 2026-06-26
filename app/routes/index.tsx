import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Positioning from '../components/home/Positioning'
import HomeCapabilities from '../components/home/HomeCapabilities'
import HomeProjectPreview from '../components/home/HomeProjectPreview'
import Metrics from '../components/sections/Metrics'
import CTA from '../components/sections/CTA'
import Footer from '../components/layout/Footer'
import Stacks from '../components/home/techStack';
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "FegigTech | Fegig Technologies Limited" },
  { name: "description", content: "Fegig Technologies Limited builds scalable web, mobile, AI, cloud, and enterprise software solutions from Abraka, Nigeria." },
];

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
