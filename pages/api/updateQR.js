import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { id } = req.query;
    const { name, description, url } = req.body;

    const qrCode = await db.collection("qrcodes").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          name: name,
          description: description,
          url: url,
        },
      }
    );

    res.json(qrCode);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};