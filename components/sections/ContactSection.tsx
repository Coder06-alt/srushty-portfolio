'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Code2, FileText, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Coder06-alt', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/srushty-narayankar-4457372a7/', color: 'hover:text-primary' },
    { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/srushtynarayankar/', color: 'hover:text-primary' },
    { icon: FileText, label: 'Resume', href: '/Srushty_resume.pdf', color: 'hover:text-primary' },
    { icon: Mail, label: 'Email', href: 'mailto:srushtynarayankar27@gmail.com', color: 'hover:text-primary' },
  ]

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send email')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('An error occurred. Please try again.')
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Let's Connect</h2>
          <p className="text-lg text-foreground/70">Open to internships, collaborations, and learning opportunities</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Contact content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {['name', 'email', 'subject'].map((field) => (
              <div key={field} className="space-y-2">
                <label className="text-foreground font-medium capitalize">{field}</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  className="w-full px-4 py-3 rounded-lg bg-card/40 border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/60 transition-all backdrop-blur-sm"
                  required
                />
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-foreground font-medium">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card/40 border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/60 transition-all backdrop-blur-sm resize-none"
                required
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                ✕ {errorMessage}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground font-semibold rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              {!isLoading && <ArrowRight size={20} />}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8 }} className="flex flex-col justify-between">
            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">Open to Opportunities</p>
                <p className="text-foreground/70">
                  I'm always excited to work on challenging projects and collaborate with talented people. Whether it's an internship, freelance project, or just a conversation about tech, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <p className="text-foreground font-semibold">Connect with me</p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-lg bg-card/40 border border-primary/10 hover:border-primary/30 transition-all group flex items-center gap-3 text-foreground/80 hover:text-primary"
                  >
                    <link.icon size={24} className="group-hover:text-primary transition-colors" />
                    <span className="font-medium text-sm">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16 pt-8 border-t border-primary/10 text-center text-foreground/60 text-sm">
          <p className="mt-2">© 2026 Srushty Narayankar. Designed & built by me. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
