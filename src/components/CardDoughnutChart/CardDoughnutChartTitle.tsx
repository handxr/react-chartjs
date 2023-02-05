import React from "react";
import { CardDougnutChartContext } from "./CardDoughnutChart";

export const CardDoughnutChartTitle = ({ className, ...restOfProps }: any) => {
  const {
    data: { title },
  } = React.useContext(CardDougnutChartContext);
  return (
    <h1 className={className} {...restOfProps}>
      {title}
    </h1>
  );
};
