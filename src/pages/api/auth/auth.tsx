import { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../../../utils/mongodb";
const jwt = require("jsonwebtoken");

export default async function handlerUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method, body } = req;
    const { db } = await connectToDataBase();

    switch (method) {
      case "GET":
        const data = await db.collection("users").findOne({ email: body.email });

        if (!data) {
          res.status(404).json("Partner not found");
        }

        let id = data?._id;
        let newId = id?.toString();

        const token = jwt.sign({ newId }, "mysecret", {
          expiresIn: 300, // expires in 5min
        });

        res.status(200).json({ data, token });

        break;
      case "POST":
        const dataToPost = await db.collection("users").insertOne(req.body);
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
