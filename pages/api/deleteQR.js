import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

/**
 * Borra un código QR de la base de datos.
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON del código QR que se acaba de borrar
 */
export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { id } = req.query;

    const qrCode = await db.collection("qrcodes").deleteOne({
      _id: new ObjectId(id),
    });

    res.json(qrCode);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};