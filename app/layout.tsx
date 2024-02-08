import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const font = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Focal Point',
  description: 'Making homes for your comfort',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
