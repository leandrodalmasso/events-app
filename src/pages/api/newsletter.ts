// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { METHODS } from "../../../constants";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === METHODS.POST) {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const uri =
      "mongodb+srv://leandrodalmasso:Zamba34345@cluster0.tlgtukr.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    const dbName = "newsletter";
    const collectionName = "emails";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    await collection.insertOne({ email });
    client.close();

    res.status(200).json({ message: "Signed up!!" });
  }
}
