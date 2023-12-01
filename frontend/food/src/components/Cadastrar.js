import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './cadastrar.css';
import footerexport from '../assets/Group 5946.png';

const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/create-user', {
        nome,
        email,
        senha,
      });

      // Se a criação do usuário for bem-sucedida, você pode atualizar o estado ou fazer outras ações
      setUser(response.data);

      // Redirecionar para a página de login ou outra página, se necessário
      navigate('/login');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError(true);
    }
  };

  return (
    <div className="aling">
      <div className="alingimg">
        <img src={footerexport} alt="" />
      </div>
      <form className="forms" onSubmit={handleSubmit}>
        {/* Restante do seu formulário */}
        <div className="faixa">
          <label htmlFor="nome" className="texfaixa">
            Seu Nome
          </label>
          <input
            type="text"
            name="nome"
            className="inpfaixa"
            placeholder="Exemplo: Maria da Silva"
            id="nome"
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </div>


          <div className='faixa'>
            <label htmlFor="nome" className='texfaixa'> Seu Email</label>
            <input 
            type="email" 
            name='nome'  
            className='inpfaixa' 
            placeholder='Exemplo: exemplo@exemplo.com.br' 
            id='email'
            onChange={ (e) => setEmail(e.target.value)}
            />
          </div>

          <div className='faixa'>
            <label htmlFor="nome" className='texfaixa'> Sua Senha</label>
            <input 
            type="password" 
            name='nome'  
            className='inpfaixa' 
            placeholder='No mínimo 6 caracteres '  
            id='senha'
            onChange={(e) => setSenha(e.target.value)}
            
            />
          </div>

        
        <div className="btnfaixa">
          <button type="submit" className="btnfaixa">
            Criar Conta
          </button>
        </div>

        <div className="alingtext">
          <Link to="/login">Já tenho conta</Link>
        </div>
      </form>
    </div>
  );
};

export default Cadastrar;
