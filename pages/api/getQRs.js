import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");

    const qrCodes = await db.collection("qrcodes").find({}).toArray();

    res.json(qrCodes);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};