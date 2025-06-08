'server-only'

import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGODB_URI as string
const dbName = process.env.MONGODB_DB as string

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable')
}

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri)
  const db = client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
