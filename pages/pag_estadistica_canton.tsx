import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function pag_estadistica_canton() {
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

        {/* Título del encabezado de la página */}
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
            </div>


        </>

        

    )
}