// mongodb.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToDatabase() {
  await client.connect();
  return client.db('Raydium'); // Specify the database name here
}
