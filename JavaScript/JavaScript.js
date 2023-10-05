//console.log("hello world");

// var myName = 'Riyaz1';
// console.log(myName);

// perimitive

// undefined : typeof instance === "undefined"
// Boolean : typeof instance === boolean"
// Number : typeof instance=== "number"
// String : typeof instance=== "string"
// Bigint : typeof instance==="bigint"
// Symbol : typeof instance==="symbol"


// var myName = 'Riyaz Ansari';
// console.log(myName);
// console.log(typeof(myName));

// //number
// var myAge = 22;
// console.log(typeof(myAge));

// //boolean
// var isMarried = false;
// console.log(isMarried)
// console.log(typeof(isMarried));


//console.log("hello" - "world"); //answer -- NaN :- not a number
//console.log("hello" + "world"); //answer -- helloworld
//console.log("hello" * "world"); //answer -- NaN :- not a number

//console.log(true + true) // 2



// Interview Question 
//Diffrence between null vs undefine

// var iamUseless = null;
// console.log(iamUseless); //null

// var iamUseless1;
// console.log(iamUseless1); //undefined

//2nd Interview Question
//Diffrence between == vs ===

// == : compare value
// === : compare value and type

// var myName = 'Riyaz1';
// console.log(myName); //Riyaz1
// console.log(myName == 'Riyaz1'); //true
// console.log(myName === 'Riyaz1'); //

// var myAge = 22;
// console.log(myAge); //22

// console.log(myAge == '22'); //true
// console.log(myAge === '22'); //false





// console.log(10 + "50");
// console.log(9 - "5");// bug because outout 4;

// console.log(" " + 0)

// console.log(true + true);//2

// Interview question

// what is NaN 

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not A Number

// myphoneNO = 987654321;
// myName = "Riyaz";

// console.log(isNaN(myphoneNO)); //false
// console.log(isNaN(myName)); //true



//******* */ Expression operators 

// Assigment Operators
// Arithmatic Operator
// Comparison Operator
// Logical Operator
// string Operator
// Conditional() Operator

//1. Assigment Operators

// var a = 10;
// var b = 10;
// console.log("is both a and b are equal or not " + a === b); //bugs in concate system

// console.log(a === b) // true

// Comparison Operator


// var a = 30;
// var b = 20;

// console.log(a === b); //false

// console.log(a !== b); //true


// ****For loop 

// var a = 10;
// var b = 20;
// var c = 30;

// for (var i = 1; i <= a; i++) {
//     console.log(i * 2);
// }



// *****Function 
// Function is block of code designes to perfor a particular task

//syntax
// function functionName() {
//     //statement
// }


// function sum() {
//     var a = 10,
//         b = 20;
//     var total = a + b;
//     console.log(total);
// }

// sum();

// Inteview question 

// Function Parameter vs Function Arguments

// parameter

// function sum(a, b) { // parameter
//     var total = a + b;
//     console.log(total);
// }

// sum(55, 55); // argument
// sum(48, 98);


// Function expresion 

// function sum(a, b) { // parameter
//     var total = a + b;
//     console.log(total);
// }

// var funExp = sum(5, 9);

// funExp; //  this is expresion


// Return Expresion 

// function sum(a, b) { // parameter
//     return total = a + b;
// }
// var funExp = sum(55, 55);

// console.log("sum is " + funExp); // 110

//Anonymous function
// Ans--  A fuction expression is similar to end has the same syntax and function without a name is called function .
// 

var funExp = function(a, b) {
    return total = a + b;
}
var sum = funExp(15, 88)
var sum1 = funExp(54, 88)
console.log("sum is " + sum); // 103
console.log("sum is " + sum1); // 142