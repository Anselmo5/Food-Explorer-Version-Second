import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Navcomponents.css'
import footerexport from '../assets/Group 5946.png'
import saida from '../assets/sair.png'

const Navcomponents = () =>{

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
              <input
                className='inp'
                placeholder='Busque por pratos ou ingredientes'
              />

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

export default Navcomponents
