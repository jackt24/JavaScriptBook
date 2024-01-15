// 7.1 // 7.2

// class Person{
//     constructor(fname, lname){
//         this.fname = fname
//         this.lname = lname
//     }

//     fullname() {
//         let fullname = this.fname.concat(" ", this.lname)
//         return fullname
//     }

// }

// let myName = new Person("Jack", "Taylor")
// let friendName = new Person("Jim", "Aherne")

// console.log("My name is " + myName.fullname() + " and my friend is called " + friendName.fname)

// 7.3

// class Animal{
//     constructor(species, sound){
//         this.species = species
//         this.sound = sound
//     }

//     animalSound(){
//         let animalAndSound = this.species.concat(", ", this.sound)
//         return animalAndSound
//     }
// }

// Animal.prototype.introduce = function() {
//     let introduce = this.species.concat(" says hello")    
//     return introduce    
// }

// let a = new Animal("Dog", "Bark")
// a.introduce()
// a.animalSound()

// console.log(a.animalSound() + a.introduce())

// Exercise 

// class Employee{
//     constructor(fname, lname, years){
//         this.fname = fname
//         this.lname = lname
//         this.years = years
//     }
// }

// Employee.prototype.fullDetails = function(){
//     let fullInfo = this.fname.concat(" ", this.lname, " ", this.years)
//     return fullInfo
// }

// arr =[]

// let person1 = new Employee("Jim", "Aherne", 23)
// let person2 = new Employee("Tina", "Squiggins", 56)

// arr.push(person1, person2)

// console.log(arr)

// for (i=0; i<arr.length; i++) {
//     console.log("The full details for this employee are: " + arr[i].fullDetails())
// }

// Exercise 2 

class Menu {
    #item1price
    #item2price
    #item1quantity
    #item2quantity
    #orderTotal
    constructor(item1price, item2price, item1quantity, item2quantity){
        this.#item1price = item1price
        this.#item2price = item2price
        this.#item1quantity = item1quantity
        this.#item2quantity = item2quantity
    }

    calculateOrder(){
        this.#orderTotal = (this.#item1price*this.#item1quantity) + (this.#item2price*this.#item2quantity)
    }

    get thisOrder(){
        // total = priceTotal(this.#item1price,this.#item1quantity)
        this.calculateOrder()
        return this.#orderTotal
    }
}

let order1 = new Menu(10, 12, 10, 12)

console.log(order1.thisOrder)

let order2 = new Menu(40, 22, 134, 2)

console.log(order2.thisOrder)