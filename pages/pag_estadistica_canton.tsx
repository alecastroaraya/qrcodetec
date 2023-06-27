import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import ChartComponent from '../components/CantonesChartComponent';
import { Item } from "semantic-ui-react";
import { elements } from "chart.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [visitasPorCantonF, setVisitasPorCantonF] = useState([]);
  const baseUrl = window.location.origin;
  const apiUrl =  baseUrl + "/api/getQRCantones";
  let parametro1 = '';
 



  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const qrUrlParam = urlParams.get("qrUrl");
    const parametro1FromUrl = urlParams.get("parametro1");
    if (parametro1FromUrl) {
      parametro1 = parametro1FromUrl;
    }
    console.log("parametro1:", parametro1);
    const dynamicApiUrl = `${apiUrl}?qrUrl=${qrUrlParam}`;


    
       fetch(dynamicApiUrl)
      .then((response) => response.json())
      .then((data) =>{ setVisitasPorCantonF(data.filter((item : any)=> item.provincia === parametro1))
        console.log(data.find((item : any)=> item.provincia === parametro1));
      
      })
      .catch((error) => console.log(error));

    
       
        
  }, []);


  const getVisitasPorCanton =() => {
   const visitasPorCantonFiltrado = visitasPorCantonF.find((item : any)=> item.provincia === parametro1);
   console.log(visitasPorCantonFiltrado);
  }
 


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
        <a className="header item" href="/"><h1>Instituto de Educación Integral</h1></a>
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
              <h2>Estadísticas por cantón</h2>
            </div>
          </center>
        </div>

        {/* Estas filas contienen la información respectiva de cada página, en este caso muestra el gráfico del código QR respectivo */}
        <div className="ui vertically divided bottom aligned grid">
          <div className="sixteen column row">
            <div className="two wide column">

            </div>

            <div className="one wide column">

            </div>


            <div className="ten wide column">
              <center><h1>Gráfico de Cantones por Visitas</h1></center>
              <ChartComponent data={visitasPorCantonF} />
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
}
