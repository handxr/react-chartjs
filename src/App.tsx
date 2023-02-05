import { CardDoughnutChart, DoughnutChartJS } from "./components";
import { CardDoughnutChartButtons } from "./components/CardDoughnutChart/CardDoughnutChartButtons";
import { CardDoughnutChartHeader } from "./components/CardDoughnutChart/CardDoughnutChartHeader";
import { CardDoughnutChartTitle } from "./components/CardDoughnutChart/CardDoughnutChartTitle";

const data = {
  labels: ["AME", "Europe", "Apac"],
  text: "Regions",
  title: "Hotels by Regions",
  subtitle: "Total: 40",
  datasets: [
    {
      data: [20, 4, 16],
      backgroundColor: ["#7340BF", "#088891", "#C639A7"],
      hoverBackgroundColor: ["#7340BF", "#088891", "#C639A7"],
    },
  ],
};

const App = () => {
  return (
    <CardDoughnutChart data={data}>
      <CardDoughnutChartHeader />
      <CardDoughnutChartButtons />
      {/* <CardDoughnutChartTitle /> */}
      <DoughnutChartJS />
    </CardDoughnutChart>
  );
};

export default App;
