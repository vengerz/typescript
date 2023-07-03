var score = process.argv.slice(2); //รับหลายค่า
console.log(score);
var sum = 0;
for (var x in score) {
    var sc2 = +score[x];
    sum = sum + sc2;
}
var gradesum = sum;
var msg1;
if (gradesum >= 80 && gradesum <= 100) {
    msg1 = "Grade: A";
}
else if (gradesum >= 70 && gradesum <= 79) {
    msg1 = "Grade: B";
}
else if (gradesum >= 60 && gradesum <= 69) {
    msg1 = "Grade: C";
}
else if (gradesum >= 50 && gradesum <= 59) {
    msg1 = "Grade: D";
}
else if (gradesum <= 49 && sum >= 0) {
    msg1 = "Grade: F";
}
else {
    msg1 = "ลองใหม่อีกครั้ง";
}
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E04\u0E30\u0E41\u0E19\u0E19: ".concat(gradesum));
console.log(msg1);
