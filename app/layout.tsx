import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'js Mastery',
  description: 'Js Mastery Resorces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black font-poppins no-scrollbar'>{children}</body>
    </html>
  )
}
