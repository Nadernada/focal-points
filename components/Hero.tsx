import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Play } from 'lucide-react'

const font = Inter({ subsets: ['latin']})

const Hero = () => {
  return (
    <div className='w-full h-[75%] px-6 relative flex items-center'>
      <div className=' overflow-hidden w-full rounded-2xl hero-section relative'>
        <Image src='/images/hero1.jpg' alt='hero img' width={1500} height={500}/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-white flex flex-col items-center'>
          <h1 className='text-[77px] font-normal leading-[84px]'>A Reputation Built On<br/>Exceeding Expectation</h1>

          <div className='rounded-full bg-white flex justify-center items-center w-[100px] h-[100px] mt-16 mb-4'><Play fill='black' size={30} className='translate-x-1' /></div>

          <p className={`${font.className} text-[15px] uppercase font-medium`}>play intro video</p>
          <div className='w-[1px] h-[30px] bg-white/60 relative'>
            <div className='rounded-full bg-white w-2 h-2 absolute -translate-x-[3px] scroll-animation' />
          </div>
          <p className={`${font.className} text-[15px] uppercase font-medium`}>scroll to explore</p>
        </div>
      </div>
    </div>
  )
}

export default Hero