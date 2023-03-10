import { Star, User } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { IPartner } from "../../utils/interfaces";
import Link from "next/link";
import useSWR from "swr";

const PartnerCard = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR<IPartner[]>(() => "/api/partners", fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <div className="flex items-center justify-center w-full sm:col-span-2 md:col-span-3">
        <progress className="progress progress-info w-56"></progress>
      </div>
    );

  return (
    <>
      {data?.map((item) => (
        <div key={item._id} className="card bg-base-100 border border-gray-200">
          <div className="bg-gray-400 w-full h-[180px] rounded-t-2xl"></div>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <div
              className={`badge border-none 
                ${item.reception === "psicólogo" && "bg-pink-800"}
                ${item.reception === "médico" && "bg-green-800"}
                ${item.reception === "clinica médica" && "bg-yellow-600"}
                ${item.reception === "acolhimento" && "bg-blue-800"}`}
            >
              {item.reception}
            </div>
            <div className="flex items-start justify-start gap-1 mt-2">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <p className="my-3 line-clamp-3">{item.about}</p>
            <p className="font-semibold">{item.city}</p>
            <Link
              href={`/partners/${item._id}`}
              className="btn btn-outline mt-5 normal-case text-base font-normal"
            >
              Ver mais
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnerCard;
