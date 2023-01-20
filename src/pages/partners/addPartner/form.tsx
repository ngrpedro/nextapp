import React from "react";
import Head from "next/head";
import Link from "next/link";
import PartnerForm from "../../../components/partners/partnerForm";
import Layout from "../../../components/layouts/layout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const form = () => {
  return (
    <Layout>
      <Head>
        <title>Novo Parceiro</title>
      </Head>
      <div className="text-sm font-semibold text-slate-700 breadcrumbs">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/partners">Parceiros</Link>
          </li>
          <li>Novo parceiro</li>
        </ul>
      </div>

      <div className="max-w-[63rem] m-auto mt-10 mb-16">
        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-700 to-sky-600">
            Seja
          </span>{" "}
          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-700 via-pink-700 to-red-700">
            nosso parceiro
          </span>
        </h1>

        <p className="text-center px-10 sm:px-36 sm:py-10 font-asap text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>

      <PartnerForm />

      <div className="divider my-36 flex-wrap md:flex-nowrap">
        <h1 className="text-5xl flex flex-wrap gap-3 font-extrabold items-center justify-center m-auto md:m-0">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-700 to-sky-600">
            E não
          </span>
          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-700 via-pink-700 to-red-700">
            se esqueça
          </span>
        </h1>
      </div>

      <section className="card bg-gradient-to-br from-blue-400 via-indigo-600 to-sky-600">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-200 md:mb-12 sm:text-xl ">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label className="hidden mb-2 text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <button className="py-3 px-5 w-full text-sm font-medium text-center text-gray-200 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                    Inscrever
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-100 newsletter-form-footer">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: session,
  };
};

export default form;
