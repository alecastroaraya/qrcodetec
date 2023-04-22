import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { id } = req.query;

    const qrCodes = await db.collection("qrcodes").deleteOne({
        _id: ObjectId(id),
      });

    res.json(qrCodes);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};