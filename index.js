const fs = require("fs");
const detectCharacterEncoding = require("detect-character-encoding");

// const fileTest = "file.txt";
// const fileTest = "file.csv";
const fileTest = "example_file.csv";

const fileBuffer = fs.readFileSync(fileTest);
const charsetMatch = detectCharacterEncoding(fileBuffer);

console.log(charsetMatch);
