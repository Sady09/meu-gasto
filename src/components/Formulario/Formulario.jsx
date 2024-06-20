import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fonteRenda: "",
    renda: "",
    data: "",
  });

  const handleChange = (e) => {
    const { fonteRenda, value } = e.target;
    setFormData({
      ...formData,
      [fonteRenda]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <div className="flex flex-col items-center p-5 bg-red-600 ">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Fonte da renda"
            type="text"
            id="fonteRenda"
            fonteRenda="fonteRenda"
            value={formData.fonteRenda}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Renda"
            type="renda"
            id="renda"
            fonteRenda="renda"
            value={formData.renda}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            id="renda"
            fonteRenda="renda"
            value={formData.renda}
            onChange={handleChange}
          >
            <option value="">Selecione uma fonte</option>
            <option value="developer">Youtube</option>
            <option value="designer">Instagram</option>
            <option value="manager">Facebook</option>
          </select>
        </div>
        <button type="submit" className="p-3 bg-corPainel rounded-xl">
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}

export default App;
