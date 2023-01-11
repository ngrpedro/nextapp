import { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../../../utils/mongodb";

type Props = {
  _id: string;
  name: string;
  reception: string;
  city: string;
  isInstitute: boolean;
};

export default async function hadlePartnerByID(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { id },
      method,
    } = req;

    switch (method) {
      case "GET":
        const { db } = await connectToDataBase();
        const data = await db.collection("partners").find().toArray();

        const filtered = data.filter((partner): Props => partner._id === id);

        res.status(200).json(filtered);
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
