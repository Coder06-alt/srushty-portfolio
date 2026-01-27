// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'

// export default function SkillsSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.5 })

//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
//     },
//     {
//       title: 'Core CS Subjects',
//       skills: ['DSA', 'Computer Networks', 'Operating Systems', 'DBMS'],
//     },
//     {
//       title: 'Frontend',
//       skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
//     },
//     {
//       title: 'Backend & Tools',
//       skills: ['Node.js', 'Git & GitHub', 'Linux', 'VS Code'],
//     },
    
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   }

//   return (
//     <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
//       <div className="max-w-6xl mx-auto">
//         {/* Section title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 space-y-4"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Skills & Expertise</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
//         </motion.div>

//         {/* Skills grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {skillCategories.map((category, categoryIdx) => (
//             <motion.div
//               key={categoryIdx}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="group p-8 rounded-2xl bg-card/40 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all"
//             >
//               <h3 className="text-xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors">
//                 {category.title}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {category.skills.map((skill, skillIdx) => (
//                   <motion.span
//                     key={skillIdx}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground/90 text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-pointer group-hover:shadow-md"
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Skill highlight */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
//         >
//           <p className="text-center text-foreground/80 text-lg">
//             Always learning and adapting to new technologies. Currently exploring Advanced System Design and Cloud
//             Architecture patterns.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code,
  Cpu,
  Server,
  Database,
  GitBranch,
  Terminal,
  FileText,
  Activity,
  Box,
  Layers,
} from 'lucide-react' // Only use valid icons

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: Code },
        { name: 'C++', icon: Code },
        { name: 'Python', icon: Activity },
        { name: 'JavaScript', icon: Box },
        { name: 'TypeScript', icon: Box },
      ],
    },
    {
      title: 'Core CS Subjects',
      skills: [
        { name: 'DSA', icon: Cpu },
        { name: 'Computer Networks', icon: Server },
        { name: 'Operating Systems', icon: Cpu },
        { name: 'DBMS', icon: Database },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: Activity },
        { name: 'Tailwind CSS', icon: Layers },
        { name: 'HTML5', icon: Code },
        { name: 'CSS3', icon: Layers },
        { name: 'Framer Motion', icon: Activity },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Git & GitHub', icon: GitBranch },
        { name: 'Linux', icon: Terminal },
        { name: 'VS Code', icon: FileText },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skills row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-6"
        >
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between p-6 rounded-2xl bg-card/40 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all gap-4"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 md:mb-0 md:w-48">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground/90 text-sm font-medium border border-primary/20 hover:border-primary/40 cursor-pointer transition-all"
                  >
                    <skill.icon size={16} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
        >
          <p className="text-center text-foreground/80 text-lg">
            Always learning and adapting to new technologies. Currently exploring Advanced System Design and Cloud Architecture patterns.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
