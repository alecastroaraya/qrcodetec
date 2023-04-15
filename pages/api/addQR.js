import clientPromise from "../../lib/mongodb";
const QRCode = require('qrcode');

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { name, description, url } = req.body;

    const qrCode = await db.collection("qrcodes").insertOne({
      name,
      description,
      url,
    });

    res.json(qrCode);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};