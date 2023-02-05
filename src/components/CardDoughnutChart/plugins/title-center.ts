export const titleCenter = {
  id: "title-center",
  afterDatasetsDraw: (chart: any) => {
    const {
      ctx,
      chartArea: { top, left, width, height },
    } = chart;
    ctx.save();

    const text = chart.config.options.plugins.title.text;

    ctx.font = "bold 22px  'Inter', sans-serif";
    ctx.fillStyle = "#6D7478";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(text, left + width / 2, top + height / 2);
    ctx.restore();
  },
};
