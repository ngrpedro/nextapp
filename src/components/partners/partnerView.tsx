import React, { useState } from "react";
import { Partner } from "../../utils/interfaces";
import PartnerCard from "./partnerCard";

type Props = {
  partners?: Partner[];
};

const PartnerView = ({ partners }: Props) => {
  const [partner, setPartners] = useState(partners);

  return (
    <div className="my-10">
      <div className="card w-full text-primary-content bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-600">
        <div className="card-body">
          <h2 className="card-title">Filtro de parceiros</h2>
          <p>
            Voluptate ea sint laboris id cupidatat minim commodo excepteur quis
            ullamco culpa.
          </p>
          <div className="card-actions text-slate-900">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Tipo de serviço
              </option>

              <option value="US">Instituição de acolhimento</option>
              <option value="CA">Médicos</option>
              <option value="FR">Pscólogos</option>
            </select>

            <select className="select w-full max-w-xs">
              <option disabled selected>
                Escolha pela cidade
              </option>
              <option value="US">Instituição de acolhimento</option>
              <option value="CA">Médicos</option>
              <option value="FR">Pscólogos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PartnerCard partners={partner} />
      </div>
    </div>
  );
};

export default PartnerView;
