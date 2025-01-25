
import React from "react";

const Propheader= ()=>{
    return(
        <section  style={{
          aspectRatio: '1213/667',
          backgroundColor: 'tomato',
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}>
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