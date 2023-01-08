import { User } from "phosphor-react";
import React from "react";
import { Partner } from "../utils/interfaces";

type Props = {
  partners: Partner[];
};

const PartnerCard = ({ partners }: Props) => {
  console.log(partners);
  return (
    <>
      {partners.map((item) => (
        <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md px-6 m-auto md:m-0">
          <div className="flex flex-col items-center pb-10">
            <div className="w-24 h-24 overflow-hidden bg-gray-100 rounded-full flex items-center justify-center my-5">
              <User size={66} />
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              Instituição Caminhando Juntos
            </h1>
            <span className="text-center text-sm text-gray-500 my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
              text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 
              focus:ring-4 focus:outline-none focus:ring-gray-200 "
              >
                Ver Perfil
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnerCard;
