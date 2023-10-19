import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import dotenv from 'dotenv';
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
  const mongoose = require ('mongoose');
  mongoose.connect (process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once ('open', () => console.log ('Connected to database'))
    .on ('error', (error: any) => console.log ('Error connecting to database:', error));
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
