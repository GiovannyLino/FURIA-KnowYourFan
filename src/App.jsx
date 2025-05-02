import React from 'react';
import Sidebar from './components/Sidebar';
import GamePage from './components/GamePage';

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full overflow-y-auto snap-y snap-mandatory">
        <GamePage 
          title="Valorant"
          gameGif="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZzeDJ2cWswaHF5NnBsYWw4ZmFrcGU0a28wNzVtbmYwNWM1MmdhNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqNmbi4La3IJg9PhcR/giphy.gif"
          gameInfo="A FURIA é uma das principais organizações de esports no Valorant, com grandes jogadores. Quer saber mais sobre a FURIA no cenario? Só acessar o link."
          officialSite="https://liquipedia.net/valorant/FURIA"
        />
        <GamePage 
          title="CS2"
          gameGif="https://cdn.videogamesblogger.com/wp-content/uploads/2023/09/counter-strike-2-2023-game-release.gif"
          gameInfo="O time de CS2 da FURIA tem sido muito competitivo, com suas táticas diferenciadas e jogadas incríveis. Muitas de suas conquistas estão aqui abaixo."
          officialSite="https://liquipedia.net/counterstrike/FURIA"
        />
        <GamePage 
          title="League of Legends"
          gameGif="https://media.giphy.com/media/MZ3Z9R0JMopK7t0ZAK/giphy.gif?cid=ecf05e474x731f6wpmimlam6hi2fo10oud0837vnzcuh5btu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          gameInfo="O time de League of Legends da FURIA é conhecido pela sua consistência e habilidade nas competições. Curte a FURIA no LOL? Aqui abaixo tem mais sobre nós."
          officialSite="https://lol.fandom.com/wiki/FURIA"
        />
        <GamePage 
          title="Rocket League"
          gameGif="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQybDloMGNyY3FjbTNvd2RudXAxbjR5MTA3dmcwa252dG9wb2UzZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nXg2lqVpal6KgSC8Zq/giphy.gif"
          gameInfo="A FURIA se destaca no Rocket League com seu jogo rápido e habilidades estratégicas no campo. QUer ficar por dentro? Só ir direto para as informações pelo link."
          officialSite="https://liquipedia.net/rocketleague/FURIA"
        />
        <GamePage 
          title="Rainbow Six Siege"
          gameGif="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWo4aDd1Z2R4ZWd1NjFmeGFtdTlwZmt2NzYwd3k3ZmhoM2hyYjR2NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/o5FYwSsC4sECjMEri8/giphy.gif"
          gameInfo="O time de Rainbow Six Siege da FURIA se destaca pelas suas táticas de jogo e precisão. Tem coisa pra saber em. Não sabe de tudo? Sem problemas! O link ta bem aqui abaixo."
          officialSite="https://liquipedia.net/rainbowsix/FURIA"
        />
        <GamePage 
          title="Apex Legends"
          gameGif="https://media.giphy.com/media/1t8SyHWNzvd65XTWdb/giphy.gif"
          gameInfo="O time da FURIA em Apex Legends é reconhecido pela sua habilidade e força em cada competição. Quer saber de tudo sobre nós no cenário? Só entrar no link."
          officialSite="https://liquipedia.net/apexlegends/FURIA"
        />
      </div>
    </div>
  );
}

export default App;
