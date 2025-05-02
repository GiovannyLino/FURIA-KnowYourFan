/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const SocialLinks = () => {
  const [links, setLinks] = useState({
    instagram: '',
    twitter: '',
    tiktok: '',
  });

  const [validationResult, setValidationResult] = useState(null);

  const handleChange = (e) => {
    setLinks({ ...links, [e.target.name]: e.target.value });
  };

  const simulateSocialValidation = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          message: 'Perfis validados com sucesso. Fã engajado com a FURIA detectado!',
        });
      }, 1200);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await simulateSocialValidation(links);
    setValidationResult(result);
    localStorage.setItem('socialProfiles', JSON.stringify({
      links,
      result,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold">Vincular Redes Sociais</h2>

      <input
        type="url"
        name="instagram"
        placeholder="Link do Instagram"
        value={links.instagram}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
      />
      <input
        type="url"
        name="twitter"
        placeholder="Link do Twitter/X"
        value={links.twitter}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
      />
      <input
        type="url"
        name="tiktok"
        placeholder="Link do TikTok"
        value={links.tiktok}
        onChange={handleChange}
        className="w-full border p-2 rounded-lg"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Validar Perfis
      </button>

      {validationResult && (
        <div className="mt-4 p-4 bg-purple-100 text-purple-800 rounded-lg">
          {validationResult.message}
        </div>
      )}
    </form>
  );
};

export default SocialLinks;
