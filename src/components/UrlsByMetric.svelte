<script>
    import UrlWithIcon from "./UrlWithIcon.svelte";
    /** @type {{data: any}} */
    let { data } = $props();

    function imgIcon(url) {
        return (
            "https://www.google.com/s2/favicons?sz=16&domain_url=" +
            url.replace("https://", "")
        );
    }

    const titleArr = [];

    function allGoodPercent() {
        const minimal = {};
        data.metrics.forEach((item) => {
            const v = Object.values(item);
            const allMin = v
                .map((item) =>
                    typeof item === "object" && !!item.histogram[0]
                        ? item.histogram[0]
                        : 2000,
                )
                .reduce((a, b) => Math.min(a, b));
            minimal[item.url] = allMin;
        });
        return minimal;
    }

    function compareByMinimal(a, b) {
        const y = a[0].minimal;
        const x = b[0].minimal;
        if (y > x) return -1;
        if (x < y) return 1;
        return 0;
    }

    function getMetric() {
        const minimal = allGoodPercent();

        return data.metrics
            .map((item) => {
                let obj = [];
                obj.push({
                    url: item.url.replace("https://", ""),
                    minimal: minimal[item.url],
                });
                ["FCP", "LCP", "CLS", "TTFB", "INP", "RTT"].forEach(
                    (metric) => {
                        obj.push({
                            p75: item[metric].p75,
                            rank: item[metric].rank,
                        });
                    },
                );
                return obj;
            })
            .sort(compareByMinimal);
    }
    const table = [["url", "FCP", "LCP", "CLS", "TTFB", "INP", "RTT"]].concat(
        getMetric(),
    );

    const tableHeading = table[0];
</script>

<table>
    <tbody>
        <tr>
            {#each tableHeading as cell}
                <td>{cell}</td>
            {/each}
        </tr>
        {#each table.slice(1, table.length) as row}
            <tr>
                {#each row as cell}
                    {#if cell.p75}
                        <td class={cell.rank}>{cell.p75}</td>
                    {:else}
                        <td>
                            <UrlWithIcon url={cell.url} />
                            <div class="all-good">
                                <div style={"width:" + cell.minimal + "%"}>
                                    {cell.minimal}%
                                </div>
                            </div>
                        </td>
                    {/if}
                {/each}
                <!-- <td class={metric.rank}>{metric.p75}</td>  -->
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
    }
    tr:first-child td {
        background: #333;
        color: #fff;
        font-weight: bold;
    }
    table,
    tr,
    td {
        border: 1px solid #ddd;
        border-collapse: collapse;
    }
    td {
        padding: 10px 20px;
        border: 1px solid #ddd;
        border-collapse: collapse;
    }

    tr td:first-child {
        padding: 10px;
    }
    .all-good {
        background-color: #ddd;
        font-size: 60%;
    }
    .all-good div {
        background-color: #34a853;
        padding: 1px 3px;
        color: #000;
    }
    .icon {
        max-width: 12px;
        margin: 0 3px 0 0;
    }
    .good {
        background-color: #34a85385;
    }

    .average {
        background-color: #fbbc0485;
    }

    .poor {
        background-color: #ea433590;
    }
</style>
