import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import { User } from "../utils/interfaces";
import pride1 from "../public/heroimage1.png";
import pride2 from "../public/heroimage2.jpg";
import pride from "../public/mainhero.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  users: User[];
};

const Home = ({ users }: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="max-w-[30rem] flex flex-col items-start justify-start gap-5">
            <h3 className="text-4xl font-light">Seja acolhide</h3>
            <h1 className="text-4xl font-bold text-gray-900">
              Por pessoas que estão prontas para nos receber!
            </h1>
            <p className="font-medium text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              corporis saepe, aut similique unde accusamus.
            </p>
            <button
              className="py-4 px-10 mt-5 text-lg text-white rounded-full font-semibold
            bg-gradient-to-r from-purple-900 to-pink-400"
            >
              Veja nossos parceiros
            </button>
          </div>

          <div className="flex items-center justify-center my-8">
            <Image src={pride} alt="pride" className="" />
          </div>
        </section>

        <section className="my-10">
          <h1 className="text-6xl leading-[5rem] text-center text-gray-700 font-bold">
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
      </main>
    </>
  );
};
export default Home;
