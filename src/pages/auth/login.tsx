import React, { FormEvent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";

const login = () => {

  const onSubmit = (e: FormEvent) => {
  /*   
    e.preventDefault();
    signIn("credentials");
    */
};

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="h-screen">
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
          <div className="container py-12 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="xl:w-10/12">
                <div className="block bg-white shadow-lg rounded-lg">
                  <div className="">
                    <div className="max-w-[30rem] m-auto">
                      <div className="md:p-12 md:mx-6">
                        <div className="text-center">
                          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 mb-10">
                            Se conecte com a gente
                          </h1>
                        </div>
                        <form onSubmit={onSubmit}>
                          <div className="mb-4">
                            <input
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Username"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Password"
                            />
                          </div>
                          <div className="text-center pt-1 mb-12 pb-1">
                            <button
                              className="btn w-full normal-case text-lg font-normal bg-gradient-to-r from-red-500
                          to-blue-400 border-none hover:opacity-80"
                              type="button"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Log in
                            </button>
                            <a className="text-gray-500" href="#!">
                              Forgot password?
                            </a>
                          </div>
                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Don't have an account?</p>
                            <button
                              type="submit"
                              className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
