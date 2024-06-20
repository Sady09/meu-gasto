import React from "react";
import Select from "react-select";
import { MdAddCircleOutline } from "react-icons/md";

function Home() {
  const options = [
    { value: "adicionar", label: "Adicionar" },
    { value: "subtrair", label: "Subtrair" },
  ];
  const valorTotal = 10000;
  return (
    <div className="flex gap-4 p-10">
      <div className="flex flex-1 flex-col p-3 bg-gray-700 ">
        {/* Primeiro quadrado */}
        <div className="flex text-7xl p-10">Saldo Total</div>
        <div className="flex text-8xl justify-center p-10">{`R$ ${valorTotal}`}</div>
        {/* Segundo quadrado com 2 quadradinhos */}
        <div className="flex flex-row gap-5">
          <div className="flex p-5 bg-orange-500">Entrada</div>
          <div className="flex flex-1 max-w-60 p-5  bg-yellow-500">Saída</div>
        </div>
        {/* Ultimo quadrado */}
        <div className="flex bg-red-500">Histórico</div>
      </div>
      <div className="flex flex-[2_2_0%] bg-blue-700 max-h-20">
        {/* Input para insercao dos dados */}
        <button type="button">
          <MdAddCircleOutline />
        </button>
        <input
          type="text"
          placeholder="Valor"
          name="novoValor"
          id="novoValor"
        />
        <Select options={options}></Select>
      </div>
    </div>
  );
}

export default Home;
