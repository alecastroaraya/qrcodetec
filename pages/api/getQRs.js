import clientPromise from "../../lib/mongodb";

/**
 * Obtiene todos los códigos QR de la base de datos
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON con todos los códigos QR
 */
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