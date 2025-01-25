import React from 'react'

function Footer() {
  return (
    <>
   <div  className='grid sm:grid-cols-2  mt-12 sm:gap-0 gap-10 py-10'>
<div className=''>
<h1 className='sm:text-[3vw] text-[7vw] font-semibold leading-10'>Discover Real state Ideas </h1>
<h1 className='sm:text-[3vw] text-[7vw] font-semibold '>from your own Ease!</h1>
<div className='flex gap-5 text-[#3859FF] mt-4'>
<i className="py-2 px-3  bg-[#EDF3FF] text-2xl rounded-xl ri-facebook-fill"></i>
<i className="py-2 px-3 bg-[#EDF3FF] text-2xl rounded-xl ri-linkedin-fill"></i>
<i className="py-2 px-3 bg-[#EDF3FF] text-2xl rounded-xl ri-twitter-fill"></i>
</div>
</div>

<div className='grid sm:grid-cols-3  grid-cols-2'>
  
   
    <div className='w-full text-gray-500 flex flex-col gap-4 font-semibold sm:text-center'>
    <h1 className='text-xl  text-black '>Quick Links</h1>
   <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
    </div>

    <div className='w-full text-gray-500 flex flex-col font-semibold  gap-4  sm:text-center'>
    <h1 className='text-xl text-black'>Main Pages</h1>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
    </div>

    <div className='hidden w-full text-gray-500 font-semibold sm:flex flex-col gap-4  text-center'>
    <h1 className='text-xl text-black'>Other</h1>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
    </div>
 
</div>
   </div>
   <p className='p-4 text-gray-500 border-t border-gray-300'>Copyright @2024</p>
   </>
  )
}

export default Footer
