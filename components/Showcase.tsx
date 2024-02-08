import Image from "next/image"


const Showcase = () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className='w-full flex flex-col justify-center mt-24 space-y-10 overflow-x-hidden'>
      <p className='text-[55px] font-normal text-center leading-[65px]'>Let’s Work Together<br />to Create Something<br />Spectacular!</p>
      <div className='w-full h-fit flex flex-col space-y-10 overflow-x-visible'>
        <div className='flex flex-row items-center h-[270px] space-x-5 w-fit slide-right'>
          {arr.map((item) => (
            <div key={item} className="w-[400px] h-[250px] relative hover:h-[270px] transition-all">
              <Image src={`/images/top-${item}.jpg`} alt='image' fill className="object-cover rounded-2xl hover:shadow-xl hover:shadow-slate-400 transition-all" />
            </div>
          ))}
        </div>
        <div className='flex flex-row items-center h-[270px] space-x-5 w-fit slide-left'>
          {arr.map((item) => (
            <div key={item} className="w-[400px] h-[250px] relative hover:h-[270px] transition-all">
              <Image src={`/images/bottom-${item}.jpg`} alt='image' fill className="object-cover rounded-2xl hover:shadow-xl hover:shadow-slate-400 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Showcase