import React from 'react'
import bed from '../Assets/bed.png'
import bath from '../Assets/bath.png'
function Properties() {
  return (
    <section className='min-h-screen'>
    <div className='flex sm:justify-between justify-start sm:items-center items-start sm:flex-row flex-col h-[40vh]'>
      <div>
        <p className='sm:text-md text-xl mb-6'>Properties</p>
        <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold leading-10'>Ready to buy your dream </h1>
        <h1 className='sm:text-[3.4vw] text-[8vw] font-semibold '>home? find it here</h1>
      </div>
      <button className='px-5 py-3 font-bold bg-black text-white rounded-full text-nowrap '>All Properties</button>
    </div>
    <div className="cards-section grid sm:grid-cols-3 grid-cols-1  gap-4">
      <div className="card">
        <div className='h-[50vh] overflow-hidden rounded-3xl'>
        <img className='h-full w-full object-cover  hover:scale-110 transition-all duration-500' src='https://framerusercontent.com/images/LPsvVxwLIBMzzyZAFCgBAmu8Q.webp?scale-down-to=512' alt="house" />
        </div>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>4321 Cedar Lane , NY</p>
          <h2 className='font-semibold text-2xl my-2'>Cedar Height</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2 '>
              <img src={bed} className='sm:w-[1.4vw] w-[5vw]' alt="bed" />
              <p>4</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='sm:w-[1.4vw] w-[5vw]' alt="bed" />
              <p>2</p>
            </div>  
            <p>25,000 sqrt ft.</p>
            
           
            </div>
        </div>
      </div>

      <div className="card">
        <div className='h-[50vh] '>
        <img className='h-full w-full object-cover rounded-3xl' src='https://framerusercontent.com/images/lnxnVDzZ0BVkw88Ekp1wg5FSFM.jpg' alt="house" />
        </div>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>4321 Cedar Lane , NY</p>
          <h2 className='font-semibold text-2xl my-2'>Cedar Height</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2'>
              <img src={bed} className='w-[1.4vw]' alt="bed" />
              <p>4</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='w-[1.4vw]' alt="bed" />
              <p>2</p>
            </div>  
            <p>25,000 sqrt ft.</p>
            
           
            </div>
        </div>
      </div>
      <div className="card">
        <div className='h-[50vh] '>
        <img className='h-full w-full object-cover rounded-3xl' src='https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg' alt="house" />
        </div>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>4321 Cedar Lane , NY</p>
          <h2 className='font-semibold text-2xl my-2'>Cedar Height</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2 '>
              <img src={bed} className='w-[1.4vw]' alt="bed" />
              <p>4</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='w-[1.4vw]' alt="bed" />
              <p>2</p>
            </div>  
            <p>25,000 sqrt ft.</p>
            
           
            </div>
        </div>
      </div>
      <div className="card">
        <div className='h-[50vh] '>
        <img className='h-full w-full object-cover rounded-3xl' src='https://framerusercontent.com/images/S5hH7eva4Nm6zavJIPlbPtQnNo.jpg?scale-down-to=512' alt="house" />
        </div>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>4321 Cedar Lane , NY</p>
          <h2 className='font-semibold text-2xl my-2'>Cedar Height</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2 '>
              <img src={bed} className='w-[1.4vw]' alt="bed" />
              <p>4</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='w-[1.4vw]' alt="bed" />
              <p>2</p>
            </div>  
            <p>25,000 sqrt ft.</p>
            
           
            </div>
        </div>
      </div>
      <div className="card">
        <div className='h-[50vh] '>
        <img className='h-full w-full object-cover rounded-3xl' src='https://framerusercontent.com/images/FyefkGsDB4MFaKNg0Z4PCvgjA.jpg?scale-down-to=512' alt="house" />
        </div>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>4321 Cedar Lane , NY</p>
          <h2 className='font-semibold text-2xl my-2'>Cedar Height</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2 '>
              <img src={bed} className='w-[1.4vw]' alt="bed" />
              <p>4</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='w-[1.4vw]' alt="bed" />
              <p>2</p>
            </div>  
            <p>25,000 sqrt ft.</p>
            
           
            </div>
        </div>
      </div>
      <div className="card">
        <div className='h-[50vh] '>
        <img className='h-full w-full object-cover rounded-3xl' src='https://framerusercontent.com/images/2my6Ls6ma3KSWnsfHEWdGxco.jpg?scale-down-to=512' alt="house" />
        </div>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>4321 Cedar Lane , NY</p>
          <h2 className='font-semibold text-2xl my-2'>Cedar Height</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2 '>
              <img src={bed} className='w-[1.4vw]' alt="bed" />
              <p>4</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='w-[1.4vw]' alt="bed" />
              <p>2</p>
            </div>  
            <p>25,000 sqrt ft.</p>
            
           
            </div>
        </div>
      </div>
    
      
    </div>
    </section>
  )
}

export default Properties
