import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login form',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-light  text-dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
