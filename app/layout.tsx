import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport = {
  themeColor: '#1a0033',
  userScalable: true,
}

// export const metadata: Metadata = {
//   title: 'Srushty Narayankar | Full-Stack Developer',
//   description: 'Computer Science Engineer | Full-Stack Developer | Problem Solver. Turning ideas into scalable digital solutions.',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.png',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/icon.png',
//   },
// }
export const metadata: Metadata = {
  title: 'Srushty Narayankar | Full-Stack Developer',
  description: 'Computer Science Engineer | Full-Stack Developer | Problem Solver. Turning ideas into scalable digital solutions.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
