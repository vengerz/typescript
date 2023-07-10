var f1 = document.getElementById("form1");
var div1 = document.getElementById("showText");
var inputText = document.getElementById("input1");
var inputText2 = document.getElementById("input2");
f1 === null || f1 === void 0 ? void 0 : f1.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Click");
    div1.innerHTML = "Hello ".concat(inputText.value, " <br> You are ").concat(inputText2.value, " years old");
});
