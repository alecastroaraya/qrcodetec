import Head from "next/head";
import { Form, TextArea, Button } from 'semantic-ui-react';
import Image from "next/image";
import { Inter } from "next/font/google";


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
        <br/>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', paddingRight: '20px' }}>
          <br/>
        
            <Form.Field style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '50px' }}>
              <label style={{ width: '80px' }}>Nombre:</label>
              <input
                placeholder="Ingrese el nombre"
                name="nombre"
                style={{ marginBottom: '1rem', width: '380px' }}
                autoFocus
              />
            
            </Form.Field>
            <Form.Field inline style={{ paddingLeft: '50px' }}>
            <label>Descripción</label>
            <TextArea
              placeholder="Ingrese la descripción"
              name="descripcion"
              style={{ marginBottom: '1rem', width: '380px'}}
            />
          </Form.Field>
          <Form.Field style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '50px' }}>
            <br/>
            <label style={{ width: '80px' }}>Dirección de URL</label>
            <input
              placeholder="Dirección de URL"
              name="Dirección de URL"
              style={{ marginBottom: '1rem', width: '380px' }}
              autoFocus
            />
          </Form.Field>
            <Button type="submit" style={{ marginLeft: '450px', backgroundColor: '#01899c', color: 'white' }}>Registrar</Button>
            <Button style={{ marginBottom: '20px', marginLeft: '10px', backgroundColor: '#01899c', color: 'white' }}><a href="/">Cancelar</a></Button>
          </div>
          <div style={{ flex: '1', maxWidth: '400px' }}>
            <img src="qr.jpg" width="250" height="250" />
            
          </div>
        </div>
        </Form>
      </div>
    </>
  );
}