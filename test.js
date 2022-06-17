var encoding = require("encoding-japanese");
const fs = require("fs");

// const file = "file.txt";
// const file = "file.csv";
const file = "example_file.csv";

var fileBuffer = fs.readFileSync(file);
console.log(encoding.detect(fileBuffer));
