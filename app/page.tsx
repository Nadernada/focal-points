import About from "@/components/About";
import Blog from "@/components/Blog";
import Choices from "@/components/Choices";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Choices />
      <Testimonials />
      <Team />
      <Blog />
    </div>
  )
}