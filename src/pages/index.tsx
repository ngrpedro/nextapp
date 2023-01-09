import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { User } from "../utils/interfaces";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  users: User[];
};

const Home = ({ users }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[30rem] ">
      <h1 className="text-2xl font-semibold ">
        Bem vinde ao Ecosistema Plural
      </h1>
      <Link href="/partners">
        Ver nossos parceiros
      </Link>
    </div>
  );
};
export default Home;
