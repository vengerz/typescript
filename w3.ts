function showTitle(){
    console.log("My Website Title")
}
showTitle()

function getText(txt: string){
    console.log(`Show : ${txt}`)
}
getText("Hello world")

function sumNumber(n1: number, n2: number) :number{
    return n1 + n2
}
let result = sumNumber(20,10)
console.log(`result: ${result}`)

function calBmi(w1: number, w2:number) :number{
    return w1/(w2*w2)
}
let bmi = calBmi(65,1.8)
console.log(`BMI = ${bmi}`)

//Arrow function
let sumNumber2 = (nn1: number,nn2: number) => nn1+nn2
let sum2 = sumNumber2(50,40)
console.log(`Result: ${sum2}`)

//class
class Rectangle{
    w: number;
    h: number;

    calRec(){
        return this.w * this.h
    }
}
let rect: Rectangle = new Rectangle()
rect.h = 10
rect.w = 20
console.log(`RectangleArea = ${rect.calRec()}`)

