// prompt('hi, how the devil are you?!');
console.log("Hi, dr. log")
// let a  = Math.floor(Math.random()*100);
// console.log("Jack Taylor")
// console.log(a);
/* Value has beeen
logged above */

// // Pythagorus is insane 

// let a = prompt("Enter value a");
// let b = prompt("Enter value b"); 
// console.log(a);
// console.log(b);

// let a1 = Number(a)
// let b1 = Number(b)

// let a2 = a1**a1
// let b2 = b1**b1

// let c = a2 + b2
// console.log(c, a2, b2);

// let result = c**0.5;
// console.log(result)

/// exercise 2.4

a = 4
b = 11 
c = 21

a += b
console.log(b)
a /= c
console.log(c)
// replace value of C with the modulus of C and B
c = c%b
console.log(a, b, c)

// chapter 2 exercise, miles to km converter

let miles = 200
let kms = miles*1.60934

console.log("The distance of " + kms + " is equal to " + miles + "miles")

// chapter 2 exercise part 2 - BMI

height = 72
weight = 180

heightCm = height * 2.54
weightKl = weight / 2.2046

console.log("Height is " + heightCm + ". Weight is " + weightKl + ".")

heightMetres = heightCm/100

bmi = weightKl/(heightMetres**2)
// bmi1 = weightKl/((heightCm/100)*(heightCm/100))

console.log("Your BMI is " + bmi + ", you fat bastard")
console.log("Your BMI is " + bmi1 + ", you fat bastard")