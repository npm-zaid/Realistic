import React from 'react'

const Contact = () => {
  return (
  
  <section>
       <div  className='text-center font-semibold  my-14'>
        <p className='bg-[#EDF3FF] w-fit m-auto font-semibold text-[#3675ff] px-5 py-2 rounded-full'>Contact</p>
    <h1 className='sm:text-[4vw]  text-[7vw] leading-8 mt-10'>Get in touch with us today for </h1>
    <h1 className='sm:text-[4vw]  text-[7.4vw]'>expert  <span className='text-[#3675ff]'>assistance</span> </h1>
    </div>
    <div className='h-[90vh]  gap-8 relative text-center'>
<img className='h-full w-full object-cover rounded-3xl ' src='https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg'/>
<div className='p-5 absolute w-[80%]  right-[10%] rounded-3xl bg-white -bottom-10 grid sm:grid-cols-3  sm:gap-0 gap-10'>
  <div className='flex  items-center sm:justify-center gap-5'>
    <div className='px-3 py-2 rounded-full bg-gray-200'><i className="text-2xl ri-mail-send-line"></i></div>
    <div className='font-semibold'>
      <p className='w-fit'>email address:</p>
    <a href='mailto:zaidcodes.404@gmail.com' className='text-[#3675FF] text-xl'>testing@gmail.com</a></div>
  </div>
  <div className='flex  items-center sm:justify-center gap-5'>
    <div className='px-3 py-2 rounded-full bg-gray-200'><i className="text-2xl ri-phone-line"></i></div>
    <div className='font-semibold'>
      <p className='w-fit'>phone number:</p>
    <a href='tel:9411903629' className='text-[#3675FF] text-xl'>+ 123 456 789</a></div>
  </div>
  <div className='flex  items-center sm:justify-center gap-5'>
    <div className='px-3 py-2 rounded-full bg-gray-200 '><i className="text-2xl inline-block animate-bounce  ri-map-pin-line"></i></div>
    <div className='font-semibold'>
      <p className='w-fit'>location:</p>
    <a href='' className='text-[#3675FF] text-xl'>Doha, Qatar</a></div>
  </div>
</div>
    </div>
  </section>
  )
}

export default Contact
