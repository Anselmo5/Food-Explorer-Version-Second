import React from 'react'
import logoadm from '../assets/Frame.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import { Link } from 'react-router-dom'
import edite from '../assets/editar.png'
import comidacard from '../assets/comidacard.png'
import comidacard2 from '../assets/comidacard2.png'
import comidacard3 from '../assets/comidacard3.png'
import './adm.css'
const Adm = () => {
  return (
    <div>
       <div>
      <nav>
        <div className='alinhamentoadm'>

          <div className='alinhamentoimgadm'>
            <img src={logoadm} alt="" />
          </div>
          <div className='inpadm'>
            <input type="text" placeholder='Busque por pratos ou ingredientes' />
          </div>

          <div className='btn'>
            <Link to='/enviarpedido'> Pedidos (0)</Link>
          </div>
        </div>
      </nav>



      <div className='alingcontaineradm'>
        <div className='containerblockadm'>
          <img src={logo2} alt="" />

          <div className='aladm'>
            <h2>Sabores inigualáveis</h2>

          </div>
          <div className='aladm'>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </div>


      {/* Cards */}
      <div className='alingcards'>
        <div className='corpo'>
          <div className='cards'>
            <div className='iconcard'>
              <Link to="/pedido ">
                <img src={edite} alt="" />
              </Link>
            </div>
            <div className='conteudocard'>
              <img src={comidacard} alt="" />
              <h3>Salada Ravanello</h3>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <h1>R$ 49,97</h1>
            </div>
          </div>
        </div>

        <div className='corpo'>
          <div className='cards'>
            <div className='iconcard'>
              <Link to='/Pedido2'>
                  <img src={edite} alt="" />
              </Link>
            </div>
            <div className='conteudocard'>
              <img src={comidacard2} alt="" />
              <h3>Spaguetti Gambe</h3>
              <p>Massa fresca com camarões e pesto. </p>
              <h1>R$ 79,97  </h1>
            </div>
          </div>
        </div>


        <div className='corpo'>
          <div className='cards'>
            <div className='iconcard'>
              <Link to='/Pedido3'>
                  <img src={edite} alt="" />
              </Link>
            </div>
            <div className='conteudocard'>
              <img src={comidacard3} alt="" />
              <h3>Torradas de Parma</h3>
              <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
              <h1>R$ 25,97</h1>
            </div>
          </div>
        </div>
      </div>

      {/* fim cards */}
  <div className='editfooter'>
      <footer>
        <div className='alinadm'>
          <img src={logo} alt='' />
          <p> food explorer</p>
        </div>

        <div className='alinsadm'>
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </footer>
   </div>   
    </div>
    </div>
  )
}

export default Adm
