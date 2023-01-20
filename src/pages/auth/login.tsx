import React, { FormEvent } from "react";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { GoogleLogo } from "phosphor-react";

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
              <div>{session && session.user?.name}</div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  className="btn w-full normal-case text-lg font-normal bg-blue-600 border-none hover:bg-blue-500 spax"
                  type="button"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  Logar com o Google
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default login;
