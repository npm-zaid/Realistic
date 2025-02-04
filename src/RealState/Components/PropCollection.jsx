import React from 'react'
import Card from './Card'

import { cards } from './data'
{/**const filterCard = cards.filter(card => card.isSale===true); */}

function PropCollection() {
  return (
    <section className='min-h-screen'>
    <div className='flex sm:justify-between justify-start sm:items-center items-start sm:flex-row flex-col h-[40vh]'>
      <div>
        <p className='sm:text-md text-xl sm:mb-6 mb-3'>Properties</p>
        <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold leading-10'>Ready to buy your dream </h1>
        <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold '>home? find it here</h1>
      </div>
      <button className='px-5 py-3 font-bold sm:mt-0 mt-4 bg-black text-white rounded-full text-nowrap '>All Properties</button>
    </div>
    <div className="cards-section grid sm:grid-cols-3 grid-cols-1  gap-4">
    {
     cards.map((card, index) => (
        <Card key={index} {...card} />
      ))
    }
      
    </div>
    </section>
  )
}

export default PropCollection
