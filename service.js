const languageEncoding = require("detect-file-encoding-and-language");
const pathToFile = "example_file.csv";
// const pathToFile = "file.csv";
// const pathToFile = "file.txt";
languageEncoding(pathToFile).then((fileInfo) => console.log(fileInfo));

// not working 2.2.0
// npm install detect-file-encoding-and-language@2.1.0
