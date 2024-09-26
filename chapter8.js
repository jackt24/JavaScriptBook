// 8.1 - encode and decode a string 
encoded_uri = "How's%20it%20going%3F"
decoded_uri = decodeURIComponent(encoded_uri)


new_uri = "http://www.basescripts.com?=Hello World"
encoded_new_uri = encodeURIComponent(new_uri)

console.log(encoded_new_uri)

// 8.2 - Remove duplicates from an array

arr = ["Laurence", "Mike", "Larry", "Kim","Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"]

function checkDuplicates(array, index, value){
    // console.log(index, value)
    // console.log(value.indexOf(array))
    if(value.indexOf(array)!=index){
        return false
    } else {
        return true
    }
}

let funcVar = function() {
    let filterArray = arr.filter(checkDuplicates)
    return filterArray
}

console.log(funcVar())

// 8.3 - multiply all numbers in an array by 2

arrNum = [1,2,3,4,5,6]

let mapped_arr = function(){
    mappedArr = arrNum.map(x => 2*x)
    console.log(mappedArr)
}

console.log(mapped_arr())

console.log(arrNum.map(x =>2*x))

// helo 