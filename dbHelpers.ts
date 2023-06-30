import type { NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { Comment, ResData } from "./types";

export async function connectToDb() {
  const uri = process.env.DB_URI || "";
  const client = MongoClient.connect(uri);
  return client;
}

function getCollection(client: MongoClient, collectionName: string) {
  const dbName = "events";
  const database = client.db(dbName);
  return database.collection(collectionName);
}

export async function insertComment(
  client: MongoClient,
  comment: Partial<Comment>
) {
  await client.connect();
  const collection = getCollection(client, "comments");
  await collection.insertOne(comment);
  client.close();
}

export async function getComments(
  client: MongoClient,
  filter: { [key: string]: string }
) {
  await client.connect();
  const collection = getCollection(client, "comments");
  const comments = await collection.find(filter).sort({ _id: -1 }).toArray();
  client.close();
  return comments as Comment[];
}

export function setRes(
  res: NextApiResponse<ResData>,
  code: number,
  message: string
) {
  res.status(code).json({ message });
}

export async function registerEmail(client: MongoClient, email: string) {
  await client.connect();
  const collection = getCollection(client, "newsletter");
  await collection.insertOne({ email });
  client.close();
}
