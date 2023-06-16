import type { NextApiRequest, NextApiResponse } from "next";

import { Comment } from "../../../../types";

import { METHODS } from "../../../../constants";

type Data = {
  message?: string;
  comments?: Comment[];
};

const COMMENTS = [
  {
    id: 0,
    text: "Hi, what a great event!!",
    author: "Joe",
    mail: "joe@gmail.com",
  },
  {
    id: 1,
    text: "I love this event!!",
    author: "Mary",
    mail: "mary@gmail.com",
  },
  {
    id: 2,
    text: "I hope I can join!!",
    author: "SK8ter",
    mail: "skater89@gmail.com",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const eventId = req.query.eventId;

  if (req.method === METHODS.POST) {
    const { email, name, comment } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    if (!name) {
      res.status(422).json({ message: "Invalid name." });
      return;
    }

    if (!comment) {
      res.status(422).json({ message: "Invalid comment message." });
      return;
    }

    res.status(200).json({ message: "Comment has been saved!!" });
  }

  if (req.method === METHODS.GET) {
    res.status(200).json({ comments: COMMENTS });
  }
}
