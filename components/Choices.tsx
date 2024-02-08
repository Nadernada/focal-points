import { ChevronRight } from "lucide-react"
import { Inter } from "next/font/google"
import Image from "next/image"
import Lot from "./Lot"

const font = Inter({ subsets: ['latin']})

const Choices = () => {
  return (
    <div className='bg-[#EDF1F2] w-full py-32 px-16'>
      <h2 className='text-[60px] font-normal text-center leading-[65px] text-[#091C32]'>Choose Between</h2>
      <div className='grid grid-cols-3 justify-between items-center h-[650px] space-x-5 mt-20 px-4'>
        <div className='bg-white rounded-3xl h-full px-8 pt-16 pb-6 flex flex-col justify-between group hover:bg-[#B9956B] transition-colors cursor-pointer'>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <p className='text-[38px] group-hover:text-white'>Custom Homes</p>
              <ChevronRight className="text-[#21C3EA] inline-flex group-hover:text-white" size={30} />
            </div>
            <p className={`${font.className} text-[18px] group-hover:text-white`}>Work with our team to design and build a one-of-a-kind custom home, unique to you and perfect for your lot.</p>
          </div>
          <div className="w-full h-60 relative mt-12">
            <Image
              src='/images/bottom-1.jpg'
              alt="home"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className='bg-white rounded-3xl h-full px-8 pt-16 pb-6 flex flex-col justify-between group hover:bg-[#B9956B] transition-colors cursor-pointer'>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <p className='text-[38px] group-hover:text-white'>Semi-Custom Homes</p>
              <ChevronRight className="text-[#21C3EA] inline-flex group-hover:text-white" size={30} />
            </div>
            <p className={`${font.className} text-[18px] group-hover:text-white`}>Save money and time by choosing a semi-custom model from our carefully curated collection of plans, and then work with our designers to customize that plan to fit your needs.</p>
          </div>
          <div className="w-full h-60 relative mt-12">
            <Image
              src='/images/bottom-3.jpg'
              alt="home"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className='bg-white rounded-3xl h-full px-8 pt-16 pb-6 flex flex-col justify-between group hover:bg-[#B9956B] transition-colors cursor-pointer'>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <p className='text-[38px] group-hover:text-white'>Quick Delivery Homes</p>
              <ChevronRight className="text-[#21C3EA] inline-flex group-hover:text-white" size={30} />
            </div>
            <p className={`${font.className} text-[18px] group-hover:text-white`}>Take a peek at one of the quick-delivery homes we already have in process and get ready to schedule your moving trucks soon!</p>
          </div>
          <div className="w-full h-60 relative mt-12">
            <Image
              src='/images/bottom-7.jpg'
              alt="home"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <Lot />
    </div>
  )
}

export default Choices