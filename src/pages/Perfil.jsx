import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

const Perfil = () => {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    cpf: "",
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
    documento: null,
    documentoStatus: null,
  });

  const getUserAccountData = () => {
    const userAccount = JSON.parse(localStorage.getItem("userAccount"));
    const redesVinculadas = JSON.parse(localStorage.getItem("redesVinculadas"));
    return { ...userAccount, redesVinculadas };
  };

  useEffect(() => {
    const accountData = getUserAccountData();
    if (accountData) {
      setUserData({
        nome: accountData.nome || "",
        email: accountData.email || "",
        cpf: accountData.cpf || "",
        rua: accountData.rua || "",
        numero: accountData.numero || "",
        bairro: accountData.bairro || "",
        cidade: accountData.cidade || "",
        estado: accountData.estado || "",
        cep: accountData.cep || "",
        interesses: accountData.interesses || "",
        atividades: accountData.atividades || "",
        eventos: accountData.eventos || "",
        compras: accountData.compras || "",
        redesVinculadas: accountData.redesVinculadas || {
          twitter: false,
          instagram: false,
          twitch: false,
        },
      });
    } else {
      setUserData({
        nome: "",
        email: "",
        cpf: "",
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
        documento: null,
        documentoStatus: null,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRedirecionar = (redeNome, urlLogin) => {
    window.open(urlLogin, "_blank");
    setUserData((prev) => {
      const updatedRedesVinculadas = { ...prev.redesVinculadas, [redeNome]: true };
      localStorage.setItem("redesVinculadas", JSON.stringify(updatedRedesVinculadas));
      return { ...prev, redesVinculadas: updatedRedesVinculadas };
    });
  };

  const handleSaveProfile = () => {
    localStorage.setItem("userAccount", JSON.stringify(userData));
    alert("Perfil atualizado com sucesso!");
  };

  const handleResetProfile = () => {
    localStorage.removeItem("userAccount");
    localStorage.removeItem("redesVinculadas");
    setUserData({
      nome: "",
      email: "",
      cpf: "",
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
      documento: null,
      documentoStatus: null,
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

            {/* Botões de atualização e reset */}
            <div className="mt-4 flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleSaveProfile}
                className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
              >
                Atualizar Perfil
              </button>
              <button
                type="button"
                onClick={handleResetProfile}
                className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Resetar Perfil
              </button>
            </div>

            {/* Redes sociais */}
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold mb-4">Vincular Redes Sociais</h2>
              <div className="flex justify-center space-x-6">
                <button
                  type="button"
                  onClick={() => handleRedirecionar('twitter', 'https://twitter.com/login')}
                  className={`p-4 rounded-full border-2 ${userData.redesVinculadas.twitter ? 'opacity-50' : 'border-blue-500 hover:bg-blue-600'} `}
                  disabled={userData.redesVinculadas.twitter}
                >
                  <FaTwitter size={28} className="text-blue-500" />
                </button>
                <button
                  type="button"
                  onClick={() => handleRedirecionar('instagram', 'https://www.instagram.com/accounts/login/')}
                  className={`p-4 rounded-full border-2 ${userData.redesVinculadas.instagram ? 'opacity-50' : 'border-pink-500 hover:bg-pink-600'}`}
                  disabled={userData.redesVinculadas.instagram}
                >
                  <FaInstagram size={28} className="text-pink-500" />
                </button>
                <button
                  type="button"
                  onClick={() => handleRedirecionar('twitch', 'https://www.twitch.tv/login')}
                  className={`p-4 rounded-full border-2 ${userData.redesVinculadas.twitch ? 'opacity-50' : 'border-purple-600 hover:bg-purple-700'}`}
                  disabled={userData.redesVinculadas.twitch}
                >
                  <FaTwitch size={28} className="text-purple-600" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
