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

      <main className={styles.main}>

      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light border-top border-dark border-bottom border-dark border-left border-dark border-right border-dark">
            <a href="/" className="navbar-brand">
              <Image src="/iei_logo.jpg" width={100} height={100} alt="" className="d-inline-block align-middle mr-2"/>
              <a className="navbar-brand" href="/"><b>       Instituto de Educación Integral</b></a>
            </a>
        </nav>
      </div>

      <div className="container-lg position-absolute top-25">
        <br/>
        <br/>
        <br/>
        <p className="text-center text-info"><h1><u>Generador de códigos QR</u></h1></p>
        <div className="card">

          <div className="row-sm bg-info">

            <div className="container-md">
              <div className="col-md d-flex p-2 justify-content-center">
                  <p className="text-center text-white"><h3>Nombre de la página</h3></p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md">

              <div className="d-flex p-2 justify-content-start">
                <button className="btn">
                  <img src="/search-icon.png" width="30" />
                </button>
              </div>
            </div>

            <div className="col-md">
              
            <form method="GET" className="d-flex p-2 justify-content-between">
              <input id="search" className="form-control me-2" type="search" placeholder="Buscar página" aria-label="Search" />
            </form>

            </div>
            
            <div className="col-md">

            <div className="d-flex p-2 justify-content-end">
              <button className="btn btn-info text-white">Registrar</button>
            </div>

            </div>
          </div>

          <hr className="hr" />
          <div className="row">
            <div className="col-md">

              <div className="d-flex p-2 justify-content-start">
                <p className="text-center text-black"><h3>Instituto de Educación Integral</h3></p>
              </div>
            </div>
            
            <div className="col-md">

            <div className="d-flex p-2 justify-content-end">
              <button className="btn">
                <img src="/search-icon.png" width="30" />
              </button>

              <button className="btn">
                <img src="/stats-icon.png" width="30" />
              </button>

              <button className="btn">
                <img src="/trash-icon.png" width="30" />
              </button>
            </div>

            </div>
            

          </div>
          
          <hr className="hr" />
          <div className="row">
            <div className="col-md">

              <div className="d-flex p-2 justify-content-start">
                <p className="text-center text-black"><h3>Nubesinos</h3></p>
              </div>
            </div>
            
            <div className="col-md">

            <div className="d-flex p-2 justify-content-end">
              <button className="btn">
                <img src="/search-icon.png" width="30" />
              </button>

              <button className="btn">
                <img src="/stats-icon.png" width="30" />
              </button>

              <button className="btn">
                <img src="/trash-icon.png" width="30" />
              </button>
            </div>

            </div>
            

          </div>

        </div>

      </div>

      </main>
    </>
  )
}
