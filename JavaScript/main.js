var entry;
var total = 0;
var avg;

entry = prompt("Enter first score");
var score_1 = parseInt(entry);
total += score_1;

entry = prompt("Enter second score");
var score_2 = parseInt(entry);
total += score_2;
entry = prompt("Enter three score");

var score_3 = parseInt(entry);
total += score_3;

var avg = total / 3;

document.getElementById("totalResult").innerHTML = "Total: " + total;
document.getElementById("avgResult").innerHTML = "Average: " + avg;
