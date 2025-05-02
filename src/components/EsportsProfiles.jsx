import React, { useState } from 'react';

const EsportsProfiles = () => {
  const [profiles, setProfiles] = useState(['']);
  const [result, setResult] = useState(null);

  const handleProfileChange = (index, value) => {
    const newProfiles = [...profiles];
    newProfiles[index] = value;
    setProfiles(newProfiles);
  };

  const addProfileField = () => {
    setProfiles([...profiles, '']);
  };

  const simulateEsportsValidation = (links) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const validLinks = links.filter(link => link.includes('faceit') || link.includes('hltv') || link.includes('liquipedia'));
        resolve({
          status: validLinks.length > 0 ? 'success' : 'warning',
          message:
            validLinks.length > 0
              ? `Foram encontrados ${validLinks.length} perfis relevantes.`
              : 'Nenhum perfil relevante encontrado.',
        });
      }, 1300);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await simulateEsportsValidation(profiles);
    setResult(result);
    localStorage.setItem('esportsProfiles', JSON.stringify({ profiles, result }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold">Perfis em Sites de eSports</h2>

      {profiles.map((link, index) => (
        <input
          key={index}
          type="url"
          placeholder="https://faceit.com/..."
          value={link}
          onChange={(e) => handleProfileChange(index, e.target.value)}
          className="w-full border p-2 rounded-lg mt-2"
        />
      ))}

      <button
        type="button"
        onClick={addProfileField}
        className="text-sm text-blue-600 underline"
      >
        + Adicionar mais um link
      </button>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition block mt-2"
      >
        Validar Links
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-lg ${
          result.status === 'success'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {result.message}
        </div>
      )}
    </form>
  );
};

export default EsportsProfiles;
