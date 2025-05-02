import React, { useState } from 'react';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [validationResult, setValidationResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setValidationResult(null); // resetar ao trocar de arquivo
  };

  const simulateValidationAI = (file) => {
    // Simula "leitura com IA": você pode trocar essa lógica no futuro
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          message: `Documento "${file.name}" validado com sucesso.`,
        });
      }, 1500); // simula tempo de processamento
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Por favor, selecione um arquivo.');
      return;
    }

    const result = await simulateValidationAI(file);
    setValidationResult(result);
    localStorage.setItem('documentValidation', JSON.stringify({
      fileName: file.name,
      result,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold">Upload de Documento</h2>

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="block w-full border p-2 rounded-lg"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Validar Documento
      </button>

      {validationResult && (
        <div className={`mt-4 p-4 rounded-lg ${validationResult.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {validationResult.message}
        </div>
      )}
    </form>
  );
};

export default DocumentUpload;
