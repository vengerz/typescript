let score = process.argv.slice(2)//รับหลายค่า
console.log(score)
let sum: number = 0;
for (let x in score){
    let sc2:number = +score[x]
    sum = sum + sc2
}
console.log(`ผลรวมคะแนน: ${sum}`)
let msg1:string;
if (sum>=80&&sum<=100){
    msg1 = "Grade: A"
}else if (sum>=70){
    msg1 = "Grade: B"
}else if (sum>=60){
    msg1 = "Grade: C"
}else if (sum>=50){
    msg1 = "Grade: D"
}else if (sum<49&&sum>=0){
    msg1 = "Grade: F"
}else{
    msg1 = "ลองใหม่อีกครั้ง"
}
console.log(msg1)
