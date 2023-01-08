import { Star, User } from "phosphor-react";
import React, { useState } from "react";
import { Partner } from "../utils/interfaces";
import Link from "next/link";

type Props = {
  partners: Partner[];
};

const PartnerCard = ({ partners }: Props) => {
  console.log(partners);
  return (
    <>
      {partners.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-auto md:m-0"
        >
          <div className="w-full h-44 bg-gray-400 flex items-center justify-center rounded-t-lg">
            w-full x h-44
          </div>
          <div className="flex flex-col py-4 px-6">
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="flex items-start justify-between gap-1 w-full">
                <h1 className="text-xl font-semibold text-gray-800">
                  Pietro Ramos
                </h1>
                <span className="rounded-md bg-red-300 border border-red-600 text-red-600 text-xs py-[0.3rem] px-4 block">
                  Psicólogo
                </span>
              </div>
              <div className="flex items-start justify-start gap-1 mt-2">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
            </div>

            <div className="mt-6 mb-3 space-y-3">
              <span className="text-sm text-gray-500 block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </span>
              <label className="text-gray-700 font-semibold text-sm block">
                Araçatuba - SP
              </label>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                href="/"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center w-full bg-purple-900
              text-gray-100 border border-gray-300 rounded-md hover:bg-purple-800 transition-all"
              >
                Ver Perfil
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnerCard;