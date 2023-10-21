import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config ();

const poppins = Poppins ({
  weight: ['100', '200', '300', '500', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mitra',
  description: 'Mitra, a large language model-based chatbot',
}

const connectToDatabase = async () => {
  const prisma = new PrismaClient ();
  await prisma.$connect ();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  connectToDatabase ();

  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
