<script>
    export let data;
    import Metric from "../components/Metric.svelte";
    import Legend from "../components/Legend.svelte";
    function compareByDistribution(a, b) {
        const x = a.histogram[0];
        const y = b.histogram[0];
        if (y < x) return -1;
        if (x > y) return 1;
        return 0;
    }

    function getMetric(data, metric) {
        return data.metrics
            .map((item) => {
                let obj = item[metric];
                obj.url = item.url.replace("https://", "");
                return obj;
            })
            .sort(compareByDistribution);
    }
    
</script>

{#each ["FCP", "LCP", "FID", "CLS"] as metric}
    <article>
        <Legend {metric} />
        {#each getMetric(data, metric) as p}
            <Metric post={p} />
        {/each}
    </article>
{/each}
