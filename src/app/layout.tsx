// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My App',
  description: 'Aplicació amb Next.js + Shadcn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
