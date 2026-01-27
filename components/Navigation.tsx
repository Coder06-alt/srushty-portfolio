'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full backdrop-blur-md bg-background/30 border-b border-primary/10 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          SN
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-foreground"
          />
          <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-foreground" />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-foreground"
          />
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20, pointerEvents: 'none' }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-b border-primary/10 py-4"
        >
          <div className="flex flex-col gap-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
