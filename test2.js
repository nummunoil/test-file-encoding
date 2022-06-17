var fs = require("fs");

var d = new Buffer.alloc(5, [0, 0, 0, 0, 0]);
var fd = fs.openSync("example_file.csv", "r");
fs.readSync(fd, d, 0, 5, 0);
fs.closeSync(fd);

var e = false;
if (!e && d[0] === 0xef && d[1] === 0xbb && d[2] === 0xbf) e = "utf8";
if (!e && d[0] === 0xfe && d[1] === 0xff) e = "utf16be";
if (!e && d[0] === 0xff && d[1] === 0xfe) e = "utf16le";
if (!e) e = "ascii";

console.log("e : ", e);
//not working
