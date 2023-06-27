import { useState, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const gps = navigator.geolocation;
    gps.getCurrentPosition(
      (position) => {
        console.log(position);
        setPosition(position);
      },
      (error) => {
        console.error(error);
      },
      geolocationOptions
    );
  }, []);

  useEffect(() => {
    if (position) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyB__4VTutW73EKMD93jWAO1zEEXyhbyrnA`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.results[0].address_components);
          console.log(data.results[0].address_components[2].long_name);
          console.log(data.results[0].address_components[1].long_name);
          let provincia = data.results[0].address_components[2].long_name;
          const canton = data.results[0].address_components[1].long_name;
          if (provincia.includes("Provincia de")) {
            provincia = provincia.replace("Provincia de ", "");
          }

          // Obtener el valor del parametro qrUrl de la URL
          const urlParams = new URLSearchParams(window.location.search);
          console.log("\n\n" + urlParams + " \n\n");
          
          const qrUrl = urlParams.get("qrUrl");
          console.log("\n\n" + qrUrl + " \n\n");

          fetch("http://localhost:3000/api/readQR", {
            method: "POST",
            body: JSON.stringify({
              provincia,
              canton,
              qrUrl
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          });
          // Enviar al usuario al sitio web de google
          window.location.href = qrUrl as string;

        })
        .catch((error) => {
          console.error("Error al intentar obtener los códigos QR:", error);
        });
    }
  }, [position]);

  return (
    <>
      <p style={{ color: "white" }}>{position?.coords?.latitude}</p>
    </>
  );
}