import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateAccount = () => {
    if (!email || !senha || !cpf || !nome) {
      setErrorMessage('Todos os campos são obrigatórios!');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('nome', nome);

    navigate('/login');
  };

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})?/, '$1.$2.$3-$4');

    setCpf(value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-blue-500 mb-4">Criar Conta</h1>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            <p>{errorMessage}</p>
          </div>
        )}

        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={handleCpfChange}
          className="w-full p-2 mb-4 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleCreateAccount}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Criar Conta
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-300">Já tem uma conta? <a href="/login" className="text-blue-400 hover:text-blue-500">Faça login</a></p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
