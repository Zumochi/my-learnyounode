var input = process.argv;
var fs = require('fs');

var file = fs.readFile(input[2], 'utf8', function (err, data) {
    if (err) throw err;

    var out = data.split("\n");
    console.log(out.length - 1);
});
