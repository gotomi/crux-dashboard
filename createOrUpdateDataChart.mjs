import fs from "node:fs/promises";
import { access, writeFileSync, readFileSync } from "node:fs";

function createOrUpdateDataChart(file, source) {
  //read last crux

  const url = new URL(source, import.meta.url);
  const json = readFileSync(url, "utf-8");
  const data = JSON.parse(json);

  // update or create
  access(file, (err) => {
    if (err) {
      const newData = prepareEmptyDataForChart(data);

      let ds = JSON.stringify(newData);
      writeFileSync(file, ds);
      console.log("created");
    } else {
      const url = new URL(file, import.meta.url);
      const json = readFileSync(url, "utf-8");
      const allFCP = JSON.parse(json);

      const updateAllFCP = updateCharData(data, allFCP);
      let ns = JSON.stringify(updateAllFCP);
      writeFileSync(file, ns);
      console.log("updated");
    }
  });
}

function getMetric(data, metric) {
  const dataConverted = data.metrics.map((item) => {
    let obj = item[metric] || {};
    obj.url = item.url.replace("https://", "");
    return obj;
  });

  let metricByUrl = {};
  dataConverted.forEach((item) => {
    metricByUrl[item.url] = item.p75;
  });
  return metricByUrl;
}

// push new data to data chart
function updateCharData(data, dataFromFile) {
  Object.keys(dataFromFile).forEach((metric) => {
    const metricData = getMetric(data, metric);

    dataFromFile[metric].series.map((item) => {
      item.data.push(metricData[item.name]);
      return item;
    });
    dataFromFile[metric].categories.push(data.params.date);
  });
  return dataFromFile;
}

//prepare data for chart for the first time
function prepareEmptyDataForChart(data) {
  let tmpl = {};

  ["FCP", "LCP", "INP", "CLS", "TTFB", "RTT"].forEach((metric) => {
    tmpl[metric] = {
      series: [],
      categories: [],
    };
    const metricData = getMetric(data, metric);
    Object.keys(metricData).forEach((url) => {
      tmpl[metric].series.push({
        name: url,
        data: [metricData[url]],
      });
    });
    tmpl[metric].categories.push(data.params.date);
  });

  return tmpl;
}

createOrUpdateDataChart(
  "public/data-chart/crux-origin-all.json",
  "src/_data/ecommerce-pl-origin.json",
);
createOrUpdateDataChart(
  "public/data-chart/crux-home-all.json",
  "src/_data/ecommerce-pl-url.json",
);
