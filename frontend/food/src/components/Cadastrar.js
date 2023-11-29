import React from 'react'
import './cadastrar.css'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import footerexport from '../assets/Group 5946.png'
import axios from 'axios'
const Cadastrar = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false)
  const [user,setUser] = useState(null)
  const navigate = useNavigate()

  return (
    
    <div className='aling'>
   <div className='alingimg'>
              <img src={footerexport} alt="" />
          </div>
    <form className=' forms'>
        <h2 className='texformats'>Crie sua conta </h2>
          <div className='faixa'>
            <label htmlFor="nome" className='texfaixa'> Seu Nome</label>
            <input 
            type="text" 
            name='nome'  
            className='inpfaixa' 
            placeholder='Exemplo: Maria da Silva' 
            id='nome' 
            required
            />
          </div>

          <div className='faixa'>
            <label htmlFor="nome" className='texfaixa'> Seu Email</label>
            <input type="email" name='nome'  className='inpfaixa' placeholder='Exemplo: exemplo@exemplo.com.br' id='email'/>
          </div>

          <div className='faixa'>
            <label htmlFor="nome" className='texfaixa'> Sua Senha</label>
            <input type="password" name='nome'  className='inpfaixa' placeholder='No mínimo 6 caracteres '  id='senha'/>
          </div>

          <div className='btnfaixa'>                                                     
              <button  className='btnfaixa'> Criar Conta</button>
          </div>

          <div className='alingtext'>
            <Link to='/login'>Já tenho conta</Link>
          </div>
    </form>
</div>
  )
}

export default Cadastrar