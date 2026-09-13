import React from 'react'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import { cn } from 'cn'
import { Divider } from '@/components/Divider'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import { Footer } from '@/components/Footer'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--montserrat"
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={cn(montserrat.variable, 'bg-primary font-(family-name:--montserrat)')}>
        <header className='max-w-6xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <Image className='size-20' src={logo} alt='logo' />
            <h1 className=' font-black text-3xl'>Mural Planet</h1>
          </div>
          <nav className='flex items-center gap-4 font-medium py-5'>
            <a href="#">Home</a>
            <a href="#">Story</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <Divider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
