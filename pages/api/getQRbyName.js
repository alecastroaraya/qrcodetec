import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

/**
 * Obtiene un códigos QR específico de la base de datos por medio de un nombre específico
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON del código QR específico
 */
export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    const { name } = req.query;

    const qrCode = await db.collection("qrcodes").findOne({
      name: name,
    });

    res.json(qrCode);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};