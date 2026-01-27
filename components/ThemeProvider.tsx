'use client'

import React from "react"

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const html = document.documentElement
    if (newTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `,
        }}
      />
      <div data-theme-provider={theme}>
        {children}
        <div
          className="fixed top-4 right-4 z-50 cursor-pointer"
          onClick={toggleTheme}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleTheme()
            }
          }}
        >
          <div className="w-14 h-8 bg-muted rounded-full border border-primary/20 flex items-center transition-all duration-300 p-1 hover:border-primary/40">
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 flex items-center justify-center text-xs font-bold text-foreground ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
