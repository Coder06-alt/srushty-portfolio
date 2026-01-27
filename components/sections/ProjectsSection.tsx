'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'Modern, animated portfolio showcasing projects with glassmorphism design and smooth interactions.',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Next.js'],
      category: 'web',
      github: 'https://github.com/YOUR_GITHUB_USERNAME/portfolio-website',
      demo: 'https://your-portfolio-demo.com',
    },
    {
      title: 'Algorithm Visualizer',
      description:
        'Interactive visualization tool for sorting and pathfinding algorithms with step-by-step execution.',
      tech: ['React', 'Canvas API', 'Algorithms'],
      category: 'web',
      github: 'https://github.com/Coder06-alt/Algorithm-Visualizer.git',
    },
    {
      title: 'Daily Coding Planner',
      description:
        'Lightweight React app to plan daily coding tasks for DSA, Development, and Revision with progress tracking.',
      tech: ['React', 'HTML', 'CSS'],
      category: 'web',
      github: 'https://github.com/Coder06-alt/competitive-programming-tracker.git',
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    // You can add more categories if needed
    // { id: 'web', label: 'Web' },
    // { id: 'systems', label: 'Systems' },
    // { id: 'iot', label: 'IoT' },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-foreground'
                  : 'bg-card/40 text-foreground/70 border border-primary/10 hover:border-primary/30'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group h-full p-6 rounded-2xl bg-card/40 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all overflow-hidden relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-primary/10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors text-sm"
                  >
                    {/* <ExternalLink size={16} />
                    Demo */}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
