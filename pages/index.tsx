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

      <div className="container-md position-absolute top-50">
        <h1>Generador de códigos QR</h1>
      </div>

      <div className="container-lg position-relative">

        <div className="card">

          <div className="row">
            <div className="col-md">
            a
            <hr className="hr" />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              One of three columns
            </div>

            <div className="col-md">
              One of three columns
            </div>
            
            <div className="col-md">
              One of three columns
            </div>
          </div>

        </div>

      </div>

      </main>
    </>
  )
}
