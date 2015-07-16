var input = process.argv;
var fs = require('fs');
var path = require('path');

var fileList = fs.readdir(input[2], function(err, data) {
    if (err) throw err;

    for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === "." + input[3]) {
            console.log(data[i]);
        }
    }
});

