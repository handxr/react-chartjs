import React from "react";
import { useCardDoughnutChart } from "../../hooks/useCardDoughnut";

export const CardDougnutChartContext = React.createContext<any>({
  data: {},
});

const { Provider } = CardDougnutChartContext;

export const CardDoughnutChart = ({ data, children }: any) => {
  const { loadDataButtonMain, loadDataButtonSecondary } =
    useCardDoughnutChart();
  return (
    <Provider value={{ data, loadDataButtonMain, loadDataButtonSecondary }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {children}
      </div>
    </Provider>
  );
};
