import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Form } from 'semantic-ui-react'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Título del tab de la página */}
      <Head>
        <title>QRCodeTEC</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <div className="ui fixed borderless huge menu">
        {/* Barra navbar con el logo y el título de la institución (no alterar, usar en las otras páginas) */}
        <div className="item">
          <img className="ui tiny image" src="/iei_logo.jpg" />
        </div>
        <a className="header item">
          <h1>Instituto de Educación Integral</h1>
        </a>
      </div>

      {/* Linebreaks para formato de la página, ignorar */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Título del encabezado de la página */}
      <div className="ui container">
        <center>
          <h1 className="ui header header-text">
            <u>Generador de códigos</u>
          </h1>
        </center>
      </div>

      {/* Inicio del cuadro con la información principal de la página */}

      {/* Fila con el nombre de la sección de la página, en este caso dice nombre de la página porque es la homepage */}
      <br />
      <div className="ui container border-1">
        <div className="ui container fluid">
          <center>
            <div className="ui inverted segment">
              <h2>Registrar/Editar</h2>
            </div>
          </center>
        </div>

        {/* Estas filas contienen la información respectiva de cada página, en este caso muestra el gráfico del código QR respectivo */}
            <Form onSubmit={() => console.log("Submitted") }>
                
            <Form.Field inline>
              <label>Nombre:</label>
              <input
                placeholder="Nombre"
                name="nombre"
                style={{ marginBottom: '1rem', width: '50%' }}
                autoFocus
              />
            </Form.Field>
            <Form.Field inline>
              <label>Descripción:</label>
              <Form.TextArea
                placeholder="Ingrese la descripción"
                name="descripcion"
                style={{ width: '50%' }}
                autoFocus
              />
            </Form.Field>
            <Form.Field inline>
              <label>URL:</label>
              <input
                placeholder="Ingrese el URL"
                name="url"
                autoFocus
              />
            </Form.Field>


                <Button type="submit">Registrar</Button>
                <Button>Cancelar</Button>
            </Form>
      </div>
    </>
  );
}
