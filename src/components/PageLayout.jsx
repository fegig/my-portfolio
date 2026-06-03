import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-background-100 text-foreground-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
