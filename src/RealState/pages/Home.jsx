import React from 'react'

import Hero from '../Components/Hero'
import Vision from '../Components/Vision'
import Properties from '../Components/PropCollection'
import Features from '../Components/Features'
import Mission from '../Components/Mission'
import Choose from '../Components/Choose'
import Call from '../Components/Call'
import Blog from '../Components/Blog'
import Testimonials from '../Components/Testimonials'
import Process from '../Components/Process'
import AgentsData from '../Components/AgentsData'
import Faq from '../Components/Faq'
import PropCollection from '../Components/PropCollection'
import Carousel from '../Components/Carousel'



function Home() {
  return (
    <div >
      
        <Hero/>
        <Vision/>
        <PropCollection/>
        <Features/>
        <Mission/>
        <AgentsData/>
        <Choose/>
        <Testimonials/>
        <Process/>
        <Blog/>
       
        <Faq/>

    </div>
  )
}

export default Home
