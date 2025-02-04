import React, { useEffect } from 'react'
import AboutInfo from '../Components/AboutInfo'
import AboutInfo2 from '../Components/AboutInfo2'

import Process from '../Components/Process'
import Carousel from '../Components/Carousel'
import Count from '../Components/Count'
import You from '../Components/you'
import GLBModel from '../Components/GLBModel'

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
   <>
  
   <You/>
   <AboutInfo/>
   <AboutInfo2/>
   <Process/>
   </>
  )
}

export default About
