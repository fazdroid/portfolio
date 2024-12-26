import './globals.css'
import './styles/crt.css'
import { Space_Mono } from 'next/font/google'

const mono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'CRT Portfolio',
  description: 'A retro-styled portfolio with CRT effects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#000105]">
      <body className={mono.className}>{children}</body>
    </html>
  )
}

