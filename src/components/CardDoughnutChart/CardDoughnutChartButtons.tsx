import React from "react";
import { CardDougnutChartContext } from "./CardDoughnutChart";

export const CardDoughnutChartButtons = () => {
  const { loadDataButtonMain, loadDataButtonSecondary, enabled } =
    React.useContext(CardDougnutChartContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          loadDataButtonMain();
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          loadDataButtonSecondary();
        }}
      >
        Closed
      </button>
    </div>
  );
};
