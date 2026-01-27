'use client'
import dynamic from "next/dynamic"
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import AnimatedBackground from '@/components/AnimatedBackground'




export default function Home() {
  const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground"),
  { ssr: false }
)
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <ScrollToTop />
      </div>
    </main>
  )
}
