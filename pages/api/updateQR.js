import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

/**
 * Actualiza las estadísticas (ubicación y cantidad de visitas) de un código QR que se visitó
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON del código QR visitado
 */
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