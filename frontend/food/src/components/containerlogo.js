import React from 'react'
import logo2 from '../assets/pngegg 1.png'
import './containerlogo.css'
const containerlogo = () => {
  return (
    <div>
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
    </div>
  )
}

export default containerlogo
