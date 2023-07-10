var g01 = document.getElementById("form2");
var divG = document.getElementById("showGrade");
var inputName = document.getElementById("input01");
var score1 = document.getElementById("input02");
var score2 = document.getElementById("input03");
var score3 = document.getElementById("input04");
g01 === null || g01 === void 0 ? void 0 : g01.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("คำนวณ");
    var sc01 = Number(score1.value);
    var sc02 = Number(score2.value);
    var sc03 = Number(score3.value);
    var resultG = sc01 + sc02 + sc03;
    var calGrade = resultG;
    var msg10;
    if (calGrade >= 80 && calGrade <= 100) {
        msg10 = "Grade: A";
    }
    else if (calGrade >= 70) {
        msg10 = "Grade: B";
    }
    else if (calGrade >= 60) {
        msg10 = "Grade: C";
    }
    else if (calGrade >= 50) {
        msg10 = "Grade: D";
    }
    else if (calGrade <= 49 && calGrade >= 0) {
        msg10 = "Grade: F";
    }
    else {
        msg10 = "Error Try again";
    }
    divG.innerHTML = "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D ".concat(inputName.value, " <br> \n    \u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E27\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ").concat(resultG, "<br>\n    \u0E40\u0E01\u0E23\u0E14\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ").concat(msg10);
});
