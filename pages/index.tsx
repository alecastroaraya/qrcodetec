import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "@/components/Layout";
const QRCode = require("qrcode");

const inter = Inter({ subsets: ["latin"] });

type Props = {
  qrCodes: [QRCode];
};

type QRCode = {
  _id: string;
  name: string;
  description: string;
  url: string;
};

export async function getServerSideProps() {
  try {
    let response = await fetch("http://127.0.0.1:3000/api/getQRs");
    let qrCodes = await response.json();

    return {
      props: { qrCodes: JSON.parse(JSON.stringify(qrCodes)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default function Home(props: Props) {
  const [qrCodes, setQRCodes] = useState<[QRCode]>(props.qrCodes);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    fetch(`/api/getQRsbyName?name=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setQRCodes(data);
      })
      .catch((error) => {
        console.error("Error al intentar obtener los códigos QR:", error);
      });
  };

  const handleDeleteQR = async (QR_Id: string) => {
    try {
      const confirmed = window.confirm("Seguro que quiere borrar este código QR?");
      if (!confirmed) {
        return;
      }
      
      let response = await fetch(`/api/deleteQR?id=${QR_Id}`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      window.location.reload();
    } catch (error) {
      console.log("Un error ocurrió al intentar borrar el código QR ", error);
    }
  };

  function redirectEditPage(qrCodeId: any) {
    window.location.href = "/editar?id=" + qrCodeId;
  }

  function redirectProvinceGraphPage(qrUrl: any) {
    window.location.href = "/grafico_provincias?qrUrl=" + qrUrl;
  }

  function redirectCantonGraphPage(qrUrl: any) {
    window.location.href = "/pag_estadistica_canton?qrUrl=" + qrUrl;
  }

  async function generateQRCodeDataURL(
    url: string,
    fileName: string
  ): Promise<string> {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(url);
      console.log("Código QR generado como DataURL");
      console.log(qrCodeDataURL);

      const anchor = document.createElement("a");
      anchor.href = qrCodeDataURL;
      anchor.download = fileName + ".png";
      anchor.click();

      return qrCodeDataURL;
    } catch (err) {
      console.error(err);
      throw new Error("No se pudo generar el DataURL del código QR");
    }
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
        <a className="header item" href="/">
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

      <Layout>
        <div className="ui container border-1">
          <div className="ui container fluid">
            <center>
              <div className="ui inverted segment">
                <h2>Nombre de la página</h2>
              </div>
            </center>
          </div>

          <div className="ui container border-1">
            <div className="ui vertically divided bottom aligned grid">
              <div className="four column row">
                <div className="one wide column">
                  {/* Botón búsqueda de código QR */}
                </div>
                <div className="one wide column">
                  <button className="ui icon button" onClick={handleSearch}>
                    <img className="ui mini image" src="/search-icon.png" />
                  </button>
                </div>

                {/* Campo de búsqueda de código QR */}
                <div className="eleven wide column go-bottom">
                  <div className="ui fluid large icon input">
                    <input
                      type="text"
                      placeholder="Buscar nombre de la pagina"
                      value={searchValue}
                      onChange={(event) => setSearchValue(event.target.value)}
                    />
                  </div>
                </div>

                {/* Botón para registrar un código QR */}
                <div className="one wide column">
                  <button className="ui small button">
                    <a href="/RegistrarEditar">
                      <h3>Registrar</h3>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {qrCodes.length > 0 ? (
            <div className="qrcodes-list">
              {qrCodes.map((qrCode, index) => {
                return (
                  <div className="ui container border-1">
                    {/* Estas filas contienen la información respectiva de cada página, en este caso por ser la homepage contienen la información de los códigos QR */}
                    <div className="ui vertically divided bottom aligned grid">
                      {/* En esta sección se comienza a mostrar todos los códigos QR y sus botones respectivos */}
                      <div key={index} className="four column row">
                        <div className="one wide column"></div>

                        {/* Aquí va el nombre del código QR */}
                        <div className="seven wide column">
                          <div className="ui middle aligned mini message">
                            <div className="middle aligned header">
                              <h1>
                                {qrCode.name}
                              </h1>
                            </div>
                          </div>
                        </div>

                        {/* Botones de la información del código QR*/}

                        {/* Botón de actualizar código QR */}
                        <div className="two wide column">
                          <button
                            className="ui tiny icon button"
                            onClick={() => redirectEditPage(qrCode._id)}
                          >
                            <img
                              className="ui tiny image"
                              src="/pencil-icon.png"
                            />
                          </button>
                        </div>


                        {/* Botón de descargar código QR */}
                        <div className="two wide column">
                          <button
                            className="ui tiny icon button"
                            onClick={() =>
                              generateQRCodeDataURL(qrCode.url, qrCode.name)
                            }
                          >
                            <img
                              className="ui tiny image"
                              src="/download-icon.png"
                            />
                          </button>
                        </div>

                        {/* Botón de ver estadísticas del código QR */}
                        <div className="two wide column">
                          <div className="ui tiny fluid menu">
                            <div className="ui tiny simple fluid dropdown item">
                              <img
                                className="ui tiny fluid image"
                                src="/stats-icon.png"
                              />
                              <div className="menu">
                                <div className="item">
                                <a href={`/grafico_provincias?qrUrl=${qrCode.url.split("=")[1]}`}>
                                    <h2>Por provincias</h2>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Botón de eliminar código QR */}
                        <div className="two wide column">
                          <button
                            className="ui tiny icon button"
                            onClick={() => handleDeleteQR(qrCode._id as string)}
                          >
                            <img
                              className="ui tiny image"
                              src="/trash-icon.png"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1 className="qrcodes-body-heading">
              <center>No se encontraron códigos QR.</center>
            </h1>
          )}
        </div>
      </Layout>
    </>
  );
}
