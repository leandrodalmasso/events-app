// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { ResData } from "../../../types";

import { METHODS } from "../../../constants";
import { connectToDb, setRes, registerEmail } from "../../../dbHelpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  if (req.method === METHODS.POST) {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      setRes(res, 422, "Invalid email address.");
      return;
    }

    let client;
    try {
      client = await connectToDb();
    } catch (error) {
      setRes(res, 500, "Connection to db failed.");
      return;
    }

    await registerEmail(client, email);
    setRes(res, 200, "Signed up!!");
  }
}
