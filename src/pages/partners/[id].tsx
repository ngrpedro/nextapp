import Head from "next/head";
import { useRouter } from "next/router";
import { CaretRight, HouseSimple } from "phosphor-react";
import React from "react";

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
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <HouseSimple size={20} />
                Inicio
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <CaretRight size={16} />
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                >
                  Perfil
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <section className="relative">
          <div className="w-full h-64 bg-gray-400">teste</div>
          <div className="absolute top-[11rem] left-10">
            <div className="flex items-start justify-start gap-6">
              <div className="rounded-full bg-slate-600 w-56 h-56 text-center">
                userAvatar
              </div>

              <div>
                <h1 className="text-2xl font-bold">Pietro Ramos</h1>
                <p className="text-gray-700">Araçatuba - SP</p>
                <p className="text-gray-700">
                  Psicologo especialista não sei no que.
                </p>
                <div className=" flex items-center justify-start gap-8 pt-6">
                  <span className="py-1 px-4 bg-blue-300 border border-blue-900 text-blue-900 rounded-md text-sm block">
                    Homem Trans
                  </span>
                  <span className="py-1 px-4 bg-blue-300 border border-blue-900 text-blue-900 rounded-md text-sm block">
                    LGBTQ+
                  </span>
                  <span className="py-1 px-4 bg-blue-300 border border-blue-900 text-blue-900 rounded-md text-sm block">
                    Traumas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[12rem]">
          <div className="px-16 flex flex-col items-start justify-start gap-4">
            <h1 className="text-2xl font-bold block">Lorem ipsum dolor</h1>
            <p className="block">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              totam? Possimus nisi modi porro placeat officia ratione dolore
              excepturi sint magni, voluptatum harum blanditiis atque ipsum
              corrupti, suscipit enim nihil.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
