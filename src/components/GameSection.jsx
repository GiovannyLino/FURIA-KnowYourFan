import React from 'react';

const GameSection = ({ title }) => {
  return (
    <div className="flex-none w-96 bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl text-white font-bold">{title}</h2>
      <p className="text-gray-400">Informações sobre o time de {title}. Aqui estarão detalhes sobre os jogadores, conquistas e eventos.</p>
      <div className="space-y-2">
        <p className="text-white">Jogadores: 5 principais jogadores</p>
        <p className="text-white">Ranking: 1º lugar no último torneio</p>
        <p className="text-white">Última vitória: 15/04/2025</p>
      </div>
    </div>
  );
};

export default GameSection;
