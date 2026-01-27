'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4 + custom * 0.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    }),
  }

  const rotatingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large tech circles */}
      <motion.div
        custom={0}
        animate="animate"
        variants={floatingVariants}
        className="absolute top-20 left-10 w-64 h-64 rounded-full border-2 border-primary/10 dark:border-primary/20"
      />

      <motion.div
        custom={1}
        animate="animate"
        variants={floatingVariants}
        className="absolute bottom-32 right-10 w-80 h-80 rounded-full border-2 border-secondary/10 dark:border-secondary/20"
      />

      {/* Rotating tech grids */}
      <motion.div
        animate="animate"
        variants={rotatingVariants}
        className="absolute top-1/3 left-1/4 w-72 h-72"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(147, 51, 234, 0.05) 25%, rgba(147, 51, 234, 0.05) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.05) 75%, rgba(147, 51, 234, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(147, 51, 234, 0.05) 25%, rgba(147, 51, 234, 0.05) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.05) 75%, rgba(147, 51, 234, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Pulsing accent nodes */}
      <motion.div
        animate="animate"
        variants={pulseVariants}
        className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-primary/30 dark:bg-primary/50"
      />

      <motion.div
        animate="animate"
        variants={pulseVariants}
        transition={{ duration: 3, delay: 1 }}
        className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-secondary/30 dark:bg-secondary/50"
      />

      <motion.div
        animate="animate"
        variants={pulseVariants}
        transition={{ duration: 3, delay: 2 }}
        className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-primary/40 dark:bg-primary/60"
      />

      {/* Floating code brackets */}
      <motion.div
        custom={2}
        animate="animate"
        variants={floatingVariants}
        className="absolute top-1/4 right-20 text-4xl text-primary/10 dark:text-primary/20 font-mono"
      >
        {'< />'}
      </motion.div>

      <motion.div
        custom={3}
        animate="animate"
        variants={floatingVariants}
        className="absolute bottom-1/4 left-20 text-5xl text-secondary/10 dark:text-secondary/20 font-mono"
      >
        {'{...}'}
      </motion.div>

      {/* Tech particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          custom={i}
          animate="animate"
          variants={floatingVariants}
          className="absolute w-1 h-1 rounded-full bg-primary/40 dark:bg-primary/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        animate={{
          y: [-50, 50, -50],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 blur-3xl"
      />
    </div>
  )
}
