// ----------------------------------------------------
// data types

// primitive datatype -> stack memory -> very fast -> smaller and fixed per thread
// Number -> represents both integers and floating-point decimals, plus special values
// BigInt -> handles whole numbers larger than the safe integer limit
// String -> represents textual datas
// Boolean -> logical entities with only two possible values
// Undefined -> Automatically assigned to a variable that has been declared but noe given a value
// Null -> represents the intentional absence of any object value
// Symbol -> creates unique and immutable identifiers, often used as object property key

// reference datatype -> heap memory -> slower due to stack -> much larger and dynamically allocated
// Object -> standerd key-value pairs
// Array -> list of values
// Function -> callable blocks of code that execute tasks
// ----------------------------------------------------


let bool = true;
console.log(bool);
console.log(typeof bool); //boolean

let x;
console.log(x);
console.log(typeof x); //undefined

let y = null;
console.log(y); //null
console.log(typeof y); //object

let arr = [1, 2, 3, 4, 5];
console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log(typeof arr); //object

let obj = {
    name: "Jana",
    age: 24,
};
console.log(obj); //{ name: 'Jana', age: 24 }
console.log(typeof obj); //object

let fun = function() {
    console.log("Welcome to javascipt");
};
console.log(fun); //[Function: fun]
console.log(typeof fun); //function


// Symbole ES6
let sym = Symbol("hello");
console.log(sym); //Symbol(hello)
console.log(typeof sym); //symbol

let bigInt = 23456789098765432123456789n;
console.log(bigInt); //23456789098765432123456789n
console.log(typeof bigInt); //bigint

const PI = 3.14;
console.log(PI); //3.14
console.log(typeof PI); //number

let a = 10;
let b = a;
console.log(`a: ${a}`); //10
console.log(`b: ${b}`); //10
b=20;
console.log(`a: ${a}`); //10
console.log(`b: ${b}`);//20


// reference datatype 

// memory address share 
let ab = {name: "jana",}; // create a memory adderess
let ba = ab; // this time not create new memoey address use same ab's memory address
console.log(`ab: ${ab.name}`); //jana
console.log(`ba: ${ba.name}`); //jana

ba.name = "janarthan" // use same memory adderss so one place change value change all paleces
console.log(`ab: ${ab.name}`); // janarthan
console.log(`ba: ${ba.name}`); // janarthan

// same method use array
let ar = [1, 2, 3];
let bar = ar;
console.log(`ar: ${ar}`); //1, 2, 3
console.log(`bar: ${bar}`); //1, 2, 3
bar.push(4);
console.log(`ar: ${ar}`); //1, 2, 3, 4
console.log(`bar: ${bar}`); //1, 2, 3, 4
