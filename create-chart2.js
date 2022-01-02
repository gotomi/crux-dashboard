const colorPallete = [
    "#FF0000",
    "#800000",
    "#808000",
    "#FFA700",
    "#008000",
    "#008080",
    "#0000FF",
    "#000080",
    "#FF00FF",
    "#800080",
    "#808080",
    "#000000"
]

function createSingleChart(data, wrapper) {

    const canvas = document.createElement('div');
    canvas.style.width = '1200px';

    wrapper.appendChild(canvas);

    const options = data.options;
    options.series = data.series;
    options.chart = {
        type: 'line',
        animations: {
            enabled: false
        }
    };
    var chart = new ApexCharts(canvas, options);
    chart.render();   
}

async function prepareData(dataSetUrl) {
    const response = await fetch(dataSetUrl);
    const data = await response.json();
    let allOptions = [];
    Object.keys(data).forEach((metric, i) => {
        let state = {
            series: data[metric].series,
            options: {
                xaxis: {
                    categories: data[metric].categories
                },
                title: {
                    text: metric
                },
                markers: {
                    size: 1
                },
                dataLabels: {
                    enabled: true,
                }
            }
        };
        allOptions.push(state)
    })
    return allOptions
}
async function displayCharts(dataSetUrl, title, wrapper) {
    const heading = document.createElement('h2');
    heading.innerHTML = title;
    wrapper.appendChild(heading);

    const allData = await prepareData(dataSetUrl);

    createSingleChart(allData[0], wrapper);
    createSingleChart(allData[1], wrapper);
    createSingleChart(allData[2], wrapper);
    createSingleChart(allData[3], wrapper);
}