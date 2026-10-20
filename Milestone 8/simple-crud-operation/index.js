import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s9brtuf.mongodb.net/`,
);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectdClient = await connectToMongoDB();
const db = connectdClient.db("simple-crud-db")
const users = db.collection("users")

app.get("/", (req, res) => {
  res.send("Simple CRUD Operation Running....");
});

app.get("/users", async(req, res) =>{
    const cursor = users.find({})
    const allUsers = await cursor.toArray()
    res.send(allUsers);
})

app.listen(port, () => {
  console.log(`Simple CRUD Operation running port on: ${port}`);
});
