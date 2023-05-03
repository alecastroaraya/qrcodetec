import clientPromise from "../../lib/mongodb";

/*
req es un objeto que contiene información sobre la solicitud HTTP 
  que disparó el evento de la función.

res es un objeto que contiene información sobre la respuesta HTTP 
  que se enviará cuando finalice la función.
*/
export default async (req, res) => {
  try {
    const client = await clientPromise;
    // Nos dice cual es la base de datos de mongo que usaremos, en este caso "qrcodes"
    const db = client.db("qrcodes");
    /////////////////////////////////////////////////////////////////////////
    
      // AQUI, en esta parte podemos crear el url nuevo para que 
      // envie al usuario a nuestro servidor y no a la pagina de qrcode

    // Obtenemos los valores que ingreso el usuario en el formulario

    let { name, description, urlFinal } = req.body;
    const url = urlFinal;
    console.log(urlFinal);
    console.log(url);
    // Le hacemos INSERT del QR nuevo a la base de datos
    const qrCode = await db.collection("qrcodes").insertOne({
      name,
      description,
      url,
    });
    // Regresamos al frontend el QR que acabamos de crear
    res.json(qrCode);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};