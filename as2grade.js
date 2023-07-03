var score = process.argv.slice(2); //รับหลายค่า
console.log(score);
var sum = 0;
for (var x in score) {
    var sc2 = +score[x];
    sum = sum + sc2;
}
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E04\u0E30\u0E41\u0E19\u0E19: ".concat(sum));
var msg1;
if (sum >= 80 && sum <= 100) {
    msg1 = "Grade: A";
}
else if (sum >= 70) {
    msg1 = "Grade: B";
}
else if (sum >= 60) {
    msg1 = "Grade: C";
}
else if (sum >= 50) {
    msg1 = "Grade: D";
}
else if (sum < 49 && sum >= 0) {
    msg1 = "Grade: F";
}
else {
    msg1 = "ลองใหม่อีกครั้ง";
}
console.log(msg1);
