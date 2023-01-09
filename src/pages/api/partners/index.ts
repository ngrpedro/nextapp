import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { connectToDataBase } from "../../../utils/mongodb";

export default async function handlerPartners(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        const { db } = await connectToDataBase();
        const data = await db.collection("partners").find().toArray();

        res.status(200).json(data);
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} not allowed`);
    }

    if (method === "GET") return;
  } catch (err) {
    res.status(500).json({ message: "Erro 500" });
  }
}
