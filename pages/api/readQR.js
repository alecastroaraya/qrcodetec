import clientPromise from "../../lib/mongodb";


export default async (req, res) => {
  try {
    const provincia = req.body.provincia;
    const canton = req.body.canton;
    const qrUrl = req.body.qrUrl;
    const client = await clientPromise;
    const db = client.db("qrcodes");
    await db.collection("qr_visits").updateOne(
      { qrUrl, provincia, canton },
      { $inc: { visits: 1 } },
      { upsert: true } // crear el registro si no existe
    );
    res.json({url: qrUrl});
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};