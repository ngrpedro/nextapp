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
import React from "react";
import image from "../../public/img1.jpg";

const Profile = () => {
  const router = useRouter();
  const partnerId = router.query.id;

  return (
    <div>
      <Head>
        <title>Parceiro</title>
      </Head>

      <main>
        <nav className="flex mb-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-blue-900"
              >
                <HouseSimple size={20} />
                Inicio
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-blue-900"
                  >
                <CaretRight className="text-gray-900" size={16} />

                  
                  Todos os parceiros
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CaretRight className="text-gray-900" size={16} />
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-900 hover:text-blue-900 md:ml-2"
                >
                  Perfil
                </a>
              </div>
            </li>
          </ol>
        </nav>
        
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
