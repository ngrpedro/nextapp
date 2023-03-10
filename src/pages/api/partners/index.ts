import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { connectToDataBase } from "../../../utils/mongodb";

export default async function handlerPartners(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method, body } = req;
    const { db } = await connectToDataBase();

    switch (method) {
      case "GET":
        const data = await db.collection("partners").find().toArray();
        res.status(200).json(data);
        break;
      case "POST":
        const dataToPost = await db.collection("partners").insertOne(req.body);
        res.status(200).json(dataToPost);
        break;
      default:
        res.status(405).end(`Method ${method} not allowed`);
    }

    if (method === "GET") return;
  } catch (err) {
    res.status(500).json({ message: "Erro 500" });
  }
}
