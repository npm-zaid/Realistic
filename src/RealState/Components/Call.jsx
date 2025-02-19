import React from 'react'
import { NavLink } from 'react-router-dom'

function Call() {
  return (
    <div className='sm:h-[80vh] h-[60vh] rounded-3xl bg-[#3675FF] flex justify-center items-center flex-col text-white gap-8 my-12'>
      <p className='sm:text-md text-2xl  font-semibold '>Want to Book a Call?</p>
      <div className='text-center'>
        <h1 className='sm:text-[3.4vw] text-[6.2vw] font-semibold leading-10'>Ready to make your step in real </h1>
        <h1 className='sm:text-[3.4vw] text-[6.2vw] font-semibold '>state? Book Now.</h1>
        </div>
        <NavLink to='/properties' className='px-5 py-3 font-bold bg-white  rounded-full text-nowrap text-black'>View Properties</NavLink>
    </div>
  )
}

export default Call
