import React from 'react'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion} from 'framer-motion';
import { projectList, type ProjectType } from './Projects';
import { Link } from 'react-router';



function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground-200/70">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-white">{value}</dd>
    </div>
  )
}

export default function HomeProjectPreview() {
  const mobileProjects = projectList?.filter(project => project.type === "mobile") || [];
  const [currentMobileIndex, setCurrentMobileIndex] = React.useState(0);
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
    <section className="bg-background-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl mx-auto">
            <h2 className="mt-4  text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl text-center ">
              Mobile products built around real workflows.
            </h2>
          </div>
        </div>

           {/* Mobile Projects Carousel */}
        {mobileProjects.length > 0 && (
          <div className="my-20">

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

                            <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="flex flex-col justify-center space-y-6"
                            >

                              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                                <motion.h3
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.5, delay: 0.4 }}
                                  className="font-bold text-2xl md:text-3xl text-foreground-100 transition-colors duration-300 group-hover:text-foreground-200"
                                >
                                  {project.name}
                                </motion.h3>
                                {project.status === "in-development" && (
                                  <motion.span
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.45 }}
                                    className="inline-flex w-fit shrink-0 items-center rounded-full border border-amber-400/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200"
                                  >
                                    In development
                                  </motion.span>
                                )}
                              </div>

                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-base md:text-lg text-foreground-200 leading-relaxed"
                              >
                                {project.description}
                              </motion.p>

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

                              {/* Preview App — full width on small screens for touch / narrow layouts */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="pt-2 w-full max-w-md sm:max-w-none"
                              >
                                <motion.a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-color-2 inline-flex min-h-8 items-center justify-center gap-2 rounded-lg px-6 py-2 text-xs font-medium text-white transition-all duration-300 "
                                  whileHover={{ scale: 1.02, y: -1 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <span>Preview App</span>
                                  <motion.svg
                                    className="h-5 w-5 shrink-0"
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
                                    className="relative rounded-[2.5rem] p-2 md:p-2.5 bg-neutral-900"

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
                                    <div className="relative rounded-4xl overflow-hidden bg-black aspect-[9/19.5]">
                                      {/* Status Bar with Dynamic Island integration */}
                                      <div className="absolute top-0 left-0 right-0 h-12 z-10 flex items-start justify-between px-6 pt-3">
                                        <div className="flex items-center gap-1 mt-1">
                                          <span className="text-black text-[11px] font-semibold">9:41</span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1">
                                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2 12h20M2 6h20M2 18h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentMobileIndex
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
