import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Menu, Phone } from 'lucide-react'

const font = Inter({ subsets: ['latin'] })


const Navbar = () => {
  return (
    <div className={`bg-white flex justify-between items-center px-8 py-10 sticky ${font.className} font-medium text-[12px] uppercase`}>
      <div className='flex items-center space-x-8'>
        <Link href='' className='hover:underline underline-offset-4'>custom</Link>
        <Link href='' className='hover:underline underline-offset-4'>semi-custom</Link>
      </div>
      <Image
        src='/next.svg'
        alt='logo'
        width={120}
        height={60}
      />
      <div className='flex items-center space-x-8'>
        <Link href=''>(+212) 555 5555 <Phone className='w-[18px] inline-flex' fill='black' /></Link>
        <Link href=''>menu <Menu className='w-[18px] inline-flex' /></Link>
      </div>
    </div>
  )
}

export default Navbar