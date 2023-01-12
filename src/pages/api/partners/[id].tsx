import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../../../utils/mongodb";

export default async function hadlePartnerByID(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;
  try {
    switch (method) {
      case "GET":
        const { db } = await connectToDataBase();
        const data = await db
          .collection("partners")
          .findOne({ _id: new ObjectId(id as string) });

        if (!data) {
          res.status(404).json("Partner not found");
        }

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
