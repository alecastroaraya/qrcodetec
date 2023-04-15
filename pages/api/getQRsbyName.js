import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { name } = req.query;

    const qrCodes = await db
      .collection("qrcodes")
      .find({ name: { $regex: new RegExp(name, "i") } })
      .toArray();

    res.json(qrCodes);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};