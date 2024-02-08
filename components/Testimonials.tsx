import { Inter } from 'next/font/google'
import Button from './Button'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const font = Inter({ subsets: ['latin']})

const Testimonials = () => {
  return (
    <div className='w-full h-fit flex flex-row justify-center items-start'>
      <div className='flex flex-col justify-start p-12 space-y-8'>
        <h2 className='text-[60px] font-normal leading-[65px] capitalize'>hear what our customers are saying about us</h2>
        <Button label='view customer experience' />
        <div className='flex flex-col justify-start rounded-2xl bg-blue-200 px-5 py-8 space-y-5'>
          <Quote size={30} fill='black' />
          <p className='text-[20px] leading-[35px]'>We walk through the neighborhood where our house is being built and… everybody has positive things to say about Focal Point Homes.</p>
          <p className={`${font.className} text-[16px] uppercase`}>Bill & Mara</p>
        </div>
      </div>
      <div className='h-full w-[160%] p-8'>
        <div className='rounded-xl w-full h-full relative'>
          <Image src='/images/top-5.jpg' alt='clients' fill className='object-cover rounded-2xl min-h-[600px]' />
        </div>
      </div>
    </div>
  )
}

export default Testimonials