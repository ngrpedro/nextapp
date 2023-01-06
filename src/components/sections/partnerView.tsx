import React from "react";

const PartnerView = () => {
  return (
    <div className="my-10">
      <div className=" rounded p-4 space-y-5 bg-white">
        <p>Filtre e veja os detalhes das instituições</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 itens-center justify-center gap-4">
          <select
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg 
            block w-full p-2.5"
          >
            <option selected>Tipo de serviço</option>
            <option value="US">Instituição de acolhimento</option>
            <option value="CA">Médicos</option>
            <option value="FR">Pscólogos</option>
          </select>

          <select
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg 
            block w-full p-2.5"
          >
            <option selected>Escolha pela cidade</option>
            <option value="US">Instituição de acolhimento</option>
            <option value="CA">Médicos</option>
            <option value="FR">Pscólogos</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PartnerView;
