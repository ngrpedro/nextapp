import React, { useState } from "react";
import { Partner } from "../../utils/interfaces";
import PartnerCard from "./../partnerCard";

const partners: Partner[] = [
  { id: 1, name: "Pietro Ramos", spec: "psicológo", city: "Araçatuba - SP" },
  {
    id: 2,
    name: "Instituição Caminhos Abertos",
    spec: "Acolhimento",
    city: "Rio preto - SP",
  },
  { id: 3, name: "Renata Morais", spec: "médica", city: "Araçatuba - SP" },
  { id: 4, name: "Pietro Ramos", spec: "psicológo", city: "Araçatuba - SP" },
  { id: 5, name: "Pietro Ramos", spec: "psicológo", city: "Araçatuba - SP" },
];

const PartnerView = () => {
  const [partner, setPartners] = useState(partners);

  return (
    <div className="my-10">
      <div className=" rounded p-4 space-y-5 bg-white">
        <p>Filtre e veja os detalhes das instituições</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 itens-center justify-center gap-4">
          <select
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg 
            block w-full p-2.5"
          >
            <option defaultValue="choose">Tipo de serviço</option>
            <option value="US">Instituição de acolhimento</option>
            <option value="CA">Médicos</option>
            <option value="FR">Pscólogos</option>
          </select>

          <select
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg 
            block w-full p-2.5"
          >
            <option defaultValue="choose">Escolha pela cidade</option>
            <option value="US">Instituição de acolhimento</option>
            <option value="CA">Médicos</option>
            <option value="FR">Pscólogos</option>
          </select>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <PartnerCard partners={partner} />
      </div>
    </div>
  );
};

export default PartnerView;