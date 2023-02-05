import React from "react";

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

export const useCardDoughnutChart = () => {
  const [enabled, setEnabled] = React.useState(false);

  const loadDataButtonMain = React.useCallback(() => {
    setEnabled(!enabled);
  }, []);

  const loadDataButtonSecondary = React.useCallback(() => {
    setEnabled(!enabled);
  }, []);

  return {
    enabled,
    loadDataButtonMain,
    loadDataButtonSecondary,
  };
};
