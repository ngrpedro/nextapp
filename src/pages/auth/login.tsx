import React, { FormEvent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession, signIn, useSession, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="h-screen">
        <section className="bg-gray-200 h-screen flex items-center justify-center">
          <div className="p-10 mx-4 bg-white rounded-md">
            <div className="text-center">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 mb-10">
                Se conecte com a gente
              </h1>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                {session ? (
                  <div>
                    <h1>Bem vindo</h1>
                    <p>{session?.user?.email}</p>
                    <br />
                    <button
                      className="btn w-full normal-case text-lg font-normal bg-blue-600 border-none hover:bg-blue-500"
                      type="button"
                      onClick={() => signOut()}
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="btn w-full normal-case text-lg font-normal bg-blue-600 border-none hover:bg-blue-500"
                      type="button"
                      onClick={() => signIn()}
                    >
                      Entrar
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (context) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}; 
*/

export default login;
