import React from 'react'

function Vision() {
  return (
   <section data-lenis-scroll-speed="-.1" className='h-screen sm:gap-4 gap-16 my-10 flex sm:flex-row flex-col py-6 '>

    <div className=" w-full ">
    <p className='sm:text-md text-xl '>Our Vision</p>
    <div className='my-6'>
    <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold leading-10'>The values that drive</h1>
    <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold '>everything we do</h1>
    </div>
   <button className='px-5 py-3 font-bold bg-black text-white rounded-full'>Learn more</button>
    
    </div>

    <div className=" w-full  sm:text-2xl text-xl font-semibold flex flex-col gap-10">
    <div className='flex  sm:gap-8  gap-5'>
    <div className='bg-[#3675ff] h-fit px-3 py-2 rounded-xl text-white'><i class="text-2xl ri-home-smile-line"></i></div>
        <div>
            <h1 className='mb-6'>Dream Home</h1>
            <p className='text-gray-400 sm:text-xl text-lg'>Discover your ideal living space with our premium featured real estate listings.</p>

        </div>
    </div>
    
    <div className='flex  sm:gap-8  gap-5'>
        <div className='bg-[#3675ff] h-fit px-3 py-2 rounded-xl text-white'><i class="text-2xl ri-money-rupee-circle-line"></i></div>
        <div>
            <h1 className='mb-6'>Smart Investment</h1>
            <p className='text-gray-400 sm:text-xl text-lg'>Secure high-value, future-ready property and investment opportunities today.</p>

        </div>
    </div>
    <div className='flex  sm:gap-8  gap-5'>
        <div className='bg-[#3675ff] h-fit px-3 py-2 rounded-xl text-white'><i class="text-2xl ri-magic-fill"></i></div>
        <div>
            <h1 className='mb-6'>Luxury Living</h1>
            <p className='text-gray-400 sm:text-xl text-lg'>Explore exclusive, sophisticated properties tailored to your perfect lifestyle.</p>

        </div>
    </div>
  
    </div>

   </section>
  )
}

export default Vision
