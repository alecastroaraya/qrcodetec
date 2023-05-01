import clientPromise from "../../lib/mongodb"; //Importamos la función clientPromisedesde el archivo mongodb.jsque está en la carpeta lib.

const updateVisitCount = async (req, res, next) => { //Definimos la función updateVisitCount, que será nuestro middleware. Esta función toma tres parámetros: req(el objeto de solicitud HTTP), res(el objeto de respuesta HTTP) y next(una función que se ejecutará para pasar la solicitud al siguiente middleware en la cadena).
  // Dentro de la función updateVisitCount, creamos una instancia del cliente de MongoDB y 
  // nos conectamos a la base de datos qrcodes.
  try {
    const client = await clientPromise;
    const db = client.db("qrcodes");
    
    // Obtener la provincia y el cantón del QR
    const [provincia, canton] = req.params.qrId.split("-");

    // Actualizar el registro de visitas correspondiente
    // Actualizamos el registro de visitas correspondiente a la provincia y el cantón del QR 
    // en la colección qr_visits. Para esto, utilizamos la función updateOnede MongoDB, que 
    // actualiza el registro especificado en el primer objeto con los valores del segundo objeto. 
    // En este caso, usamos el operador $incpara incrementar el campo visitsen 1. Si el registro 
    // no existe, lo creamos con el parámetro upserten true.
    await db.collection("qr_visits").updateOne(
      { provincia, canton },
      { $inc: { visits: 1 } },
      { upsert: true } // crear el registro si no existe
    );
    // En caso de que ocurra un error durante la actualización del registro de visitas, lo imprimimos
    // en la consola y pasó el error al siguiente middleware en la cadena.
    next();
  } catch (e) {
    console.error(e);
    next(e);
  }
};

// Exportamos la función updateVisitCountpara que pueda ser utilizada como middleware en nuestra aplicación.
export default updateVisitCount;
