import Navbar from './Navbar'
import Footer from './Footer'

import type { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background-100 text-foreground-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
