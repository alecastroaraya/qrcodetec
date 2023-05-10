import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { qrUrl } = req.query;

    const qrCodes = await db.collection("qr_visits").find({ qrUrl: qrUrl }, { provincia: 0, canton: 1, visits: 1, _id: 0 }).toArray();

    res.json(qrCodes);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};