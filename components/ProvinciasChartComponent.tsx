import { Doughnut } from 'react-chartjs-2';
import React, { useState } from 'react';
import { Chart, DoughnutController, registerables } from 'chart.js';


/**
 * Componente de gráficos para provincias de un código QR
 *
 * @return El componente de gráfico de provincias
 */
Chart.register(...registerables);

interface ProvinciaData {
  provincia: string;
  visits: number;
}




interface ChartComponentProps {
  data: ProvinciaData[];
  
}


const ChartComponent1: React.FC<ChartComponentProps> = ({ data }) => {

  

  React.useEffect(() => {
    Chart.register(DoughnutController);
  }, []);

  const aggregateProvincias = (): Record<string, number> => {
    const aggregatedData: Record<string, number> = {};

    data.forEach((item) => {
      const provincia = item.provincia;
      const visits = item.visits;

      if (aggregatedData.hasOwnProperty(provincia)) {
        aggregatedData[provincia] += visits;
      } else {
        aggregatedData[provincia] = visits;
      }
    });

    return aggregatedData;
  };

  const aggregatedData = aggregateProvincias();

  const chartData = {
    labels: Object.keys(aggregatedData),
    datasets: [
      {
        data: Object.values(aggregatedData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  const enviarDatos = (sele: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const qrUrlParam = urlParams.get("qrUrl");
    const nuevaURL = `/pag_estadistica_canton?qrUrl=${qrUrlParam}&parametro1=${sele} `;
    window.location.href = nuevaURL;
  };


  const handleClick  = (event: any, elements: any[]) => {
    if (elements.length > 0) {
      const clickedElement = elements[0];
      const index = clickedElement.index;
      const label = chartData.labels[index];
      enviarDatos(label);
    }
  };



  const totalSum = Object.values(aggregatedData).reduce((sum, visits) => sum + visits, 0);

  const handleReturnClick = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <center> <Doughnut data={chartData} options={{ onClick: handleClick,}} /> </center>
      <br />
      <br />
      <center> <h2>Número total de visitas: {totalSum}</h2> </center>
      <center>
        <button className="ui medium button chart" onClick={handleReturnClick}>
          <h3>Regresar</h3>
        </button>
      </center>
    </div>
  );
};

export default ChartComponent1;