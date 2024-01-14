import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navcomponents.css';
import footerexport from '../assets/Group 5946.png';
import saida from '../assets/sair.png';

const Navcomponents = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const url = 'http://localhost:3000/pesquisa'

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
    setUser(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${url}?q=${searchTerm}`);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
  
      const data = await response.json();

      console.log('Dados recebidos da API:', data);
    } catch (error) {
      console.error('Erro ao realizar a chamada da API:', error.message);
    }
  };
  

  return (
    <div>
      <nav>
        <div className="alingcontainer">
          <img src={footerexport} />
          <div className="inpicon">
            <form onSubmit={handleSearchSubmit}>
              <input
                className="inp"
                placeholder="Busque por pratos ou ingredientes"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </form>
          </div>
          <button>Pedidos(0)</button>
          <div className="imgclick">
            <img src={saida} alt="Sair" onClick={handleLogout} />
          </div>
        </div>
      </nav>

      <div>
    </div>
    </div>
  );
};

export default Navcomponents;
