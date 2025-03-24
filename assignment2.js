//Name: Javinar, Stephanie Faith D. 

// Variable & Constant Declarations
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // String
const e = 15;

//Convert d first into a number before doing the operations
d = Number(d);

//a. Sum of all the values
let Sum = a + b + c + d + e;
console.log("Total Sum:", Sum);

//b. Comparisons of varibale d and constant e using relational operators
console.log("d > e:", d > e);
console.log("d < e:", d < e);
console.log("d >= e:", d >= e);
console.log("d <= e:", d <= e);
console.log("d === e:", d === e);

//c. Basic Math Operations and Reassign
let subtraction = a - b - c - d - e;
console.log("Subtraction Result:", subtraction);

let md = (a * c) / e;
console.log("Multiplication then Division:",md);

let exponent = e ** c;
console.log("Exponentiation (e^c):", exponent);

// Reassign exponent Result to constant e (not allowed, so using a variable instead)
let newexponent = exponent;
console.log("New Value of e:", newexponent);
