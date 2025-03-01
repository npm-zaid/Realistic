
import React, { useRef ,useEffect} from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { blogsData } from '../Components/data'
import Blog from '../Components/Blog'

const Blogs = () => {
useEffect(()=>{
  window.scrollTo(0, 0);
})
  
  const blog = blogsData.find((b) => b.btn === 'Resources');
  const tblog = useRef(null)
  useGSAP(()=>{
   tblog.current = gsap.timeline()
    .from(".blogs h1",{y:-100,scale:0.5,opacity:0, duration:.5})
    .from(".blogs p",{y:-100,scale:0.5,opacity:0, duration:.5})
  })
  return (
 <section>
      <div  className='blogs text-center font-semibold  my-14'>
        <p className='bg-[#EDF3FF] w-fit m-auto font-semibold text-[#3675ff] px-5 py-2 rounded-full'>{blog.btn}</p>
    <h1 className='sm:text-[4.4vw] text-[7.4vw] leading-10 mt-10'>Expert advice and market </h1>
    <h1 className='sm:text-[4.4vw] text-[7.4vw]'>updates on <span className='text-[#3675ff]'> real estate</span></h1>
    </div>
    <div className='h-[110vh] relative font-semibold rounded-3xl overflow-hidden'>
      <img className='h-full w-full absolute  z-0 object-cover  object-top' src='https://lifestyleinvestmentsind.com/images/Final%20Files/kknagar/front-banner%20copy.jpg'/>
      <div className='absolute z-10 bottom-10 left-5 sm:left-10 rounded-2xl sm:p-8 p-2 bg-white/30 backdrop-blur-sm  '>
      <p className='text-[#EDF3FF] w-fit  bg-[#3675ff] px-3 py-2 rounded-full'>{blog.btn}</p>
      <h1 className='sm:text-3xl text-[6.2vw]  my-4'>The ultimate guide to buying<br/> your first home</h1>
      <p className='text-gray-500 '><i class="ri-calendar-line"></i> Sep 5, 2024</p>
      </div>
      
    </div>
    <Blog/>
 </section>
  )
}

export default Blogs
