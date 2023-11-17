// Exercise 3.4

myCar = {
    make: "Vauxhall",
    model: "Astra",
    value: 4000,
    ulez: true,
    color: "red",
    // forSale: false
}

myCar["forSale"] = true;

console.log(myCar['make'], myCar['model'])
console.log(myCar['forSale'])

// Exercise 3.5

friend1 = {name:"Adolf", surname:"Hitler", id:1}
friend2 = {name:"Jim",surname: "Quim",id:2}
friend3 = {name:"Dave",surname: "Save",id:3}

people = {
    friends: [{
    }]
}

people.friends[0] = friend1
people.friends[1] = friend2
people.friends[2] = friend3
console.log(people)

// Chapter Project 1 

const theList= ['Laurence', 'Svekis', true , 35 , null , undefined , {test: 'one', score: 55}, ["one", "two"]]
// remove first and last items
theList.shift();
theList.pop();
// add FIRST to the start of the array
theList.unshift("FIRST");
// Asssign Hello World to the fourth item value 
theList.splice(3,4,"hello World")
// add MIDDLE to 3rd index  value
theList[2] = "MIDDLE"
// Add LAST to end of Array
theList.push("LAST")

console.log(theList)

// Chapter Project 2

items = []

item={name:"ketchup", model:"Heinz", cost:4, quantity:100}
item1={name:"mayo", model:"Heinz", cost:4, quantity:100}
item2={name:"mustard", model:"Heinz", cost:4, quantity:10}

items.push(item, item1, item2)

console.log(items)

console.log(items[2].quantity)