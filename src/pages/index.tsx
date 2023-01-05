import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface User {
  _id: number;
  name: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

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
}
