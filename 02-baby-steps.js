var input = process.argv;
var sum = 0;

for (var i = 2; i < input.length; i++) {
    sum += parseInt(input[i], 10);
}

console.log(sum);

