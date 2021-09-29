<script>
  let path;

  let width = 300;
  let height = 100;

  const dataChart = {
    ASS: {
      series: [
        {
          name: "/artykul/:articleId",
          data: [79, 74, 79, 81, 80, 79, 83, 85, 88, 88, 87, 90, 91],
        },
        {
          name: "/produkt/:productId",
          data: [78, 76, 78, 78, 79, 79, 84, 90, 91, 92, 92, 93, 93],
        },
      ],
      categories: [
        "2020-09-01T00:00:00.000Z",
        "2020-10-01T00:00:00.000Z",
        "2020-11-01T00:00:00.000Z",
        "2020-12-01T00:00:00.000Z",
        "2021-01-01T00:00:00.000Z",
        "2021-02-01T00:00:00.000Z",
        "2021-03-01T00:00:00.000Z",
        "2021-04-01T00:00:00.000Z",
        "2021-05-01T00:00:00.000Z",
        "2021-06-01T00:00:00.000Z",
        "2021-07-01T00:00:00.000Z",
        "2021-08-01T00:00:00.000Z",
        "2021-09-01T00:00:00.000Z",
      ],
      title: "ASS_score",
    },
  };
  const data = {
    x: [],
    y: dataChart.ASS.series[0].data,
  };
  dataChart.ASS.categories.forEach((item, i) => {
    data.x.push((i * width) / dataChart.ASS.categories.length);
  });

  let p = "";
  data["x"].forEach((item, i) => {
    p += item + "," + data.y[i];
    if (i !== data["x"].length - 1) {
      p += ",";
    }
  });
  path = "M " + p;
</script>

<div style="border: 1px solid #333;">
  <svg width="100%" viewBox="0 0 {width} {height}">
    <style>
      path {
        fill: none;
        stroke: red;
        stroke-width: 2;
      }
    </style>
    <path d={path} />
    <!-- <rect x="100" width="400" height="250"  fill="none" stroke-width="2" stroke="black" /> -->
  </svg>
</div>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  :global(svg) {
    cursor: pointer;
    background: #eee;
    width: 100%;
  }
</style>
