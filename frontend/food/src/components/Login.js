import React, { useState } from 'react';
import './cadastrar.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Cadastrar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar se o email e senha foram preenchidos
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    } 

    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(response.data);
      setUser(response.data.user);
      navigate('/home');
    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status === 401) {
        setError('Usuário ou senha inválidos');
      }
    }
  };

  return (
    <div>
      <div className='alings'>
        <div className='alingimga'></div>
        <form className=' form'>
          <h2 className='texformatst'>Crie sua conta</h2>
          <div className='faixas'>
            <label htmlFor='nome' className='texfaixa'>
              Email
            </label>
            <input
              type='email'
              name='nome'
              className='inpfaixas'
              placeholder='Exemplo: exemplo@exemplo.com.br'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='faixas'>
            <label htmlFor='nome' className='texfaixas'>
              Senha
            </label>
            <input
              type='password'
              name='nome'
              className='inpfaixas'
              placeholder='No mínimo 6 caracteres '
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='btnfaixas'>
            <button onClick={(e) => handleLogin(e)}>Cadastrar</button>
          </div>

          <div className='alingtextst'>
            <Link></Link>
          </div>

          <div className='alingtext'>
            <Link to='/cadastrar'>oiz</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastrar;