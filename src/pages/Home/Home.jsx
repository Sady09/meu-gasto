import React from "react";
// import Select from "react-select";
import Sidebar from "../../components/Sidebar/Sidebar";
import Formulario from "../../components/Formulario/Formulario";

function Home() {
  // const options = [
  //   { value: "adicionar", label: "Adicionar" },
  //   { value: "subtrair", label: "Subtrair" },
  // ];
  const valorTotal = 10000;
  return (
    <div className="flex gap-4 p-5 font-mono bg-corFundo h-[100vh]">
      <Sidebar />
      <div className="flex flex-col flex-[4_2_0%] bg-corMenus rounded-3xl p-7">
        {/* Input para insercao dos dados */}
        <div className="flex text-7xl p-5 text-gray-300">Rendas</div>
        <div className="flex text-5xl justify-center p-5 text-gray-300 rounded-3xl bg-corFundo shadow-md ">
          Renda Total:
          <span className="text-green-800">{`R$${valorTotal}`}</span>
        </div>
        {/* <Select options={options}></Select> */}
        <div className="flex bg-green-200 flex-1 ">
          <Formulario />
          <div>abc</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
