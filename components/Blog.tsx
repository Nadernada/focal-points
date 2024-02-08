import { Inter } from 'next/font/google'
import Button from './Button'
import Image from 'next/image'

const font = Inter({ subsets: ['latin']})

const Testimonials = () => {
  return (
    <div className='flex flex-col p-8 space-y-24'>
      <div className='w-full h-fit flex flex-row justify-center items-start'>
        <div className='h-full w-[100%]'>
          <div className='rounded-xl w-full h-full relative'>
            <Image src='/images/top-5.jpg' alt='clients' fill className='object-cover rounded-2xl min-h-[600px]' />
          </div>
        </div>
        <div className='flex flex-col justify-start p-10 space-y-4'>
          <h2 className='text-[60px] font-normal leading-[65px] capitalize'>check out our latest news</h2>
          <div className='flex flex-col py-8 space-y-14'>
            <div className='flex flex-row space-x-4'>
              <Image src='/images/top-6.jpg' alt='blog-1' width={200} height={100} className='aspect-video rounded-2xl' />
              <p className='text-[20px] leading-[35px]'>the wagners' team takes second place.</p>
            </div>
            <div className='flex flex-row space-x-4'>
              <Image src='/images/top-6.jpg' alt='blog-1' width={200} height={100} className='aspect-video rounded-2xl' />
              <p className='text-[20px] leading-[35px]'>the wagner's team takes second place.</p>
            </div>
          </div>
          <Button label='view blog' />
        </div>
      </div>
      <div className='w-full rounded-2xl bg-blue-200 p-8 flex flex-col justify-center items-center space-y-8'>
        <h2 className='text-[50px] font-normal leading-[65px] capitalize'>upcoming open houses</h2>
        <div className='flex justify-between'>
          <div className='p-1 flex justify-center items-center'>
            <p className='text-[25px]'>saturday 23, October</p>
          </div>
          <div className='p-1 flex justify-center items-center border-l border-black'>
            <p className='text-[25px]'>the hunnuh semi custom plan</p>
          </div>
          <div className='p-1 flex justify-center items-center'>
            <p className='text-[25px]'>6444 tucker ave, mclean, VA 22101</p>
          </div>
          <div className='p-1 flex justify-center items-center'>
            <p className='text-[25px]'>$2,488,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials