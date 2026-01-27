'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, FileText,CodeXml, ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Coder06-alt', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/srushty-narayankar-4457372a7/', label: 'LinkedIn' },
    { icon: CodeXml, href: 'https://leetcode.com/u/srushtynarayankar/', label: 'LeetCode' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                Srushty Narayankar
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-xl sm:text-2xl text-foreground/80 text-balance">
              Computer Science Engineer | Full-Stack Developer | Problem Solver
            </p>
            <p className="text-lg text-foreground/60 text-balance max-w-2xl mx-auto">
              Turning ideas into scalable digital solutions with expertise in DSA, Full-Stack Development
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground font-semibold rounded-2xl hover:shadow-lg transition-shadow"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-primary/30 text-foreground font-semibold rounded-2xl hover:bg-primary/10 transition-colors backdrop-blur-sm"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-6 justify-center pt-8"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)' }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={24} className="text-primary/60" />
        </motion.div>
      </div>
    </section>
  )
}
