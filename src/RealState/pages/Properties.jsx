import React from 'react'
import Propheader from '../Components/Propheader'
import GLBModel from '../Components/GLBModel'
import { useEffect } from 'react'

const Properties = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <GLBModel/>
      <Propheader/>
     
    </div>
  )
}

export default Properties
