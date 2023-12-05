import logo from './logo.svg';
import './App.css';
import Login from './components/Cadastrar';
import React, { useState } from 'react';
import Cadastrar from './components/Cadastrar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <Cadastrar searchTerm={searchTerm} />
    </div>
  );
}

export default App;
