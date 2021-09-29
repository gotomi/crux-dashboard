<script>
    export let chartdata;

    let canvasSize = {
        width: 800,
        height: 400,
    };

    const assData = chartdata.ASS.series.map((item) => {
        return Object.assign(item, { categories: chartdata.ASS.categories });
    });

    function prepareData(dataRaw, categoriesRaw) {
        let minValue = dataRaw.reduce((a, b) => Math.min(a, b));

        const dataRawMinusMinimum = dataRaw.map(
            (item) => item - minValue * 0.9
        );

        let ratio =
            canvasSize.height /
            dataRawMinusMinimum.reduce((a, b) => Math.max(a, b));

        const data = dataRawMinusMinimum.map((item) => item * ratio);
        const categories = categoriesRaw.map(
            (item, i) => (canvasSize.width / (categoriesRaw.length - 1)) * i
        );
        return { data, categories };
    }

    function prepareLinesToDraw(data, categories) {
        let pointsAndLines = [];

        data.forEach((item, i) => {
            if (i > 0) {
                const p1 = { y: data[i - 1], x: categories[i - 1] };
                const p2 = { y: data[i], x: categories[i] };
                const d = Object.assign(p1, line(p1, p2));
                const style = `left:${d.x}px; bottom:${d.y}px; width:${d.length}px; transform:rotate(${d.angle}deg)`;
                pointsAndLines.push(style);
            }
        });
        return pointsAndLines;
    }

    function line(p1, p2) {
        const width = Math.abs(p2.x - p1.x);
        const height = Math.abs(p2.y - p1.y);

        const length = Math.round(
            Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
        );

        const tmpAngle = Math.round(
            Math.asin(width / length) / (Math.PI / 180)
        );
        const angle = p2.y - p1.y > 0 ? tmpAngle - 90 : 90 - tmpAngle;
        return { length, angle };
    }

    let allData = assData.map((item, i) => {
        const { data, categories } = prepareData(item.data, item.categories);

        const pointsAndLines = prepareLinesToDraw(data, categories);
        return {
            data: data,
            categories: categories,
            name: item.name,
            pointsAndLines: pointsAndLines,
            dataRaw: item.data,
            categoriesRaw: item.categories,
        };
    });

    let allPaths = [];
    let allPoints = [];
    allData.forEach((d) => {
        let p = "";
        let point = [];
        d.data.forEach((item, i) => {
            p += d.categories[i] + "," + (canvasSize.height - item) + ",";
            point.push([d.categories[i], canvasSize.height - item]);
        });

        let path = "M " + p;
        allPaths.push(path);
        allPoints.push(point);
    });

    console.log(allPoints.map((item) => item.reduce((a, b) => a.concat(b))));

    let colors = [
        "red",
        "green",
        "blue",
        "black",
        "orangered",
        "gray",
        "navy",
        "maroon",
        "brown",
        "yellow",
        "olive",
    ];
</script>

<div style="padding: 30px">
    <svg width="100%" viewBox="0 0 {canvasSize.width} {canvasSize.height}">
        {#each allPoints
            .map((item) => item.reduce((a, b) => a.concat(b)))
            .slice(0, 3) as path, i}
            <style>
                path {
                    fill: none;
                    stroke: red;
                    stroke-width: 5;
                }
            </style>
            {path.join(",")}}
            <path d={"M " + path.join(",")} style={"stroke: " + colors[i]} />
            {#each path as point, ii}
                
                {#if ii % 2 === 1}
                {console.log(path[ii-1])}
                    <rect
                        x={path[ii-1] -4 }
                        y={path[ii] -4}
                        width="8"
                        height="8"
                        stroke="black"
                    />
                {/if}
            {/each}
        {/each}
    </svg>
</div>

<div class="canvas-wrapper">
    {#each allData as item, index}
        <h2>{item.name}</h2>
        <div
            class="canvas"
            style={"width:" +
                canvasSize.width +
                "px; height: " +
                canvasSize.height +
                "px"}
        >
            <div>
                {#each item.data as point, i}
                    <div class="line" style={item.pointsAndLines[i]} />
                    <div
                        class="point"
                        style="bottom:calc({point}px - 4px); left: calc({item
                            .categories[i]}px - 4px)"
                    >
                        <span>{item.dataRaw[i]}</span>
                    </div>
                    {#if index !== 2220}
                        <!-- test -->
                        <div
                            class="point0"
                            style="bottom:0; left: {item.categories[i]}px"
                        >
                            <span>{item.categoriesRaw[i]}</span>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
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
    }

    .line {
        position: absolute;
        transform-origin: 0 0;
        height: 2px;
        background: black;
    }
    .canvas-wrapper {
        background: #fff;
        padding: 30px;
    }

    .canvas {
        position: relative;
        margin: 25px;
        width: 600px;
        height: 250px;
        border: 1px solid #ddd;
        border-width: 0 0 1px 1px;
        /* padding: 25px;
        box-sizing:content-box; */
        background: repeating-linear-gradient(
            90deg,
            #fff,
            #ccc 1px,
            #fff 1px,
            #fff 16.6666666%
        );
    }
    .point {
        width: 8px;
        height: 8px;
        background: #ed3800;
        border-radius: 50%;
        font-size: 12px;
        position: absolute;
    }

    .point span {
        display: inline-block;
        background: rgba(255, 255, 25, 0.85);
        transform: translate(5px, 10px);
        text-align: center;
        padding: 2px;
        border-radius: 5px;
    }

    .point0 {
        width: 2px;
        height: 8px;
        background: #333;
        font-size: 12px;
        position: absolute;
    }

    .point0 span {
        display: inline-block;
        text-align: center;
        padding: 2px;
        margin-top: 10px;
        transform-origin: 0;
        transform: rotate(45deg);
    }
</style>
