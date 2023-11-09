import './globals.css'
import dotenv from 'dotenv';
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

dotenv.config ();

const poppins = Work_Sans ({
  weight: ['100', '200', '300', '500', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mitra',
  description: 'Mitra, a large language model-based chatbot',
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}