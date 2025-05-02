import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

const Perfil = () => {
  const [userData, setUserData] = useState({
    nome: "João Silva",
    email: "joao.silva@exemplo.com",
    cpf: "123.456.789-00",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    interesses: "Jogos, Tecnologia, Música",
    atividades: "",
    eventos: "",
    compras: "",
    redesVinculadas: {
      twitter: false,
      instagram: false,
      twitch: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRedirecionar = (redeNome, urlLogin) => {
    // Simula o redirecionamento para a página de login oficial da rede social
    window.open(urlLogin, "_blank");

    // Simula o vínculo da conta e salva no localStorage
    setUserData((prev) => {
      const updatedRedesVinculadas = { ...prev.redesVinculadas, [redeNome]: true };
      localStorage.setItem("redesVinculadas", JSON.stringify(updatedRedesVinculadas)); // Salvando no localStorage
      return { ...prev, redesVinculadas: updatedRedesVinculadas };
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Sidebar />

      <div
        className="flex items-center justify-center pt-20 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/furia-logo.gif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(17, 24, 39, 0.85)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-3xl backdrop-blur">
          <h1 className="text-3xl font-bold text-center mb-6">Perfil do Usuário</h1>

          <form className="space-y-4">
            {/* Dados Pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className="block text-lg">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={userData.nome}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="cpf" className="block text-lg">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={userData.cpf}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="interesses" className="block text-lg">Interesses</label>
                <input
                  type="text"
                  id="interesses"
                  name="interesses"
                  value={userData.interesses}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Endereço</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="rua"
                  placeholder="Rua"
                  value={userData.rua}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                />
                <input
                  type="text"
                  name="numero"
                  placeholder="Número"
                  value={userData.numero}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                />
                <input
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                  value={userData.bairro}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  value={userData.cidade}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                />
                <input
                  type="text"
                  name="estado"
                  placeholder="Estado"
                  value={userData.estado}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                />
                <input
                  type="text"
                  name="cep"
                  placeholder="CEP"
                  value={userData.cep}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                />
              </div>
            </div>

            {/* Atividades, Eventos e Compras */}
            <div>
              <label htmlFor="atividades" className="block text-lg mt-4">Atividades relacionadas à FURIA</label>
              <textarea
                id="atividades"
                name="atividades"
                rows="2"
                value={userData.atividades}
                onChange={handleChange}
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="eventos" className="block text-lg">Eventos que participou</label>
              <textarea
                id="eventos"
                name="eventos"
                rows="2"
                value={userData.eventos}
                onChange={handleChange}
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="compras" className="block text-lg">Compras no último ano</label>
              <textarea
                id="compras"
                name="compras"
                rows="2"
                value={userData.compras}
                onChange={handleChange}
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              />
            </div>

            {/* Botão de envio */}
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
              >
                Atualizar Perfil
              </button>
            </div>

            {/* Upload de documento e validação com IA */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Upload de Documento para Validação de Identidade</h2>

              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setUserData((prev) => ({
                        ...prev,
                        documento: file,
                        documentoStatus: null,
                      }));
                    }
                  }}
                  className="w-full bg-gray-700 text-white p-2 rounded"
                />

                {userData.documento && (
                  <div className="text-sm text-gray-300">
                    Documento selecionado: <strong>{userData.documento.name}</strong>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (!userData.documento) {
                      alert("Selecione um documento primeiro!");
                      return;
                    }

                    // Simulação de análise com IA (2 segundos)
                    setUserData((prev) => ({ ...prev, documentoStatus: "validando" }));

                    setTimeout(() => {
                      const isValid = Math.random() > 0.3; // Simulação de 70% de chance de sucesso
                      setUserData((prev) => ({
                        ...prev,
                        documentoStatus: isValid ? "validado" : "invalido",
                      }));
                    }, 2000);
                  }}
                  className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white w-fit"
                >
                  Validar com IA
                </button>

                {userData.documentoStatus === "validando" && (
                  <p className="text-yellow-400 animate-pulse">Analisando documento com IA...</p>
                )}
                {userData.documentoStatus === "validado" && (
                  <p className="text-green-400 font-semibold">✅ Documento válido!</p>
                )}
                {userData.documentoStatus === "invalido" && (
                  <p className="text-red-400 font-semibold">❌ Documento inválido. Tente novamente.</p>
                )}
              </div>
            </div>
          </form>

          {/* Redes Sociais */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Vincule suas redes</h2>
            <div className="flex justify-center gap-8 text-3xl">
              {[
                { nome: "twitter", icon: <FaTwitter />, cor: "text-blue-400", url: "https://twitter.com/login" },
                { nome: "instagram", icon: <FaInstagram />, cor: "text-pink-500", url: "https://www.instagram.com/accounts/login/" },
                { nome: "twitch", icon: <FaTwitch />, cor: "text-purple-500", url: "https://www.twitch.tv/login" },
              ].map((rede) => (
                <button
                  key={rede.nome}
                  onClick={() => handleRedirecionar(rede.nome, rede.url)}
                  className={`transition-transform hover:scale-110 ${
                    userData.redesVinculadas[rede.nome] ? rede.cor : "text-gray-400"
                  }`}
                >
                  {rede.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
