import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Forms from './Components/Forms'
import Choose from './Components/Choose'
import { HiLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
let App = () =>{

  let choosing = [
    {icon: HiLightBulb, type: "Expert Faculty", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque enim sint magni accusamus velit aspernatur facere voluptatum consectetur."},
    {icon: FaPeopleGroup, type: "Complete Package", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque enim sint magni accusamus velit aspernatur facere voluptatum consectetur voluptatum consectetur."},
    {icon: PiCertificateDuotone, type: "Placements", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque enim sint magni accusamus velit aspernatur facere voluptatum consectetur voluptatum consectetur facere."},
  ]

  return(
    <div className='bg-sky-100 w-screen overflow-x-hidden	h-screen'>
      <Header />
      <div className="h-[55vh] bg-[#d5eaffdd] flex px-10 pt-10 pb-8">
        <Hero />
        <Forms />
      </div>
      <h2 className='text-2xl font-semibold text-center my-5'>Why Choose Us?</h2>
      <div className='flex h-[40vh] w-[100%] items-center justify-center gap-5 flex-wrap shrink-0'>
        <div></div>
        
        {choosing.map((item, index) => (
          <Choose key={index} icon={item.icon} type={item.type} description={item.description} />
        ))}
      </div>
      
    </div>
    
  )
}

export default App
