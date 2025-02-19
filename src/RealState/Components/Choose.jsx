import React from 'react'
import Wpic from '../Assets/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
function Choose() {
    useGSAP(()=>{
        gsap.from('.chooseContent',{
            x:60,
            duration:1,
            opacity:0,
            scrollTrigger:{
              trigger:'.chooseTrigger',
              scroller:'body',
              start:'top 60%',
              end:'top 40%',
              scrub:2
            }
          })})
  return (
  <section className='my-12'>
     <div>
        <p className='sm:text-md text-xl mb-6 '>Why choose us</p>
        <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold leading-10'>What makes us the right partner for </h1>
        <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold '>your real estate?</h1>
      </div>
      <div className='chooseTrigger h-screen relative rounded-3xl overflow-hidden mt-8'>
        <img src='https://lifestyleinvestmentsind.com/images/About/mission.png' alt="image" className='w-[100%] absolute z-10 h-full object-cover'/>
        <div className='chooseContent absolute px-5 py-8 rounded-3xl z-20 sm:top-24 top-36 bg-white sm:w-[30vw] w-[90%]  sm:right-10 right-5'>
            <div className='flex gap-8'>
                <div><i className="text-2xl text-[#3859FF]  ri-check-double-line"></i></div>
                <div>
                    <h1 className='font-semibold sm:text-[1.6vw] text-[4.5vw] mb-2'>Expert Local Knowledge</h1>
                <p className='text-gray-500'>Extensive experience and insights into the perfect local market.</p></div>
            </div>
            <div className='flex gap-8 my-8'>
                <div><i className="text-2xl text-[#3859FF]  ri-check-double-line"></i></div>
                <div>
                    <h1 className='font-semibold sm:text-[1.6vw] text-[4.5vw] mb-2'>Expert Local Knowledge</h1>
                <p className='text-gray-500'>Extensive experience and insights into the perfect local market.</p></div>
            </div>
            <div className='flex gap-8'>
                <div><i className="text-2xl text-[#3859FF]  ri-check-double-line"></i></div>
                <div>
                    <h1 className='font-semibold sm:text-[1.6vw] text-[4.5vw] mb-2'>Expert Local Knowledge</h1>
                <p className='text-gray-500'>Extensive experience and insights into the perfect local market.</p></div>
            </div>
           
           
        </div>
      </div>
  </section>
  )
}

export default Choose
