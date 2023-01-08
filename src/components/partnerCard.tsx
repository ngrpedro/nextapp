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
            <div className="w-24 h-24 overflow-hidden bg-gray-100 rounded-full flex justify-center my-5">
              <svg
                className="w-20 h-20 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
