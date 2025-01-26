import React from 'react'
import Mpic from '../Assets/mission.avif'
import { useEffect,useRef } from 'react';

function Mission() {
  const imgRef = useRef(null);
  
    useEffect(() => {
      // Parallax effect handler
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (imgRef.current) {
          // Adjust the transform property to create the parallax effect
          imgRef.current.style.transform = `translateY(${scrollY * 0.03}px)`;
        }
      };
  
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <section className='sm:h-[85vh] h-screen my-10 grid grid-cols-12'>
        <div ref={imgRef} className='sm:col-span-5 col-span-12  rounded-3xl overflow-hidden shadow-gray-800 shadow-2xl'>
            <img className='object-cover h-full w-full ' src={Mpic}/>
        </div>
        <div className='sm:col-span-7 col-span-12 sm:px-12 flex justify-center flex-col gap-10 '>
            <h1 className='text-black text-2xl font-semibold'>At Realistic,</h1>
            <p className='text-gray-500 text-xl'>our mission is simple: to provide you with the best real estate solutions, tailored to meet your needs. We understand that finding the perfect property is more than just a transaction it’s about creating a space where life happens. Our dedicated team combines industry expertise.</p>
            
        </div>
    </section>
  )
}

export default Mission
