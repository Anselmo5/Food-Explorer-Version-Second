import React, { useEffect, useState } from 'react'
import './home.css'

import logo2 from '../assets/pngegg 1.png'
import Slids from '../components/slids'
import Footercomponent from '../components/Footercomponent'
import Navcomponents from '../components/Navcomponents' 

const Home = () => {

  return (
    <div>
    
    <Navcomponents/>
       <div className='containeraling'>
          <div className='container'>
               <div className='contcontainer'>
                  <img src={logo2}/>
                    <div>
                    <h2>Sabores inigualáveis</h2>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
               </div>
          </div>
       </div>

   <Slids/>

    <Footercomponent/>

    </div>
  )
}

export default Home