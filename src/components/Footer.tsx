import React, { useState } from 'react'

type ContactInfo = {
  name: string
  value: string
  link: string
  icon: string
}


const contactInfo = [
  {
    name: "Email",
    value: "messageme@codewithfegig.com",
    link: "mailto:messageme@codewithfegig.com",
    icon: "fi-rr-envelope"
  },
  {
    name: "LinkedIn",
    value: "Oghenefegor Idoro",
    link: "https://www.linkedin.com/in/oghenefegor-idoro-a85395216/",
    icon: "fi-brands-linkedin"
  },
  {
    name: "GitHub",
    value: "fegig",
    link: "https://github.com/fegig",
    icon: "fi-brands-github"
  }
] as ContactInfo[]




export default function Footer() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with your actual form handling)
    try {
      // Add your form submission logic here (e.g., email service, API call)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-background-100 snap-start w-full py-20 px-4 md:px-8 border-t border-foreground-100/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-100 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-foreground-200 leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you. 
                Send me a message and I'll respond as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background-200/30 border border-foreground-100/20 text-foreground-100 placeholder-foreground-200/50 focus:outline-none focus:border-color-2 focus:ring-2 focus:ring-color-2/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background-200/30 border border-foreground-100/20 text-foreground-100 placeholder-foreground-200/50 focus:outline-none focus:border-color-2 focus:ring-2 focus:ring-color-2/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background-200/30 border border-foreground-100/20 text-foreground-100 placeholder-foreground-200/50 focus:outline-none focus:border-color-2 focus:ring-2 focus:ring-color-2/20 transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 rounded-lg bg-color-2 text-white font-medium transition-all duration-300 hover:bg-color-alt disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-100 mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-foreground-200 leading-relaxed">
                You can also reach me through these channels. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">

              {contactInfo.map((info) => (
                <a
                  key={info.link}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background-200/30 border border-foreground-100/20 hover:border-color-2/50 hover:bg-background-200/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-color-2/20 flex items-center justify-center group-hover:bg-color-2/30 transition-colors duration-300">
                    <i className={`${info.icon} w-6 h-6 text-foreground-100`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-200/70">{info.name}</p>
                    <span className="text-foreground-100 font-medium">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-foreground-100/10 text-center">
          <p className="text-foreground-200/70 text-sm">
            © {new Date().getFullYear()} Oghenefegor Idoro. All rights reserved.
          </p>
          <p className="text-foreground-200/50 text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
