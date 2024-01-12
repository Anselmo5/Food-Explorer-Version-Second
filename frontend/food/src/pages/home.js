import React, { useEffect, useState } from 'react'
import './home.css'

import logo2 from '../assets/pngegg 1.png'
import Slids from '../components/slids'
import Footercomponent from '../components/Footercomponent'
import Navcomponents from '../components/Navcomponents' 
import Containerlogo from '../components/containerlogo'

const Home = () => {

  return (
    <div>
    
    <Navcomponents/>
   
    <Containerlogo/>
    
   <Slids/>

    <Footercomponent/>

    </div>
  )
}

export default Home