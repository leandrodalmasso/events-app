import type { NextApiRequest, NextApiResponse } from "next";

import {
  connectToDb,
  insertComment,
  getComments,
  setRes,
} from "../../../../dbHelpers";

import { ResData } from "../../../../types";

import { METHODS } from "../../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  const eventId = req.query.eventId as string;
  const { email, author, comment } = req.body;

  let client;
  try {
    client = await connectToDb();
  } catch (error) {
    setRes(res, 500, "Connection to db failed.");
    return;
  }

  if (req.method === METHODS.POST) {
    if (!email || !email.includes("@")) {
      setRes(res, 422, "Invalid email address.");
      return;
    }

    if (!author) {
      setRes(res, 422, "Invalid author.");
      return;
    }

    if (!comment) {
      setRes(res, 422, "Invalid comment message.");
      return;
    }

    try {
      await insertComment(client, { email, author, comment, eventId });
      setRes(res, 200, "Comment has been saved!!");
    } catch (error) {
      setRes(res, 503, "DB insertion failed.");
      return;
    }
  }

  if (req.method === METHODS.GET) {
    try {
      const comments = await getComments(client, { eventId });
      res.status(200).json({ comments });
    } catch (error) {
      setRes(res, 503, "Couldn't get comments from the DB.");
      return;
    }
  }
}
