import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>QRCodeTEC</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
<div className="ui fixed borderless huge menu">
  
    
      <div className="item">
        <img className= "ui tiny image" src="/iei_logo.jpg"/>
      </div>
      <a className="header item"><h1>Instituto de Educación Integral</h1></a>

</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="ui container">
  <center><h1 className="ui header header-text"><u>Generador de códigos</u></h1></center>
</div>

<br/>
<div className="ui container border-1">
  <div className="ui container fluid">
    <center>
    <div className="ui inverted segment">
    <h2>Nombre de la página</h2>
    </div>
    </center>
  </div>

  <div className="ui vertically divided bottom aligned grid">
  <div className="four column row">
    <div className="one wide column">

    </div>
    <div className="one wide column">
      <button className="ui icon button">
      <img className= "ui mini image" src="/search-icon.png"/>
      </button>
    </div>

    <div className="eleven wide column go-bottom">
      <div className="ui fluid large icon input">
      <input type="text" placeholder="Buscar códigos QR"/>
      </div>
    </div>

    <div className="one wide column">
      <button className="ui medium button">
      <h3>Registrar</h3>
      </button>
    </div>
  </div>

  <div className="four column row">
    <div className="one wide column">

    </div>

    <div className="nine wide column">
      <div className="ui middle aligned mini message">
        <div className="middle aligned header">
          <h1>Instituto de Educación Integral</h1>
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
