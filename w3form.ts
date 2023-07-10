const f1 = document.getElementById("form1");
const div1 = document.getElementById("showText") as HTMLInputElement
const inputText = document.getElementById("input1") as HTMLInputElement
const inputText2 = document.getElementById("input2") as HTMLInputElement
f1?.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log("Click")
    div1.innerHTML = `Hello ${inputText.value} <br> You are ${inputText2.value} years old`
})
