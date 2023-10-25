import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='notion-theme'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
