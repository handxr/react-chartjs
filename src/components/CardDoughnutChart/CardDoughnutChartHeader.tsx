import React from "react";
import { CardDougnutChartContext } from "./CardDoughnutChart";

export const CardDoughnutChartHeader = () => {
  const { data } = React.useContext(CardDougnutChartContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #E5E5E5",
        paddingBottom: "1rem",
      }}
    >
      <div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>
      <div>
        <button>Action</button>
      </div>
    </div>
  );
};
