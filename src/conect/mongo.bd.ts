/*
import { MongoClient, Db } from "mongodb";

const uri = "mongodb+srv://demovagoec_db_user:wSjX8fwVWGtp0j2e@node-school.2kons2g.mongodb.net/?retryWrites=true&w=majority";
const dbName = "seguridades";

let db: Db;

export async function connectDB(): Promise<Db> {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Conectado a MongoDB");

    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1);
  }
}

 
export async function getUsers() {
  const db = await connectDB();

  const usersCollection = db.collection("users");

  const users = await usersCollection.find({}).toArray();

  console.log(users);
}

getUsers();


*/