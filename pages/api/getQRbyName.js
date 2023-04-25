import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { name } = req.query;

    const qrCode = await db.collection("qrcodes").findOne({
      name: name,
    });

    res.json(qrCode);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};