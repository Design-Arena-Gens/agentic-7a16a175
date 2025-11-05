import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liquid Glass - Apple Style',
  description: 'Beautiful liquid glass morphism with scroll animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
