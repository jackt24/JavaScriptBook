// 6.1 

// var1 = 1
// var2 = 2

// function add(var1, var2){
//     result = var1 + var2
//     return result
// }

// console.log(add(var1, var2))
// console.log(add(5, 2))

// 6.2 

// let array = ["green", "red", "blue"]

// function select(){
//     name = prompt("whats your name, ill tell you what colour your socks are!")
//     console.log(name)
//     rand = Math.random()
//     rand = rand * 3
//     rand = Math.floor(rand)
//     console.log(rand)
//     colour = array[rand]
//     console.log(name + ", your socks are " + colour)
// }

// select()

// 6.3 

// var1 = 5;
// var2 = 1;


// operator = "+"

// function calc(val1, val2, op){
//     if (op == "+"){
//         console.log(Number(val1)+Number(val2))
//     } 
//     else if (op =="-"){
//         console.log(Number(val1)-Number(val2))
//     }
//     else {
//         console.log("Invalid Operator")
//     }
// }

// calc(var1,var2,"+")

// 6.4

// function calc(val1, val2, op){
//     if (op == "+"){
//         return Number(val1)+Number(val2)
//     } 
//     else if (op =="-"){
//         return Number(val1)-Number(val2)
//     }
//     else if (op =="*"){
//         return Number(val1)*Number(val2)
//     }
//     else {
//         return null
//     }
// }

// arr = []

// let addTwoNumbers = (param, param2) =>  param+param2

// for (i=0;i<10;i++){
//     val1 = calc(i,5,"*")
//     val2 = calc(i,i,"*")
//     response = addTwoNumbers(val1,val2)
//     arr.push(response)
// }

// console.log(arr)

// 6.5

// let hello = "1000";
// let result;

// (function(){
//     let hello = "32"
//     console.log(hello)
// })();

// (function (){
//     result = "Insane, this is IFFE"
// })()

// console.log(hello, result);

// ((param)=>{
//     result = param
//     console.log(result)
// })("hello again");

// 6.6

// function check(num){
//     if (num == 0){
//         return 1
//     } else {
//         return num*check(num-1);
//     }
// }

// console.log(check(7))

// 6.7

// start = 10
// function countdown(val){
//     console.log(val)
//     if (val<1) {
//         return
//     } else if (val>=1) {
//         return countdown(val-1)
//     }
// }

// function countdownTwo(val){
//     console.log(val)
//     if (val>0) {
//         val--
//         return countdownTwo(val)
//     } else {
//         return
//     }
// }


// countdown(start)
// countdownTwo(start)

// 6.8

// let myVariable = function (x) {
//     console.log(x)
// }

// myVariable(6)


// function myFunction(x) {
//     console.log(x)
// }

// myFunction(4)

// Chapter Project

// part 1

// start = 0

// function counter(val){
//     console.log(val)
//     if (val == 10){
//         return 
//     }
//     counter(val+1)
// }

// part 2

let printNumbers = () => {
    console.log("1")
}

let printNumbers2 = () => {
    console.log("2")
}

let printNumbers3 = () => {
    console.log("3")
    printNumbers()
    printNumbers2()
}

let printNumbers4 = () => {
    console.log("4")
    setTimeout(printNumbers,0)
    printNumbers3()
    
}

printNumbers4()