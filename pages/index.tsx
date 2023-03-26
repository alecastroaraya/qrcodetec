import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
        <img className= "ui tiny image" src="/iei_logo.jpg"/>
      </div>
      <a className="header item"><h1>Instituto de Educación Integral</h1></a>

</div>

{/* Linebreaks para formato de la página, ignorar */}
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

{/* Título del encabezado de la página */}
<div className="ui container">
  <center><h1 className="ui header header-text"><u>Generador de códigos</u></h1></center>
</div>

{/* Inicio del cuadro con la información principal de la página */}

{/* Fila con el nombre de la sección de la página, en este caso dice nombre de la página porque es la homepage */}
<br/>
<div className="ui container border-1">
  <div className="ui container fluid">
    <center>
    <div className="ui inverted segment">
    <h2>Nombre de la página</h2>
    </div>
    </center>
  </div>

    {/* Estas filas contienen la información respectiva de cada página, en este caso por ser la homepage contienen la información de los códigos QR */}
  <div className="ui vertically divided bottom aligned grid">
  <div className="four column row">
    <div className="one wide column">

    {/* Botón búsqueda de código QR */}
    </div>
    <div className="one wide column">
      <button className="ui icon button">
      <img className= "ui mini image" src="/search-icon.png"/>
      </button>
    </div>

    {/* Campo de búsqueda de código QR */}
    <div className="eleven wide column go-bottom">
      <div className="ui fluid large icon input">
      <input type="text" placeholder="Buscar nombre de la pagina"/>
      </div>
    </div>

    {/* Botón para registrar un código QR */}
    <div className="one wide column">
      <button className="ui small button">
      <h3>Registrar</h3>
      </button>
    </div>
  </div>

    {/* En esta sección se comienza a mostrar todos los códigos QR y sus botones respectivos */}
  <div className="four column row">
    <div className="one wide column">

    </div>

    {/* Aquí va el nombre del código QR */}
    <div className="nine wide column">
      <div className="ui middle aligned mini message">
        <div className="middle aligned header">
          <h1>Instituto de Educación Integral</h1>
        </div>
      </div>
    </div>

    {/* Botones de la información del código QR*/}

    {/* Botón de descargar código QR */}
    <div className="two wide column">
      <button className="ui tiny icon button">
      <img className= "ui tiny image" src="/download-icon.png"/>
      </button>
    </div>

    {/* Botón de ver estadísticas del código QR */}
    <div className="two wide column">
      <button className="ui tiny icon button">
      <img className= "ui tiny image" src="/stats-icon.png"/>
      </button>
    </div>

    {/* Botón de eliminar código QR */}
    <div className="two wide column">
      <button className="ui tiny icon button">
      <img className= "ui tiny image" src="/trash-icon.png"/>
      </button>
    </div>

  </div>

  {/* Aquí se repite lo mismo porque esto es solo un demo, en la versión real debería ser dinámico y no hardcoded */}
  <div className="four column row">
    <div className="one wide column">

    </div>

    <div className="nine wide column">
      <div className="ui middle aligned mini message">
        <div className="middle aligned header">
          <h1>Nubesinos</h1>
        </div>
      </div>
    </div>

    <div className="two wide column">
      <button className="ui tiny icon button">
      <img className= "ui tiny image" src="/download-icon.png"/>
      </button>
    </div>

    <div className="two wide column">
      <button className="ui tiny icon button">
      <img className= "ui tiny image" src="/stats-icon.png"/>
      </button>
    </div>

    <div className="two wide column">
      <button className="ui tiny icon button">
      <img className= "ui tiny image" src="/trash-icon.png"/>
      </button>
    </div>

  </div>

</div>

</div>
    </>
  )
}
