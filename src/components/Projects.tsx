import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ProjectType = {
  name: string;
  type: "web" | "mobile";
  description: string;
  stacks: { name: string; icon: string }[];
  image: string;
  buttonColor: string;
  link: string;
}

const projectList: ProjectType[] | undefined = [
  {
    name: "Cellus by Eleastar (Web)",
    type: "web",
    description: "Cellus by Eleastar - Pay bills, stay connected, buy and sell assets, bank with Cryptocurrency and transfer cash, all in one app.",
    stacks: [{ name: "React JS", icon: "react.png" }, { name: "TS", icon: "ts.png" }, {name: "React Router 7", icon: "rr7.png"}, {name: "Tanstack Query", icon: "tq.png"}],
    image: "/assets/shots/cellus-web.png",
    buttonColor: "#052659",
    link: "https://cellus.app"
  },
  {
    name: "Exdra",
    type: "web",
    description: "Exdra offers seamless data bundles, airtime, TV subscriptions, and utility bill payments all as a family or clique package also request finance from any of your cliques.",
    stacks: [{ name: "react", icon: "react.png" }, { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/exdra-web.png",
    buttonColor: "#00c466",
    link: "https://exdra.click"
  },
  {
    name: "Ootu academy",
    type: "web",
    description: "Ootu Academy is a platform for learning modern technologies meeting modern market demands all at affordable fees, connecting students to the right mentors and resources.",
    stacks: [{ name: "React Router 7", icon: "rr7.png" }, { name: "Cloudflare Workers", icon: "cf.png" }, {name: "Hono", icon: "hono.png"},  { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/ootu-academy.png",
    buttonColor: "#21181e",
    link: "https://dev.ootu.me"
  },
  {
    name: "Coin 360 Concept",
    type: "web",
    description: "Coin360 Concept - Your Simplified Crypto & Gift Card Trading Hub, and also learn fx and other trading strategies.",
    stacks: [{ name: "Svelte", icon: "svelte.png" }, { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/c360c.png",
    buttonColor: "#3a061e",
    link: "https://c360concept.com"
  },
  {
    name: "Eleastar.com",
    type: "web",
    description: "Welcome to Eleastar Technologies Ltd official website, we are a software development company that specializes in building web and mobile applications.",
    stacks: [{ name: "next js", icon: "next.png" }, { name: "JS", icon: "js.png" }],
    image: "/assets/shots/eleastar.png",
    buttonColor: "#052659",
    link: "https://eleastar.com"
  },
  {
    name: "Cellus by Eleastar (Mobile)",
    type: "mobile",
    description: "Cellus is a mobile app that allows you to manage your bank using cryptocurrency and bills and services.",
    stacks: [{ name: "react Native", icon: "RN.png" }, { name: "expo", icon: "expo.png" }, { name: "typescript", icon: "ts.png" },],
    image: "/assets/shots/cellus-mobile.png",
    buttonColor: "#052659",
    link: "https://cellus.app"
  },
  {
    name: "Exdra (Mobile)",
    type: "mobile",
    description: "Exdra is a mobile app that allows you to manage your data bundles, airtime, TV subscriptions, and utility bill payments all as a family or clique package also request finance from any of your cliques.",
    stacks: [{ name: "react Native", icon: "RN.png" }, { name: "expo", icon: "expo.png" }, { name: "typescript", icon: "ts.png" },],
    image: "/assets/shots/exdra-mobile.png",
    buttonColor: "#052659",
    link: "https://exdra.click"
  }
]

export default function Projects() {
  const mobileProjects = projectList?.filter(p => p.type === "mobile") || []
  const webProjects = projectList?.filter(p => p.type === "web") || []
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50
    if (info.offset.x > threshold && currentMobileIndex > 0) {
      setCurrentMobileIndex(currentMobileIndex - 1)
    } else if (info.offset.x < -threshold && currentMobileIndex < mobileProjects.length - 1) {
      setCurrentMobileIndex(currentMobileIndex + 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentMobileIndex(index)
  }

  return (
    <section className="bg-background-100 snap-start w-full py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16" data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine">
          <h2 className="tracking-wider text-4xl md:text-5xl font-bold text-foreground-100 mb-6">
            Recent Projects
          </h2>
          <blockquote className="text-lg md:text-xl text-foreground-200 italic max-w-2xl mx-auto">
            "Innovation distinguishes between a leader and a follower." 
            <span className="block mt-2 text-foreground-100 not-italic">— Steve Jobs</span>
          </blockquote>
        </div>

        {/* Web Projects */}
        <div className="space-y-12 md:space-y-16 mb-20">
          {webProjects.map((project, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-down" : "fade-up"}
              data-aos-easing="ease-out-cubic"
              className="group relative w-full overflow-hidden"
            >
              <div
                className="relative overflow-hidden rounded-3xl border transition-all duration-500 ease-out"
                style={{
                  borderColor: `${project.buttonColor}40`,
                  backgroundColor: 'rgba(240, 227, 222, 0.03)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-20 blur-2xl scale-110 transition-transform duration-700 group-hover:scale-125 group-hover:opacity-30"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                
                <div className="absolute inset-0 bg-linear-to-br from-background-100/80 via-background-100/60 to-background-100/40 backdrop-blur-sm" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
                  <div className={`flex flex-col justify-center space-y-6 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                   
                    <h3 className="font-bold text-2xl md:text-3xl text-white transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-base md:text-lg text-foreground-200 font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.stacks.map((stack, stackIndex) => (
                        <div
                          key={stackIndex}
                          className="relative group/icon"
                          data-aos="zoom-in"
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 p-2 rounded-lg bg-background-200/50 backdrop-blur-sm border border-foreground-100/10 transition-all duration-300 hover:scale-110 hover:border-foreground-100/30 hover:bg-background-200/70">
                            <img
                              src={`/icons/${stack.icon}`}
                              alt={stack.name}
                              className="w-full h-full object-contain grayscale transition-all duration-300 group-hover/icon:grayscale-0"
                              title={stack.name}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                        style={{ backgroundColor: project.buttonColor }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>Visit Site</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-center justify-center ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      data-aos-duration="600"
                    >
                      <div className="absolute inset-0 bg-linear-to-t from-background-100/20 to-transparent z-10 pointer-events-none" />
                      <img
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Projects Carousel */}
        {mobileProjects.length > 0 && (
          <div className="mt-20">
        
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-3xl min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {mobileProjects.map((project, index) => {
                    if (index !== currentMobileIndex) return null
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        className="group relative w-full cursor-grab active:cursor-grabbing"
                      >
                        <div
                          className="relative overflow-hidden rounded-3xl transition-all duration-500 ease-out mx-auto max-w-6xl"
                      
                        >
                      
                          
                          {/* Content */}
                          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 items-center">
                            {/* Project Info */}
                            <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="flex flex-col justify-center space-y-6"
                            >
                     
                              {/* Project Name */}
                              <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="font-bold text-2xl md:text-3xl text-foreground-100 transition-colors duration-300 group-hover:text-foreground-200"
                              >
                                {project.name}
                              </motion.h3>

                              {/* Description */}
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-base md:text-lg text-foreground-200 leading-relaxed"
                              >
                                {project.description}
                              </motion.p>

                              {/* Tech Stack */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex flex-wrap items-center gap-3"
                              >
                                {project.stacks.map((stack, stackIndex) => (
                                  <motion.div
                                    key={stackIndex}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.7 + stackIndex * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="relative group/icon"
                                  >
                                    <div className="w-10 h-10 md:w-12 md:h-12 p-2 rounded-lg bg-background-200/50 backdrop-blur-sm border border-foreground-100/10 transition-all duration-300 hover:border-foreground-100/30 hover:bg-background-200/70">
                                      <img
                                        src={`/icons/${stack.icon}`}
                                        alt={stack.name}
                                        className="w-full h-full object-contain grayscale transition-all duration-300 group-hover/icon:grayscale-0"
                                        title={stack.name}
                                      />
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>

                              {/* Visit Button */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="pt-2"
                              >
                                <motion.a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                                  style={{ backgroundColor: project.buttonColor }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span>Preview App</span>
                                  <motion.svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </motion.svg>
                                </motion.a>
                              </motion.div>
                            </motion.div>

                            {/* Mobile Mockup - Centered iPhone 17 */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="flex items-center justify-center"
                            >
                              <motion.div
                                className="relative max-w-[280px] w-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* iPhone 17 Frame */}
                                <div className="relative mx-auto">
                                  <div
                                    className="relative rounded-[2.5rem] p-2 md:p-2.5 shadow-2xl"
                                    style={{
                                      background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                                      boxShadow: `0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 1.5px rgba(255, 255, 255, 0.05), inset 0 0 0 0.5px rgba(255, 255, 255, 0.08)`
                                    }}
                                  >
                                    {/* Dynamic Island - iPhone 17 Style */}
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
                                      <div className="relative">
                                        <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center gap-2 px-4">
                                          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                                          <div className="w-8 h-1.5 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/50 rounded-full blur-sm"></div>
                                      </div>
                                    </div>
                                    
                                    {/* Screen */}
                                    <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/19.5]">
                                      {/* Status Bar with Dynamic Island integration */}
                                      <div className="absolute top-0 left-0 right-0 h-12 z-10 flex items-start justify-between px-6 pt-3">
                                        <div className="flex items-center gap-1 mt-1">
                                          <span className="text-black text-[11px] font-semibold">9:41</span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1">
                                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2 12h20M2 6h20M2 18h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                          </svg>
                                          <div className="flex items-center gap-0.5">
                                            <div className="w-5 h-2.5 border border-black/60 rounded-sm">
                                              <div className="w-full h-full bg-black/80 rounded-sm"></div>
                                            </div>
                                            <div className="w-1 h-1.5 bg-black/60 rounded-sm"></div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* App Screenshot */}
                                      <img
                                        className="w-full h-full object-cover"
                                        src={project.image}
                                        alt={project.name}
                                        loading="lazy"
                                      />
                                      
                                      {/* Home Indicator - Modern style */}
                                    </div>
                                    
                                    {/* Side Buttons - iPhone 17 style */}
                                    <div className="absolute left-0 top-20 w-0.5 h-12 bg-black/60 rounded-r-full" />
                                    <div className="absolute right-0 top-28 w-0.5 h-14 bg-black/60 rounded-l-full" />
                                    <div className="absolute right-0 top-48 w-0.5 h-14 bg-black/60 rounded-l-full" />
                                  </div>
                                  
                               
                                </div>
                              </motion.div>
                            </motion.div>
                          </div>

                       
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {/* Navigation Arrows */}
                {currentMobileIndex > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setCurrentMobileIndex(currentMobileIndex - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background-200/50 backdrop-blur-sm border border-foreground-100/20 flex items-center justify-center text-foreground-100 hover:bg-background-200/70 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                )}

                {currentMobileIndex < mobileProjects.length - 1 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setCurrentMobileIndex(currentMobileIndex + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background-200/50 backdrop-blur-sm border border-foreground-100/20 flex items-center justify-center text-foreground-100 hover:bg-background-200/70 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                )}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center items-center gap-3 mt-8">
                {mobileProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMobileIndex
                        ? 'bg-foreground-100 w-8'
                        : 'bg-foreground-100/30 hover:bg-foreground-100/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
