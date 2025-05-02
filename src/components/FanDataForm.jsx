import React, { useState } from 'react';

const FanDataForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cpf: '',
    interesses: '',
    atividades: '',
    eventos: '',
    comprasAnoPassado: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('fanData', JSON.stringify(formData));
    alert('Dados salvos com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-4">Dados do Fã</h2>

      <div>
        <label className="block mb-1 font-medium">Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Endereço</label>
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">CPF</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Interesses</label>
        <textarea
          name="interesses"
          value={formData.interesses}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          rows="2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Atividades (último ano)</label>
        <textarea
          name="atividades"
          value={formData.atividades}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          rows="2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Eventos que participou</label>
        <textarea
          name="eventos"
          value={formData.eventos}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          rows="2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Compras (último ano)</label>
        <textarea
          name="comprasAnoPassado"
          value={formData.comprasAnoPassado}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          rows="2"
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        Salvar Dados
      </button>
    </form>
  );
};

export default FanDataForm;
