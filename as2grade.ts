let score = process.argv.slice(2)//รับหลายค่า
console.log(score)
let sum: number = 0;
for (let x in score){
    let sc2:number = +score[x]
    sum = sum + sc2
}

let gradesum:number = sum 
let msg1:string;
if (gradesum>=80&&gradesum<=100){
    msg1 = "Grade: A"
}else if (gradesum>=70&&gradesum<=79){
    msg1 = "Grade: B"
}else if (gradesum>=60&&gradesum<=69){
    msg1 = "Grade: C"
}else if (gradesum>=50&&gradesum<=59){
    msg1 = "Grade: D"
}else if (gradesum<=49&&sum>=0){
    msg1 = "Grade: F"
}else{
    msg1 = "ลองใหม่อีกครั้ง"
}
console.log(`ผลรวมคะแนน: ${gradesum}`)
console.log(msg1)
