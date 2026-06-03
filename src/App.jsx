import { useEffect } from 'react';

function AppShell({ children }) {

  useEffect(()=>{
    let frameId
    let lenis
    let active = true

    function raf(time) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    import('lenis').then(({ default: Lenis }) => {
      if (!active) {
        return
      }

      lenis = new Lenis({
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

      frameId = requestAnimationFrame(raf)
    })

    return () => {
      active = false

      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      if (lenis) {
        lenis.destroy()
      }
    }
  },[])

  return children
}

export default AppShell
