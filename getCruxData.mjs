import { getReports } from "kruk";
import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";
const INPUT = "./src/_urls";
const OUTPUT = "./src/_data";

const API_KEY = process.env.PSIKUS;

function prependHttp(url, { https = true } = {}) {
  if (typeof url !== "string") {
    throw new TypeError(
      `Expected \`url\` to be of type \`string\`, got \`${typeof url}\``
    );
  }

  url = url.trim();

  if (/^\.*\/|^(?!localhost)\w+?:/.test(url)) {
    return url;
  }
  return url.replace(/^(?!(?:\w+?:)?\/\/)/, https ? "https://" : "http://");
}

async function getDataAndSaveToFile(file, queryParams) {
  const urlOrOrigin = queryParams.origin ? "origin" : "url";
  const urls = await readFile(path.join(INPUT, file), "utf8");
  const data = await getCrux(
    JSON.parse(urls).map((url) => prependHttp(url)),
    queryParams
  );
  const fileToWrite = file.split(".json")[0] + "-" + urlOrOrigin + ".json";
  writeFile(path.join(OUTPUT, fileToWrite), JSON.stringify(data));
}

try {
  const files = await readdir(INPUT);
  for (const file of files)
    if (file.includes(".json")) {
      getDataAndSaveToFile(file, {
        effectiveConnectionType: "",
        formFactor: "PHONE",
        origin: true,
      });
      getDataAndSaveToFile(file, {
        effectiveConnectionType: "",
        formFactor: "PHONE",
        origin: false,
      });
    }
} catch (err) {
  console.error(err);
}

async function getCrux(urls, queryParams) {
  return await getReports(urls, API_KEY, queryParams);
}
