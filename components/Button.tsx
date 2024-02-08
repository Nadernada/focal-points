import { Inter } from "next/font/google"

const font = Inter({ subsets: ['latin']})


interface Props {
  label: string
  children?: React.ReactNode
  className?: string
}

const Button = ({ label, children, className }: Props) => {
  return (
    <div className={`bg-blue-500 text-black rounded-full w-fit px-6 py-3 flex justify-center items-center space-x-2 ${className}`}>
    <p className={`text-[14px] font-normal uppercase ${font.className}`} >{label}</p>
    {children}
  </div>
  )
}

export default Button