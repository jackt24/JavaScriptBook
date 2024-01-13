// Exercise 5.1
// max = 5
// found = false
// user = prompt("Select a number between 1 and 5")
// user = Number(user)

// rand = Math.random()
// rand = rand * 5
// rand = Math.floor(rand) + 1

// console.log(rand + "" + user)


// while (found === false){
//     if(rand === user){
//         console.log("Correct!")
//         found = true
//     } else if(user>rand) {
//         user = prompt("Too high, try again!")
//         user = Number(user)
//     } else if(user<rand) {
//         user = prompt("Too low, try again!")
//         user = Number(user)
//     }
// }

// 5.2 

// counter = 0

// step = 5;

// do {
//     counter+=step
//     console.log(counter)
// } while (counter < 100)

// 5.3

// let myWork = [] // theyve used const for some reason 
// let lesson = {
//     name: "Lesson 1",
//     status: true
// }

// for (i=0; i<10; i++){
//     lesson.name=`Lesson ${i}` // use the backtick to include this var
    
//     // if (i>0) {
//     //     lesson.status = myWork[i-1].status!=true ? true : false
//     // }

//     lesson.status = i%2 ? true : false
    
//     myWork[i]=lesson
//     console.log(myWork[i])
// }

// 5.4

// let myTable = []

// rows = 5
// cols = 5

// counter = 0

// for (i=0; i<rows; i++){
//     tempTable = []
//     for (j=0; j<cols;j++){
//         counter++
//         tempTable.push(counter)
//     }
//     myTable.push(tempTable)
// }

// console.table(myTable)

// 5.5 

// const grid = []
// cells = 64
// counter = 0
// let row 
// // cols = 8

// for(i=0;i<cells+1;i++) {
//     if (counter%8==0){
//         if(row != undefined) {
//             grid.push(row)
//         }
//         row = []
//     }

//     counter++
//     let temp = counter
//     row.push(temp)
// }
// console.table(grid)

// 5.6

// arr = []

// for (i=0;i<10;i++){
//     arr.push(i + 1)
// }
// console.log(arr)


// for (name of arr){
//     console.log(name)
// }

// 5.7

// obj = {
//     name: "keff",
//     job: "Skater",
//     age: 34
// }

// for (let prop in obj) {
//     console.log(obj[(prop)])
// }

// 5.8

// output = ""

// skip = 2

// for (i=0;i<10;i++){
//     if(i==skip){
//         // break
//         continue
//     }
//     output = output.concat(i)
// }

// console.log(output)

// Chapter 5 Exercise 

arr = []

value = 5

outer:
for (i=0; i<value; i++){
        tempTable = []
        inner:
        for (j=0; j<value;j++){
            counter++
            tempTable.push(i*j)
        }
        arr.push(tempTable)
    }

console.table(arr)