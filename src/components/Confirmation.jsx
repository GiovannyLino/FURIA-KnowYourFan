import React, { useEffect, useState } from 'react';

const Confirmation = () => {
  const [fanData, setFanData] = useState(null);
  const [documentData, setDocumentData] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [esportsProfiles, setEsportsProfiles] = useState(null);

  useEffect(() => {
    const storedFanData = JSON.parse(localStorage.getItem('fanData'));
    const storedDocumentData = JSON.parse(localStorage.getItem('documentValidation'));
    const storedSocialLinks = JSON.parse(localStorage.getItem('socialProfiles'));
    const storedEsportsProfiles = JSON.parse(localStorage.getItem('esportsProfiles'));

    setFanData(storedFanData);
    setDocumentData(storedDocumentData);
    setSocialLinks(storedSocialLinks);
    setEsportsProfiles(storedEsportsProfiles);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Resumo do Fã</h2>

      {/* Dados Pessoais */}
      {fanData && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold">Dados Pessoais</h3>
          <ul>
            <li><strong>Nome:</strong> {fanData.name}</li>
            <li><strong>Endereço:</strong> {fanData.address}</li>
            <li><strong>CPF:</strong> {fanData.cpf}</li>
            <li><strong>Interesses:</strong> {fanData.interests.join(', ')}</li>
            <li><strong>Atividades:</strong> {fanData.activities.join(', ')}</li>
            <li><strong>Eventos:</strong> {fanData.events.join(', ')}</li>
            <li><strong>Compras (Último ano):</strong> {fanData.purchases.join(', ')}</li>
          </ul>
        </div>
      )}

      {/* Documento */}
      {documentData && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold">Documento</h3>
          <p>{documentData.result.message}</p>
        </div>
      )}

      {/* Redes Sociais */}
      {socialLinks && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold">Redes Sociais</h3>
          <ul>
            <li><strong>Instagram:</strong> {socialLinks.links.instagram}</li>
            <li><strong>Twitter:</strong> {socialLinks.links.twitter}</li>
            <li><strong>TikTok:</strong> {socialLinks.links.tiktok}</li>
          </ul>
          <p>{socialLinks.result.message}</p>
        </div>
      )}

      {/* Perfis de eSports */}
      {esportsProfiles && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold">Perfis de eSports</h3>
          <ul>
            {esportsProfiles.profiles.map((profile, index) => (
              <li key={index}><strong>Link {index + 1}:</strong> {profile}</li>
            ))}
          </ul>
          <p>{esportsProfiles.result.message}</p>
        </div>
      )}

      <div className="text-center">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={() => window.location.reload()}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
