
import React from "react";

const Propheader= ()=>{
    return(
        <section className="h-[80vh]">
        <div className='h-full rounded-3xl bg-[#3675FF] flex justify-center items-center flex-col text-white gap-8 relative'>
         <p className=' bg-[#588CFF] text-white px-5 py-2 rounded-full'>Properties</p>
        <div className='text-center'>
          <h1 className='sm:text-[4.5vw] text-[6.2vw] font-semibold leading-10'>Find the right home </h1>
          <h1 className='sm:text-[4.5vw] text-[6.2vw] font-semibold '>and start packing</h1>
          </div>
          <button className='px-8 py-3 font-semibold bg-white  rounded-full text-nowrap text-black'>Book Now</button>
          <div className="p-10 rounded-full bg-white absolute -bottom-10 w-[70%]"></div>
      </div>
      </section> 
    )
}

export default Propheader;