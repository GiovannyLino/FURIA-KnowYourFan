import React from "react";

const GamePage = ({ title, gameGif, gameInfo, officialSite }) => {
  return (
    <div className="snap-start h-screen w-full relative text-white flex items-center justify-center">
      {/* Background GIF */}
      <img
        src={gameGif}
        alt={`${title} background`}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-2xl p-6 bg-black/60 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{gameInfo}</p>
        <a
          href={officialSite}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full transition duration-300"
        >
          Site oficial
        </a>
      </div>
    </div>
  );
};

export default GamePage;
