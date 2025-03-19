<script>
    /** @type {{metric: any}} */
    let { metric } = $props();

    const metricsMap = {
        CLS: { range: [0.1, 0.25], name: "Cumulative Layout Shift" },
        FCP: { range: [1800, 3000], name: "First Contentful Paint" },
        FID: { range: [100, 300], name: "First Input Delay" },
        LCP: { range: [2500, 4000], name: "Largest Contentful Paint" },
        TTFB: { range: [800, 1800], name: "Time to First Byte" },
        INP: { range: [200, 500], name: "Interaction To Next Paint" },
        RTT: { range: [75, 275], name: "Round Trip Time" },
    };

    const metricData = metricsMap[metric];
    const unit = metric === "CLS" ? "" : "ms";
    const names = {
        metrics: {
            good: "Good",
            medium: "Needs Improvement",
            poor: "Poor",
        },
        rtt: {
            good: "Low",
            medium: "Medium",
            poor: "High",
        },
    };

    const rangeNames = metric === "RTT" ? names.rtt : names.metrics;
</script>

<h2 id={metric}>{metricData.name}</h2>
<p class="legend">
    🟢 {rangeNames.good} (&lt; {metricData.range[0]}
    {unit}) 🟠 {rangeNames.medium} 🔴 {rangeNames.poor} (&gt; {metricData
        .range[1]}
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
