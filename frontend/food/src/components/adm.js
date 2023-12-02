import React from 'react'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'
import lupa from '../assets/lupa.png'
import logo2 from '../assets/pngegg 1.png'
import './adm.css'
import { useNavigate } from 'react-router-dom'
const Adm = () => {

  const navigate = useNavigate();

  const handlelogout = async (e) =>{
   e.preventDefault();
   navigate('/');
  }
  return (
    <div>
      <nav>
          <div className='alingcontaineradm'>
              <img src={logoadm}/>
              <div className='inpiconadm'>
                <button>  <img src={lupa}/></button>
                <input className='inpsdm' placeholder='Busque por pratos ou ingredientes'></input>
              </div>
              <button>Novo prato</button>
              <div className='imgclickadm'>
                <img src={saida} onClick={handlelogout}/>
              </div>
          </div>
       </nav>

       <div className='containeralingadm'>
          <div className='containeradm'>
               <div className='contcontaineradm'>
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

export default Adm
