import { Star, User } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Partner } from "../../utils/interfaces";
import Link from "next/link";

type Props = {
  _id: string;
  name: string;
  reception: string;
  city: string;
  isInstitute: boolean;
};

const PartnerCard = () => {
  const [partners, setPartners] = useState<Props[]>();

  useEffect(() => {
    const res = fetch("http://localhost:3000/api/partners")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <>
      {partners?.map((item) => (
        <div key={item._id} className="card bg-base-100 border border-gray-200">
          <div className="bg-gray-400 w-full h-[180px] rounded-t-2xl"></div>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <div
              className={`badge border-none 
                ${item.reception === "psicólogo" && "bg-pink-800"}
                ${item.reception === "médico" && "bg-green-800"}
                ${item.reception === "acolhimento" && "bg-blue-800"}`}
            >
              {" "}
              {item.reception}
            </div>
            <div className="flex items-start justify-start gap-1 mt-2">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
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
