import React from 'react'
import Mpic from '../Assets/mission.avif'

function Mission() {
  return (
    <section className='sm:h-[85vh] h-screen my-10 grid grid-cols-12'>
        <div className='sm:col-span-5 col-span-12  rounded-3xl overflow-hidden'>
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
