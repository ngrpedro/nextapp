import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: [
      { id: 1, name: "Pedro" },
      { id: 2, name: "Paula" },
      { id: 3, name: "Maiara" },
      { id: 4, name: "Beatriz" },
    ],
  });
}
