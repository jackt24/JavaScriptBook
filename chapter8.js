// 8.1 - encode and decode a string 
encoded_uri = "How's%20it%20going%3F"
decoded_uri = decodeURIComponent(encoded_uri)


new_uri = "http://www.basescripts.com?=Hello World"
encoded_new_uri = encodeURIComponent(new_uri)

console.log(encoded_new_uri)

// 8.2 - Remove duplicates from an array

// arr = ["Laurence", "Mike", "Larry", "Kim","Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"]

// const arr2 = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });

// console.log(arr2)

// 8.3 - multiply all numbers in an array by 2

// arrNum = [1,2,3,4,5,6]

// const mapped_arr2 = arrNum.map(function(ele) {
//     return ele*2;
// });

// console.log(mapped_arr2)

// console.log(arrNum.map(x =>2*x))

// 8.4 Capitalise the first letter of each word and ensure rest are lower case

// str = "thIs will be capiTalized for eAch word"
// arr = []

// function convertStuff(string){
//     newStr = string.toLowerCase()
//     arr = newStr.split(" ") 
//     arr.forEach((ele, index) => {
//         first = ele.slice(0,1).toUpperCase()
//         second = ele.slice(1).toLowerCase()
//         ele = first.concat(second)
//         this.arr[index]= ele
//     });
//     newStr = arr.join(" ")
//     console.log(newStr)
// }

// convertStuff(str)

// 8.5 Lower case a string and replace all vowels

// str = "I Love JavaScript"

// str = str.toLowerCase()
// console.log(str)

// vowels = ["a", "e", "i", "o", "u"]

// vowels.forEach((ele, index) =>{str = str.replaceAll(ele, index)});

// console.log(str)

// 8.6 Math equations 

// console.log(Math.PI)

// mCeil = Math.ceil(5.7)
// mFloor = Math.floor(5.7)
// console.log(mCeil, mFloor)

// console.log(Math.random())

// rand1 = Math.floor(Math.random()*11)
// console.log(rand1)
// rand2 = Math.ceil(Math.random()*10)
// console.log(rand2)
// rand3 = Math.floor(Math.random()*101)
// console.log(rand3)

// min = 1
// max = 100

// function minMax(min, max){
//     val = Math.ceil(Math.random() * max)
//     while (val<min){
//         val = Math.ceil(Math.random() * max)
//     }
//     console.log(val)
// }

// for(i=0; i<100; i++){
//     minMax(min, max)
// }

// 8.7

let currentDate = new Date()
console.log(currentDate)

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  let day = currentDate.getDate()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth()

  date = months[currentDate.getMonth()]
  console.log(date)

  let myDate = `${date} ${day} ${year}`;

  console.log(myDate)
