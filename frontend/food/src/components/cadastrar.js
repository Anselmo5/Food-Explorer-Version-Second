import React from 'react'
import './cadastrar.css'
import footerexport from '../assets/Group 5946.png'
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const handleLogin = async (e) =>{
  e.preventDafault

}
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
                        <input 
                        type="email"
                         name='nome'  
                         className='inpfaixas' 
                         placeholder='Exemplo: exemplo@exemplo.com.br'
                         onChange={(e) => setEmail(e.target.value)}
                         />
                      </div>

                      <div className='faixas'>
                        <label htmlFor="nome" className='texfaixas'> Senha</label>
                        <input 
                        type="password" 
                        name='nome'  
                        className='inpfaixas' 
                        placeholder='No mínimo 6 caracteres '
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        />
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