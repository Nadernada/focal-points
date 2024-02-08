import Image from "next/image"
import { Inter } from "next/font/google"
import Button from "./Button"

const font = Inter({ subsets: ['latin']})


const Team = () => {
  return (
    <div className="py-32 px-8">
      <div className='w-full h-screen flex items-center'>
        <div className=' overflow-hidden w-full h-full rounded-2xl relative'>
          <Image src='/images/FPH-Team.jpg' alt='hero img' fill className=" object-cover rounded-2xl"/>
          <div className='absolute top-0 left-0 w-1/3 h-full text-white flex flex-col justify-start p-10 space-y-4'>
            <p className='text-[50px] font-normal leading-[60px] capitalize'>learn more<br /> about us and<br /> our team</p>
            <Button label="meet the team" className='bg-white text-black' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team