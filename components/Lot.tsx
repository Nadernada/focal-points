import Image from "next/image"
import { Inter } from "next/font/google"
import { Phone } from "lucide-react"
import Button from "./Button"

const font = Inter({ subsets: ['latin']})


const Lot = () => {
  return (
    <div className="py-32 space-y-16">
      <h2 className='text-[60px] font-normal text-center leading-[65px] text-[#091C32]'>Want to Build, <br/> But Need a Lot?</h2>
      <div className='w-full h-[550px]  flex items-center'>
        <div className=' overflow-hidden w-full h-full rounded-2xl relative'>
          <Image src='/images/Section_3_Lot.jpg' alt='hero img' width={1500} height={550}/>
          <div className='absolute top-0 left-0 w-1/3 h-full text-white flex flex-col justify-center p-6'>
            <p className='text-[37px] font-normal leading-[44px]'>We Can Help<br /> With That Too!</p>
            <p className={`${font.className} text-[18px] font-medium my-8`}>
              We’re constantly learning about available, off-market lots and we can even purchase properties for clients when needed.
            </p>
            <Button label="(212) 555 555">
              <Phone size={16} fill="black" />
            </Button>
            <p className={`${font.className} text-[18px] uppercase font-medium mt-auto`}>
              SEND US A MESSAGE OR GIVE US A CALL.
              <br />
              WE'RE EAGER TO HELP HOWEVER WE CAN!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lot