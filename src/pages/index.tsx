import { Inter } from "@next/font/google";
import Link from "next/link";
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
      <Link href="/partners">Ver nossos parceiros</Link>
    </div>
  );
};
export default Home;
