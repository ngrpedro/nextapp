import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  CaretRight,
  HouseSimple,
  User,
  Plus,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import image from "../../public/img1.jpg";
import { Partner } from "../../utils/interfaces";

type Props = {
  partner: Partner[];
};

const Profile = () => {
  const router = useRouter();
  const partnerId = router.query.id;

  const [partner, setPartner] = useState<Props[]>();

  useEffect(() => {
    const res = fetch(`http://localhost:3000/api/partners/${partnerId}`)
      .then((res) => res.json())
      .then((data) => setPartner(data));
  }, []);

  console.log(partner);

  return (
    <div>
      <Head>
        <title>Parceiro</title>
      </Head>

      <main>
        <div className="text-sm font-semibold text-slate-700 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/partners">Parceiros</Link>
            </li>
            <li>Pietro Ramos - Psicólogo</li>
          </ul>
        </div>

        <div>
          <Image
            src={image}
            alt="img"
            className="w-full absolute inset-x-0 h-80 object-cover object-top"
          />
        </div>

        <section className="relative">
          <div className="h-80 w-full"></div>
          <div
            className="absolute top-[11rem] bg-white p-6 rounded-t-lg w-full 
                    border-b border-gray-300 flex items-center justify-between"
          >
            <div className="flex items-start justify-center gap-6">
              <div className="rounded-full bg-slate-300 w-56 h-56 flex items-center justify-center">
                <User size={150} />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">Pietro Ramos</h1>
                  <div>
                    <p className="text-gray-900 text-sm font-medium font-ibm">
                      Araçatuba - SP
                    </p>
                    <p className="text-gray-900 text-sm font-medium  font-ibm">
                      Psicologo especialista não sei no que.
                    </p>
                  </div>
                </div>

                <div className=" flex items-center justify-start gap-2">
                  <span
                    className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 
                  rounded"
                  >
                    Homem trans
                  </span>

                  <span
                    className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 
                  rounded"
                  >
                    Traumas
                  </span>
                  <span
                    className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 
                  rounded"
                  >
                    LGBT+
                  </span>
                </div>

                <div className="flex items-center justify-start gap-2">
                  <InstagramLogo size={28} className="text-gray-600" />
                  <FacebookLogo size={28} className="text-gray-600" />
                  <WhatsappLogo size={28} className="text-gray-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-500 w-24 h-24 rounded-md"></div>
              <div className="bg-gray-500 w-24 h-24 rounded-md"></div>
              <div className="bg-gray-500 w-24 h-24 rounded-md"></div>
              <div className="bg-gray-500 w-24 h-24 rounded-md flex items-center justify-center ">
                <Plus size={32} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[12rem] px-16 flex flex-col gap-16 mb-12">
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-2xl font-bold block">Lorem ipsum dolor</h1>
            <p className="block text-gray-600 text-md font-medium font-asab">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              totam? Possimus nisi modi porro placeat officia ratione dolore
              excepturi sint magni, voluptatum harum blanditiis atque ipsum
              corrupti, suscipit enim nihil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="text-2xl font-bold block">Lorem ipsum dolor</h1>
              <p className="block text-gray-600 text-md font-medium font-asab">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                totam? Possimus nisi modi porro placeat officia ratione dolore
                excepturi sint magni, voluptatum harum blanditiis atque ipsum
                corrupti, suscipit enim nihil.
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="text-2xl font-bold block">Lorem ipsum dolor</h1>
              <p className="block text-gray-600 text-md font-medium font-asab">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                totam? Possimus nisi modi porro placeat officia ratione dolore
                excepturi sint magni, voluptatum harum blanditiis atque ipsum
                corrupti, suscipit enim nihil.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
