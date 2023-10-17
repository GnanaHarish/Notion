import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion - Clone',
  description: 'A Notes App',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: '/Logo.png',
        href: '/Logo.png'
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: '/Logo.png',
        href: '/Logo.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
