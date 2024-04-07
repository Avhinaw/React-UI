import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Forms from './Components/Forms'
import Choose from './Components/Choose'
import Placement from './Components/Placement'
import Eligibility from './Components/Eligibility'
import Prepration from './Components/Prepration'
import { HiLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
let App = () =>{

  let choosing = [
    {icon: HiLightBulb, type: "Expert Faculty", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque enim sint magni accusamus velit aspernatur facere voluptatum consectetur."},
    {icon: FaPeopleGroup, type: "Complete Package", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque enim sint magni accusamus velit aspernatur facere voluptatum consectetur voluptatum consectetur."},
    {icon: PiCertificateDuotone, type: "Placements", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque enim sint magni accusamus velit aspernatur facere voluptatum consectetur voluptatum consectetur facere."},
  ]

  let eligible = [
    {criterion: "Levels", description: "Three (13 Pages)"},
    {criterion: "Duration", description: "6-10 Months"},
    {criterion: "Exams", description: "Quaterly (online)"},
    {criterion: "Exceptions", description: "Upto 9 Papers"},
  ]

  let placemnt = [
    {practice: "Resume Building", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, debitis Repellendus consectetur."},
    {practice: "Career Counselling", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, debitis Repellendus consectetur Repellendus, debitis Repellendu."},
    {practice: "Jobs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea deleniti temporibus voluptate quis laborum?"},
  ]

  return(
    <div className='bg-sky-100 w-screen overflow-x-hidden	h-screen'>
      <Header />
      <div className="h-[55vh] bg-[#d5eaffdd] flex px-10 pt-10 pb-8">
        <Hero />
        <Forms />
      </div>
      <h2 className='text-2xl font-semibold text-center my-2'>Why Choose Us?</h2>
      <div className='border-b-4 border-indigo-500 w-32 mx-auto my-3'></div>
      <div className='flex h-[40vh] w-[100%] items-center justify-center gap-5 flex-wrap shrink-0'>
        
        {choosing.map((item, index) => (
          <Choose key={index} icon={item.icon} type={item.type} description={item.description} />
        ))}
      </div>
      <div className='w-screen h-[20vh] m-2 flex gap-4 flex-wrap shring-0 items-center justify-center '>
      {eligible.map((item, index) => (
        <Eligibility key={index} criterion={item.criterion} description={item.description} />
      ))}
      </div>

        <div className='h-[50vh] bg-red-500'>
        <h2 className='text-2xl font-semibold text-center my-2'>Why Choose Us?</h2>
      <div className='border-b-4 border-indigo-500 w-32 mx-auto my-3'></div>
        </div>

        <div className='h-[50vh] bg-[#eedeff] mx-10 my-5 rounded-md'>
        <h2 className='text-2xl font-semibold text-center my-2 pt-4'>100% Placement Assistance</h2>
      <div className='border-b-4 border-indigo-500 w-32 mx-auto my-3'></div>
      {placemnt.map((item, idx) => {
        return(
          <Placement key={idx} practice={item.practice} description={item.description} />
        )
      }
      )}
        </div>

        <div className='bg-[#d5eaffdd] flex	h-[55vh] px-10 py-10 m-10'>
            <Prepration />
            <Forms />
        </div>
    </div>
    
  )
}

export default App
