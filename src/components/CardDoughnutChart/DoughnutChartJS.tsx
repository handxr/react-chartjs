import { ArcElement, Chart, Legend, Title, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { titleCenter } from "./plugins/title-center";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CardDougnutChartContext } from "./CardDoughnutChart";
import React from "react";

Chart.register({
  ArcElement,
  Legend,
  Title,
  Tooltip,
  ChartDataLabels,
});

export const DoughnutChartJS = () => {
  const { data } = React.useContext(CardDougnutChartContext);

  const options = {
    responsive: true,
    width: 200,
    height: 200,
    cutout: "60%",

    plugins: {
      datalabels: {
        color: "white",
        formatter: (value: any, ctx: any) => {
          return value + "%";
        },
      },
      title: {
        display: false,
        text: data.text || "",
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          boxHeight: 8,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const plugins = [titleCenter];

  return (
    <>
      {/* @ts-ignore */}
      <Doughnut data={data} options={options} plugins={plugins} />
    </>
  );
};
