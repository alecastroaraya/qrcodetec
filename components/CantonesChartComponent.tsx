import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, DoughnutController, registerables } from 'chart.js';

/**
 * Componente de gráficos para cantones de un código QR
 *
 * @return El componente de gráfico de cantones
 */

Chart.register(...registerables);

interface CantonData {
  canton: string;
  visits: number;
}


interface ChartComponentProps {
  data: CantonData[];

}



const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  
  React.useEffect(() => {
    Chart.register(DoughnutController);
  }, []);

  const chartData = { 
  
    labels: data.map((item) => item.canton),
    datasets: [
      {
        data: data.map((item) => item.visits),
        backgroundColor: generateBackgroundColors(data.length),
      },
    ],
  };

  const totalSum = data.reduce((sum, item) => sum + item.visits, 0);

  const handleReturnClick = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const qrUrlParam = urlParams.get("qrUrl");
    const baseUrl = window.location.origin;
    window.location.href = baseUrl + "/grafico_provincias?qrUrl=" + qrUrlParam; // Navigate to the homepage
    
  };

  return (
    <div>
      <center> <Doughnut data={chartData} /> </center>
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

export default ChartComponent;

function generateBackgroundColors(count: number): string[] {
  const colors: string[] = [];

  for (let i = 0; i < count; i++) {
    const hue = (i * 137.5) % 360;
    const color = `hsl(${hue}, 70%, 50%)`;

    colors.push(color);
  }

  return colors;
}