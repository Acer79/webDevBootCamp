function average (arr) {
    var score = 0;
    for (var i = 0; i < arr.length; i++) {
        score = score + arr[i];
    }
    var num = score / i;
    return Math.round(num);
}

console.log ("This is the average for Math")
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log ("This is the average for Science")
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));

