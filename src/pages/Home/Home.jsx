import React from "react";

function Home() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-1 bg-red-700">
        {/* Primeiro quadrado */}
        <div className="flex">
          <span>R$</span>
        </div>
        {/* Segundo quadrado com 2 quadradinhos */}
        <div className="flex">
          <div className="flex"></div>
          <div className="flex"></div>
        </div>
        {/* Ultimo quadrado */}
        <div className="flex"></div>
      </div>
      <div className="flex flex-[2_2_0%] bg-blue-700"></div>
    </div>
  );
}

export default Home;
