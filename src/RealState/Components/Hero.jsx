import React, { useEffect, useRef } from 'react';
import heropic from '../Assets/home.avif';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
function Hero() {
  const imgRef = useRef(null);
  const tl = useRef()

  useEffect(() => {
    // Parallax effect handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imgRef.current) {
        // Adjust the transform property to create the parallax effect
        imgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(()=>{
    tl.current = gsap.timeline()
    .from(".hero h1",{y:-100,scale:0.5,opacity:0, duration:.5})
    .from(".hero p",{y:-100,scale:0.5,opacity:0, duration:.5})
  })

  return (
    <header >
      <div className="hero flex justify-center items-center font-semibold flex-col my-14">
        <p className="bg-[#f2f7ff] text-[#3675ff] px-3 py-2 rounded-full">Real Estate</p>
        <h1 className="sm:text-[60px] text-[9vw] leading-10 mt-10">
          Find the home that fits
        </h1>
        <h1 className="sm:text-[60px] text-[9vw]">
          your life <span className="text-[#3675ff]">perfectly</span>
        </h1>
      </div>
      <div className="sm:h-[120vh] h-[70vh] w-full rounded-[50px]  relative overflow-hidden">
        <img
          ref={imgRef}
          className="sm:rounded-[50px] rounded-[30px] h-full w-full object-cover transition-transform duration-300 ease-out"
          src={heropic}
          alt="Hero"
        />
      </div>
    </header>
  );
}

export default Hero;
