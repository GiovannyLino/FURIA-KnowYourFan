import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const savedEmail = localStorage.getItem('email');
    const savedSenha = localStorage.getItem('senha');

    // Verificar se o email e a senha correspondem aos salvos
    if (email === savedEmail && senha === savedSenha) {
      localStorage.setItem('usuarioLogado', email); // Salva usuário logado
      navigate('/'); // Redireciona para a página inicial após o login
    } else {
      setErrorMessage('Email ou senha inválidos.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-blue-500 mb-4">Login</h1>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            <p>{errorMessage}</p>
          </div>
        )}

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
        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-gray-300">Não tem uma conta? <a href="/criar-conta" className="text-blue-400 hover:text-blue-500">Crie uma agora!</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
