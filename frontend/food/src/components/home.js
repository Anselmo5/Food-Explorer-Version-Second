import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios';
import footerexport from '../assets/Group 5946.png'
import lupa from '../assets/lupa.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import { Link } from 'react-router-dom'
import coração from '../assets/coracao.png'
import comida4 from '../assets/comidacard4.png'
import comida5 from '../assets/comidacard5.png'
import comida6  from '../assets/comidacard6.png'
import saida from '../assets/sair.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

   const handlelogout = async (e) =>{
    e.preventDefault();
    navigate('/');
    setUser(null)

   }
  return (
    <div>
       <nav>
          <div className='alingcontainer'>
              <img src={footerexport}/>
              <div className='inpicon'>
                <button>  <img src={lupa}/></button>
                <input className='inp' placeholder='Busque por pratos ou ingredientes'></input>
              </div>
              <button>Pedidos(0)</button>
              <div className='imgclick'>
                <img src={saida} onClick={handlelogout}/>
              </div>
          </div>
       </nav>

    </div>
  )
}

export default Home