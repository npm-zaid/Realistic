import React from 'react'

function Features() {
    const featuresData=[
        {id:1,title:'Expert Guidance', icon: 'ri-shield-flash-fill',para:'Receive professional insights to make informed real estate decisions confidently.'},
        {id:2,title:'Tailored Solutions', icon: 'ri-bug-line',para:'We customize property options based on your specific needs and preferences.'},
        {id:3,title:'Market Expertise', icon: 'ri-database-line',para:'Analyze market trends to make informed investment decisions.'},
        {id:4,title:'Seamless Process', icon: 'ri-stack-line',para:'Enjoy a smooth, stress-free experience from property search to final transaction.'},
        {id:5,title:'Client Focused', icon: 'ri-service-line',para:'We prioritize your satisfaction with personalized service every step of the perfect way.'},
        {id:6,title:'Trusted Partners', icon: 'ri-thumb-up-line',para:'Work with a reliable team committed to delivering exceptional results for you.'},
    ]
  return (
   <section className='my-24'>
    <div className='text-center'>
        <h2 className='sm:text-md text-xl mb-10 '>Features</h2>
        <h1 className='sm:text-[3.4vw] text-[7vw] font-semibold leading-10'>Discover the advantages and</h1>
        <h1 className='sm:text-[3.4vw] text-[7vw] font-semibold'>exclusive benefits</h1>
    </div>
    <div className='grid sm:grid-cols-3 grid-cols-1 my-14 gap-16'>
       
       {featuresData.map((feature)=>
       <div className='flex flex-col gap-5 items-center justify-center text-center hover:bg-[#EDF3FF] p-5 rounded-xl transition-all duration-300 ease-in-out' key={feature.id}>
       <i className={`text-[#3675ff] px-5 py-4 rounded-xl w-fit bg-[#EDF3FF] text-2xl ${feature.icon}`}></i>
           <h1 className='text-2xl font-semibold'>{feature.title}</h1>
           <p className='text-lg text-gray-400'>{feature.para}</p>
       </div>)}
       
       

       
    </div>
   </section>
  )
}

export default Features
