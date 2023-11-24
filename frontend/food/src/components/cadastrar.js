import React from 'react'
import './cadastrar.css'
import footerexport from '../assets/Group 5946.png'
import { Link } from 'react-router-dom'
const cadastrar = () => {
  return (
    <div>

         
          <div className='alings'>
              <div className='alingimga'>
            
              </div>
                <form className=' form'>
                    <h2 className='texformatst'>Crie sua conta </h2>
                      <div className='faixas'>
                        <label htmlFor="nome" className='texfaixa'>Email</label>
                        <input type="email" name='nome'  className='inpfaixas' placeholder='Exemplo: exemplo@exemplo.com.br'/>
                      </div>

                      <div className='faixas'>
                        <label htmlFor="nome" className='texfaixas'> Senha</label>
                        <input type="password" name='nome'  className='inpfaixas' placeholder='No mínimo 6 caracteres '/>
                      </div>

                      <div className='btnfaixas'>                                                     
                        <button></button>
                      </div>

                      <div className='alingtextst'>
                       <a></a>
                      </div>
                </form>
          </div>
          
    </div>
    
  )
}

export default cadastrar