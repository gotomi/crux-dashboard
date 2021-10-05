<script>
  export let metric;

  const metricsMap = {
    CLS: { range: [0.1, 0.25], name: "Cumulative Layout Shift" },
    FCP: { range: [1800, 3000], name: "First Contentful Paint" },
    FID: { range: [100, 300], name: "First Input Delay" },
    LCP: { range: [2500, 4000], name: "Largest Contentful Paint" },
  };

  const metricData = metricsMap[metric];
  const unit = metric === "CLS" ? "" : "ms";
</script>

<h2>{metricData.name}</h2>
<p class="legend">
  🟢 good (&lt; {metricData.range[0]}
  {unit}) 🟠 needs improvement 🔴 poor (&gt; {metricData.range[1]}
  {unit})
</p>

<style>
  .legend {
    text-align: right;
    padding: 10px 0;
  }

  @media (max-width: 1022px) {
    .legend {
      text-align: left;
      font-size: 80%;
    }
  }
</style>
