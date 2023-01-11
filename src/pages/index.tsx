import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import { User } from "../utils/interfaces";
import pride1 from "../public/heroimage1.png";
import pride2 from "../public/heroimage2.jpg";
import pride from "../public/love.gif";
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
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:-mt-10">
          <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:justify-start gap-3 md:gap-5 mt-8 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-light">Seja acolhide</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Por pessoas que estão prontas para nos receber!
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              corporis saepe, aut similique unde accusamus.
            </p>            
            <Link href="/partners" className="btn btn-wide normal-case text-lg font-normal bg-gradient-to-r from-red-500
            to-blue-400 border-none hover:opacity-80">Conheça nossos parceiro</Link>
          </div>

          <div className="flex items-center justify-center my-8">
            {/*  <Image src={pride} alt="pride" className="" /> */}
            <Image src={pride} width="500" height="500" alt="image" />
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
