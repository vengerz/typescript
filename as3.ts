const g01 = document.getElementById("form2");
const divG = document.getElementById("showGrade") as HTMLInputElement
const inputName = document.getElementById("input01") as HTMLInputElement
const score1 = document.getElementById("input02") as HTMLInputElement
const score2 = document.getElementById("input03") as HTMLInputElement
const score3 = document.getElementById("input04") as HTMLInputElement
g01?.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log("คำนวณ")
    const sc01 = Number(score1.value)
    const sc02 = Number(score2.value)
    const sc03 = Number(score3.value)
    let resultG : number = sc01 + sc02 + sc03;
    let calGrade:number = resultG 
    let msg10:string;
    if (calGrade>=80&&calGrade<=100){
        msg10 = "Grade: A"
    }else if (calGrade>=70){
        msg10 = "Grade: B"
    }else if (calGrade>=60){
        msg10 = "Grade: C"
    }else if (calGrade>=50){
        msg10 = "Grade: D"
    }else if (calGrade<=49&&calGrade>=0){
        msg10 = "Grade: F"
    }else{
        msg10 = "Error Try again"
    }
    divG.innerHTML = `นักเรียนชื่อ ${inputName.value} <br> 
    คะแนนรวมเท่ากับ ${resultG}<br>
    เกรดเท่ากับ ${msg10}`
})
