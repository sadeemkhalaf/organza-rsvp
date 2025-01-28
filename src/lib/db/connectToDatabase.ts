import { MongoClient, Db } from 'mongodb';

interface DatabaseConnection {
  client: MongoClient;
  db: Db;
}

let cachedConnection: DatabaseConnection | null = null;

export async function connectToDatabase(): Promise<DatabaseConnection> {
  if (cachedConnection) {
    // Use cached connection if available
    return cachedConnection;
  }

  try {
    // MongoDB connection string from your environment variables
    const MONGODB_URI = process.env.MONGODB_URI as string;
    const MONGODB_DB = process.env.MONGODB_DB as string;

    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable');
    }

    if (!MONGODB_DB) {
      throw new Error('Please define the MONGODB_DB environment variable');
    }

    // Create a new MongoClient instance
    const client = new MongoClient(MONGODB_URI);

    // Connect to the database
    await client.connect();

    const db = client.db(MONGODB_DB);

    // Cache the connection
    cachedConnection = { client, db };

    return cachedConnection;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}
