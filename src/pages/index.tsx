import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import { User } from "../utils/interfaces";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  users: User[];
};

const Home = ({ users }: Props) => {
  return (
    <>
      <h1>Hello my firts Next.js App</h1>

      <ul>
        {users?.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </>
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
