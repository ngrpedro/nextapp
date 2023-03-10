import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  User,
  Plus,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import image from "../../public/img1.jpg";
import { IPartner } from "../../utils/interfaces";
import useSWR from "swr";

import Layout from "../../components/layouts/layout";



const Profile = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  };

  const { query } = useRouter();
  const { data, error } = useSWR<IPartner>(
    () => query.id && `/api/partners/${query.id}`,
    fetcher
  );
  const newTags = data?.tags.split(",");

  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <progress className="progress progress-info w-56"></progress>
      </div>
    );

  return (
    <Layout>
    <div>
      <Head>
        <title>Parceiro</title>
      </Head>

      <main>
        {/* Breacrumb */}
        <div className="text-sm font-semibold text-slate-700 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/partners">Parceiros</Link>
            </li>
            <li className="capitalize">
              {data?.name} - {data?.reception}
            </li>
          </ul>
        </div>

        {/* Bg Image */}
        <div>
          <Image
            src={image}
            alt="img"
            className="w-full absolute inset-x-0 h-80 object-cover object-top"
          />
        </div>

        {/* Main Profiles */}
        <section className="relative">
          <div
            className="mt-[15rem] bg-white p-6 rounded-t-lg w-full border-b border-gray-300 
                  flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            {/* Card Main Profile */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-6">
              <div className="rounded-full bg-slate-300 w-56 h-56 flex items-center justify-center m-auto sm:m-0">
                <User size={150} />
              </div>

              {/* About */}
              <div className="flex flex-col gap-6 items-center text-center sm:items-start sm:text-start">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">{data?.name}</h1>
                  <div>
                    <p className="text-gray-900 text-sm font-medium font-ibm">
                      {data?.city}
                    </p>
                    <p className="text-gray-900 text-sm font-medium  font-ibm">
                      Psicologo especialista n??o sei no que.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-2">
                  {newTags?.map((item, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-start gap-2">
                  <InstagramLogo size={28} className="text-gray-600" />
                  <FacebookLogo size={28} className="text-gray-600" />
                  <WhatsappLogo size={28} className="text-gray-600" />
                </div>
              </div>
            </div>

            {/* Galery */}
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

        {/* Card Main Content */}
        <section className="px-16 flex flex-col gap-16 mb-12 mt-16">
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
    </Layout>

  );
};

export default Profile;
