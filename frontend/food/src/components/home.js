import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios';
import footerexport from '../assets/Group 5946.png'
import lupa from '../assets/lupa.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import { Link } from 'react-router-dom'
import coração from '../assets/coracao.png'
import comida1 from '../assets/comida.png'
import comida2 from '../assets/comida2.png'
import comida3 from '../assets/comida3.png'
import comida4 from '../assets/comida4.png'
import comida5 from '../assets/comida5.png'
import comida6  from '../assets/comida6.png'
import comida7  from '../assets/comida7.png'
import saida from '../assets/sair.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

   const handlelogout = async (e) =>{
    e.preventDefault();
    navigate('/');
    setUser(null)

   }

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

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

{/* salgados */}
       
       <div className='cardsaling'>
        <h2>Refeições </h2>
        <Slider {...settings} className='alingcards'>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            <img src={comida1}/>
            <h3>Salada Ravanello </h3>
            <p>Rabanetes,folhas verdes e molho agridoce salpicados com gergelim</p>
              <h2>R$ 49,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida2}/>
            <h3>Spaguetti Gambe</h3>
            <p>Massa fresca con camarões e pesto</p>
            <h2>R$ 79,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida3}/>
            <h3>Torradas de Parma</h3>
            <p>Presunto de parma e rúcula em um pão com fermentação natural</p>
            <h2> R$ 25,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida7}/>
            <h3>1</h3>
          </div>
          </div>
        </Slider>
      </div>

{/* doces */}
         
      <div className='cardsaling'>
        <h2>Sobremesas </h2>
        <Slider {...settings} className='alingcards'>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            <img src={comida4}/>
            <h3>Prugna Pie </h3>
            <p>Torta de ameixa com massa amanteigada,polvilho em açúcar.</p>
              <h2>R$ 79,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida5}/>
            <h3>Peachy pastrie </h3>
            <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
            <h2>R$ 32,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida6}/>
            <h3>Macarons</h3>
            <p>Farinha de amêndoas, manteiga, claras e açúcar.</p>
            <h2>R$ 79,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida7}/>
            <h3>1</h3>
          </div>
          </div>
        </Slider>
      </div>

{/* bebidas */}
         
      <div className='cardsaling'>
        <h2>Bebidas </h2>
        <Slider {...settings} className='alingcards'>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            <img src={comida1}/>
            <h3>Salada Ravanello </h3>
            <p>Rabanetes,folhas verdes e molho agridoce salpicados com gergelim</p>
              <h2>R$ 49,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida2}/>
            <h3>Spaguetti Gambe</h3>
            <p>Massa fresca con camarões e pesto</p>
            <h2>R$ 79,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida3}/>
            <h3>Torradas de Parma</h3>
            <p>Presunto de parma e rúcula em um pão com fermentação natural</p>
            <h2> R$ 25,97</h2>
          </div>
          </div>
          <div>
          <div className='formcards'>
          <div className='alingcoracao'>
            <div class="con-like">
                  <input class="like" type="checkbox" title="like"/>
                  <div class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                      <polygon class="poly" points="10,10 20,20"></polygon>
                      <polygon class="poly" points="10,50 20,50"></polygon>
                      <polygon class="poly" points="20,80 30,70"></polygon>
                      <polygon class="poly" points="90,10 80,20"></polygon>
                      <polygon class="poly" points="90,50 80,50"></polygon>
                      <polygon class="poly" points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
          <img src={comida7}/>
            <h3>1</h3>
          </div>
          </div>
        </Slider>
      </div>

      <footer></footer>
    </div>
  )
}

export default Home