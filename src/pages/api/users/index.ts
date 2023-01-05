import { NextApiRequest, NextApiResponse } from "next";
import { deflate } from "zlib";

export default function handlerUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        res.status(200).json({
          data: [
            { id: 1, name: "Pedro" },
            { id: 2, name: "Paula" },
            { id: 3, name: "Maiara" },
            { id: 4, name: "Beatriz" },
          ],
        });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} not allowed`);
    }

    if (method === "GET") {
      return;
    } else {
    }
  } catch (err) {
    res.status(500).json({ message: "Erro 500" });
  }
}
