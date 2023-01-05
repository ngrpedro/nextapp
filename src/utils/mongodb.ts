import { MongoClient, Db } from "mongodb";

let uri =
  "mongodb+srv://nextapp:nextapp@cluster0.vabcweo.mongodb.net/endpoint?retryWrites=true&w=majority";
let dbName = "endpoint";

let cachedClient: MongoClient;
let cachedDb: Db;

if (!uri) {
  throw new Error("No mongo_uri");
}

if (!dbName) {
  throw new Error("No mongo_db");
}

export async function connectToDataBase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);
  const db = await client.db(dbName);

  cachedClient: client;
  cachedDb: db;

  return { client, db };
}
