'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase } from 'lucide-react'

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const timeline = [
    {
      type: 'education',
      title: 'Dual-Degree in Computer Science Engineering',
      organization: 'IIITDM-Kurnool',
      date: '2023 - Present',
      description: 'Pursuing degree with focus on DSA, Networks, Operating Systems, and Full-Stack Development.',
      highlights: ['GPA: 7.6/10', 'Active in technical clubs'],
    },
     {
      type: 'GDG Club UI/UX Coordinator',
title: 'UI/UX Design & Technical Programs',
organization: 'GDSC On Campus IIITDM-KURNOOL',
date: '2025 - present',
description: 'Lead the design and user experience initiatives for the GDG community. Organized and facilitated workshops, hackathons, and collaborative projects to enhance technical and design skills among members.',
highlights: [
  'Designed engaging UI/UX for community projects and events',
  'Improved event participation by 40% through better user-centric designs',
  'Collaborated with developers to implement visually appealing and functional prototypes',
]

    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group relative flex gap-6"
            >
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground z-10 border-4 border-background"
                >
                  {item.type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                </motion.div>
                {idx < timeline.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="w-1 h-24 bg-gradient-to-b from-primary to-secondary/50 origin-top"
                  />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex-1 p-6 rounded-2xl bg-card/40 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all mb-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary/80 font-medium text-sm">{item.organization}</p>
                  </div>
                  <span className="text-foreground/60 text-sm whitespace-nowrap">{item.date}</span>
                </div>

                <p className="text-foreground/70 mb-4">{item.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <motion.span
                      key={hIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20 cursor-pointer"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
