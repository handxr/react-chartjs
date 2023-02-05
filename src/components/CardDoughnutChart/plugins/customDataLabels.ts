export const customDatalabels = {
  id: "customDatalabels",
  afterDatasetsDraw(chart: any, args: any, pluginOptions: any) {
    const {
      ctx,
      data,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;

    ctx.save();
    const halfWidth = width / 2 + left;
    const halfHeight = height / 2 + top;
    data.datasets[0].data.forEach((datapoint: any, index: any) => {
      const { x, y } = chart.getDatasetMeta(0).data[index].tooltipPosition();
      // ctx.font = 'Inter';
      ctx.font = " 12px Inter";
      ctx.fillStyle = "#FFF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (datapoint >= 10) {
        ctx.fillText(`${datapoint}%`, x, y);
      } else {
        ctx.fillStyle = "#000";
        const xLine = x >= halfWidth ? x + 15 : x - 15;
        const yLine = y >= halfHeight ? y + 25 : y - 25;
        const extraLine = x >= halfWidth ? 15 : -15;
        const textWidth = ctx.measureText(datapoint).width;
        const textWidthPosition = x >= halfWidth ? textWidth : -textWidth;
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xLine, yLine);
        ctx.lineTo(xLine + extraLine, yLine);
        ctx.stroke();
        ctx.fillText(
          `${datapoint}%`,
          xLine + extraLine + textWidthPosition,
          yLine
        );
      }
    });
  },
};
