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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Home;
