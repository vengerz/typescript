function showTitle() {
    console.log("My Website Title");
}
showTitle();
function getText(txt) {
    console.log("Show : ".concat(txt));
}
getText("Hello world");
function sumNumber(n1, n2) {
    return n1 + n2;
}
var result = sumNumber(20, 10);
console.log("result: ".concat(result));
function calBmi(w1, w2) {
    return w1 / (w2 * w2);
}
var bmi = calBmi(65, 1.8);
console.log("BMI = ".concat(bmi));
//Arrow function
var sumNumber2 = function (nn1, nn2) { return nn1 + nn2; };
var sum2 = sumNumber2(50, 40);
console.log("Result: ".concat(sum2));
//class
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.calRec = function () {
        return this.w * this.h;
    };
    return Rectangle;
}());
var rect = new Rectangle();
rect.h = 10;
rect.w = 20;
console.log("RectangleArea = ".concat(rect.calRec()));
