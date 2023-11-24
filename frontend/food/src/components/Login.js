import React from 'react'
import './Login.css'
const Login = () => {
  return (
    
    <div className='aling'>
    <div className='alingimg'>
     
    </div>
    <form className=' forms'>
        <h2 className='texformats'>Crie sua conta </h2>
          <div className='faixa'>
            <label htmlFor="nome" className='texfaixa'> Seu Nome</label>
            <input type="text" name='nome'  className='inpfaixa' placeholder='Exemplo: Maria da Silva' id='nome'/>
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
           <a href='cadastrar'>op</a>
          </div>
    </form>
</div>
  )
}

export default Login
