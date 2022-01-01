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

 function handleHover(evt, item, legend) {
     legend.chart.data.datasets.forEach(it => {
         if (it.label === item.text) {
             it.borderWidth = 3
         }
     })
     legend.chart.update();
 }

 function handleLeave(evt, item, legend) {
     legend.chart.data.datasets.forEach(it => {
         it.borderWidth = 1
     })
     legend.chart.update();
 }

 function prepareDataSet(data) {
     const seriesCount = data.series.length;
     const dataSet = [];
     for (let i = 0; i < seriesCount; i++) {

         dataSet.push({
             label: data.series[i].name,
             data: data.series[i].data,
             backgroundColor: colorPallete[i],
             borderColor: colorPallete[i],
             borderWidth: 1
         });
     }
     return dataSet;
 }

 function createSingleChart(data, wrapper) {
     const canvas = document.createElement('canvas');
     canvas.width = 1200;
     canvas.height = 600;

     const heading = document.createElement('h3');
     heading.innerHTML = data.options.title.text;

     wrapper.appendChild(heading);
     wrapper.appendChild(canvas);
     const ctx = canvas;

     const myChart = new Chart(ctx, {
         type: 'line',
         data: {
             labels: data.options.xaxis.categories,
             datasets: prepareDataSet(data)
         },
         options: {
             interaction: {
                 mode: 'index',
             },
             plugins: {
                 legend: {
                     onHover: handleHover,
                     onLeave: handleLeave
                 }
             }
         }
     });
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