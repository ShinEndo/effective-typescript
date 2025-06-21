"use strict";
const csvData = "...";
const rawRows = csvData.split("\n");
const headers = rawRows[0].split(',');
const rows = rawRows.slice(1)
    .map((rowStr) => rowStr
    .split(",")
    .reduce((row, val, i) => ((row[headers[i]] = val), row), {}));
