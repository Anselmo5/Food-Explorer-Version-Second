import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios';
import footerexport from '../assets/Group 5946.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import { Link } from 'react-router-dom'
import coração from '../assets/coracao.png'
import comida4 from '../assets/comidacard4.png'
import comida5 from '../assets/comidacard5.png'
import comida6  from '../assets/comidacard6.png'
import saida from '../assets/sair.png'

const Home = () => {
  return (
    <div>
        <div>
      <nav>
        <div className='alinhamento'>

          <div className='alinhamentoimg'>
            <img src={footerexport} alt="" />
          </div>
          <div className='inp'>
            <input type="text" placeholder='Busque por pratos ou ingredientes' />
          </div>
          <div className='btn'>
            <Link> Pedidos (0)</Link>
          </div>
        </div>

        <div className="saidaiconh">
            <Link to='/'>
              <img src={saida} alt="" />
            </Link>
          </div>
      </nav>



      <div className='alingcontainer'>
        <div className='containerblock'>
          <img src={logo2} alt="" />

          <div className='al'>
            <h2>Sabores inigualáveis</h2>

          </div>
          <div className='al'>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </div>


    {/* Cards */}
    <div className='alingcards'>
        <div className='corpo'>
          <div className='cards'>
            <div className='iconcard'>
              <Link>
                <img src={coração} alt="" />
              </Link>
            </div>
            <div className='conteudocard'>
              <img src={comida4} alt="" />
              <h3>Prugna Pie</h3>
              <p>Torta de ameixa com massa amanteigada, polvilho em açúcar.</p>
              <h1>R$ 79,97</h1>
              <div className='btnincl'>
                <Link to='/incli1'>Incluir</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='corpo'>
          <div className='cards'>
            <div className='iconcard'>
              <Link>
                  <img src={coração} alt="" />
              </Link>
            </div>
            <div className='conteudocard'>
              <img src={comida5} alt="" />
              <h3>Peachy pastrie </h3>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <h1>R$ 32,97</h1>
              <div className='btnincl'>
                <Link to='/incli2'>Incluir</Link>
              </div>
            </div>
          </div>
        </div>


        <div className='corpo'>
          <div className='cards'>
            <div className='iconcard'>
              <Link>
                  <img src={coração} alt="" />
              </Link>
            </div>
            <div className='conteudocard'>
              <img src={comida6} alt="" />
              <h3>Macarons</h3>
              <p>Farinha de amêndoas, manteiga, claras e açúcar.</p>
              <h1>R$ 79,97</h1>
              <div className='btnincl'>
                <Link to='/incli3'>Incluir</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  {/* fim cards */}
  <div className='editfooter'>
      <footer>
        <div className='alin'>
          <img src={logo} alt='' />
          <p> food explorer</p>
        </div>

        <div className='alins'>
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </footer>
  </div>
    </div>

    </div>
  )
}

export default Home
