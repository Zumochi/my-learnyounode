var fs = require('fs');

var arg = process.argv;
content = fs.readFileSync(arg[2]);

var contentStr = content.toString();
var split = contentStr.split("\n");
console.log(split.length - 1);

