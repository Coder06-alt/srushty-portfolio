'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Globe, Code2, Zap } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const stats = [
    { icon: Brain, label: 'DSA & Problem Solving', desc: 'Strong foundations in Data Structures and Algorithms' },
    { icon: Code2, label: 'Full-Stack Projects', desc: 'Building modern web applications with React & Backend' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const ref = containerRef; // Declare the ref variable

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm">
              <Image
                src="/profile.jpg"
                alt="Srushty Narayankar"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Computer Science Engineering student with strong foundations in DSA, Computer Networks, Operating Systems,
              and C/C++, currently expanding expertise in full-stack development.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
             I am a solution architect at heart, driven by complex problems that most shy away from. With expertise in full-stack development, I approach challenges as puzzles — analyzing patterns, identifying root causes, and engineering solutions that are efficient, elegant, and scalable. I thrive in ambiguity, turning roadblocks into opportunities to learn, innovate, and deliver technology that creates real-world impact.
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-foreground font-semibold text-2xl">Key Competencies:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-foreground/70 text-xl">DSA & Algorithms</div>
                <div className="text-foreground/70 text-xl">Full-Stack Dev</div>
                <div className="text-foreground/70 text-xl">System Design</div>
                <div className="text-foreground/70 text-xl">Problem Solving</div>
              </div>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4 order-3 lg:order-3 lg:col-span-2"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.1)' }}
                className="p-6 rounded-2xl bg-card/40 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all group cursor-pointer"
              >
                <stat.icon className="w-10 h-10 text-primary/80 group-hover:text-primary mb-3 transition-colors" />
                <h3 className="font-semibold text-foreground mb-2 text-lg sm:text-xl">{stat.label}</h3>
                <p className="text-sm sm:text-base text-foreground/60">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
