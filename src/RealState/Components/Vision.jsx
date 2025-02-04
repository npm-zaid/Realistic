import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
function Vision() {
    useGSAP(()=>{
        gsap.from('.visionContent1',{
            x:-80,
            duration:1,
            opacity:0,
            scrollTrigger:{
              trigger:'.visionTrigger',
              scroller:'body',
              start:'top 60%',
              end:'top 40%',
              scrub:2
            }
          });
          gsap.from('.visionContent2',{
            x:80,
            duration:1,
            opacity:0,
            scrollTrigger:{
              trigger:'.visionTrigger',
              scroller:'body',
              start:'top 60%',
              end:'top 40%',
              scrub:2
            }
          })
    })
          
  return (
   <section  className=' sm:gap-4 gap-16 my-14 flex sm:flex-row flex-col visionTrigger overflow-hidden '>

    <div className=" w-full visionContent1  flex flex-col   sm:gap-5 gap-4 ">
    <p className='sm:text-md text-xl '>Our Vision</p>
    <div className=''>  
    <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold leading-6'>The values that drive</h1>
    <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold '>everything we do</h1>
    </div>
   <button className='px-5 py-3 font-bold w-fit bg-black text-white rounded-full'>Learn more</button>
    
    </div>

    <div className=" w-full  visionContent2  sm:text-2xl text-xl font-semibold flex flex-col gap-10">
    <div className='flex  sm:gap-8  gap-5'>
    <div className='bg-[#3675ff] h-fit px-3 py-2 rounded-xl text-white'><i class="text-2xl ri-home-smile-line"></i></div>
        <div>
            <h1 className='mb-3'>Dream Home</h1>
            <p className='text-gray-400 sm:text-xl text-lg'>Discover your ideal living space with our premium featured real estate listings.</p>

        </div>
    </div>
    
    <div className='flex  sm:gap-8  gap-5'>
        <div className='bg-[#3675ff] h-fit px-3 py-2 rounded-xl text-white'><i class="text-2xl ri-money-rupee-circle-line"></i></div>
        <div>
            <h1 className='mb-3'>Smart Investment</h1>
            <p className='text-gray-400 sm:text-xl text-lg'>Secure high-value, future-ready property and investment opportunities today.</p>

        </div>
    </div>
    <div className='flex  sm:gap-8  gap-5'>
        <div className='bg-[#3675ff] h-fit px-3 py-2 rounded-xl text-white'><i class="text-2xl ri-magic-fill"></i></div>
        <div>
            <h1 className='mb-3'>Luxury Living</h1>
            <p className='text-gray-400 sm:text-xl text-lg'>Explore exclusive, sophisticated properties tailored to your perfect lifestyle.</p>

        </div>
    </div>
  
    </div>

   </section>
  )
}

export default Vision
