import clientPromise from "../../lib/mongodb";

/**
 * Obtiene las provincias donde se ha visitado un código QR específico de la base de datos
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON con las provincias del código QR
 */
export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { qrUrl } = req.query;

    const qrCodes = await db.collection("qr_visits").find({ qrUrl: qrUrl }, { provincia: 1, canton: 0, visits: 1, _id: 0 }).toArray();

    res.json(qrCodes);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};