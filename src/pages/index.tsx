import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import pride from "../public/love.gif";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  if (session) {
    const firstName = session.user?.name?.split(" ");
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <main>
          {session && (
            <h1 className="text-sm font-semibold text-slate-700">
              Bem vindo, {session?.user?.name}
            </h1>
          )}
          <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:-mt-10">
            <div
              className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start 
                          lg:justify-start gap-5 mt-8
                          max-w-[717px] mx-auto"
            >
              <h3 className="text-lg tracking-tight font-extrabold text-gray-900">
                Seja acolhide
              </h3>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl">
                Por pessoas que estão prontas para nos receber!
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                corporis saepe, aut similique unde accusamus.
              </p>
              <Link
                href="/partners"
                className="btn btn-wide normal-case text-lg font-normal bg-gradient-to-r from-red-500
            to-blue-400 border-none hover:opacity-80"
              >
                Conheça nossos parceiro
              </Link>
            </div>

            <div className="flex items-center justify-center my-8">
              {/*  <Image src={pride} alt="pride" className="" /> */}
              <Image src={pride} width="500" height="500" alt="image" />
            </div>
          </section>

          <section className="my-10">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-700 sm:text-7xl !leading-[1.2] text-center">
              Magna fugiat elit proident{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                reprehenderit Lorem
              </span>
              . Ea ex qui do aliqua.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                do velit magna do
              </span>{" "}
              Sint cillum irure eiusmod aliqua
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                {" "}
                duis aliquip.
              </span>
            </h1>
          </section>

          <section className="card bg-gradient-to-br from-blue-400 via-indigo-600 to-sky-600 mt-24">
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
        </main>
      </Layout>
    </>
  );
};
export default Home;
