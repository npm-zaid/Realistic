import React from 'react'
import { useEffect,useState,useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import conImg from '../Assets/Screenshot (311).png'
gsap.registerPlugin(useGSAP,ScrollTrigger);

const Contact = () => {
  const [subject, setSubject] = useState("Consulting");
  const [message, setMessage] = useState("");
  const tl = useRef()

  useGSAP(()=>{
    tl.current = gsap.timeline()
    .from(".contact h1",{y:-100,scale:0.5,opacity:0, duration:.5})
    .from(".contact p",{y:-100,scale:0.5,opacity:0, duration:.5})
  })


  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
  
  <section>
       <div  className='contact text-center font-semibold  my-14'>
        <p className='bg-[#EDF3FF] w-fit m-auto font-semibold text-[#3675ff] px-5 py-2 rounded-full'>Contact</p>
    <h1 className='sm:text-[4vw]  text-[7vw] leading-8 mt-10'>Get in touch with us today for </h1>
    <h1 className='sm:text-[4vw]  text-[7.4vw]'>expert  <span className='text-[#3675ff]'>assistance</span> </h1>
    </div>
    <div className='h-[90vh]  gap-8 relative text-center'>
<img className='h-full w-full object-cover rounded-3xl object-top ' src={conImg}/>
<div className='p-5  absolute w-[80%]  right-[10%] rounded-3xl bg-white -bottom-10 grid sm:grid-cols-3  sm:gap-0 gap-10'>
  <div className='flex  items-center sm:justify-center gap-5'>
    <div className='px-3 py-2 rounded-full bg-gray-200'><i className="text-2xl ri-mail-send-line"></i></div>
    <div className='font-semibold'>
      <p className='w-fit'>email address:</p>
    <a href='mailto:zaidcodes.404@gmail.com' className='text-[#3675FF] text-lg'>testing@gmail.com</a></div>
  </div>
  <div className='flex  items-center sm:justify-center gap-5'>
    <div className='px-3 py-2 rounded-full bg-gray-200'><i className="text-2xl ri-phone-line"></i></div>
    <div className='font-semibold'>
      <p className='w-fit'>phone number:</p>
    <a href='tel:9411903629' className='text-[#3675FF] text-lg'>+ 123 456 789</a></div>
  </div>
  <div className='flex  items-center sm:justify-center gap-5'>
    <div className='px-3 py-2 rounded-full bg-gray-200 '><i className="text-2xl inline-block animate-bounce  ri-map-pin-line"></i></div>
    <div className='font-semibold'>
      <p className='w-fit'>location:</p>
    <a href='' className='text-[#3675FF] text-lg'>Doha, Qatar</a></div>
  </div>
</div>
    </div>

    <div className="flex flex-col md:flex-row mt-14 sm:justify-between pt-10 ">
      <div className="w-full md:w-1/2 ">
        <h1 className="sm:text-[4vw] text-[8vw]  font-semibold text-black sm:leading-[5vw] ">
          Fill out this form, Let's <span className="text-blue-600">get in touch</span>
        </h1>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100  rounded-2xl p-8 max-w-md">
        <label className="block text-gray-700 font-medium mb-2">Subject*</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>Buy Property</option>
          <option>Sell Property</option>
          <option>Consulting</option>
          <option>General Inquiry</option>
          <option>Other</option>
        </select>

        <label className="block text-gray-700 font-medium mt-4 mb-2">Your Name*</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
        />
        <label className="block text-gray-700 font-medium mt-4 mb-2">Your Email*</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="johndoe@example.com"
        />

        <label className="block text-gray-700 font-medium mt-4 mb-2">Your Message*</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Explain it in details..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-blue-700 transition">
          Submit
        </button>
       
      </div>
    </div>
  </section>
  )
}

export default Contact
