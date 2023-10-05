// ES6 is here

//1 Let and const
//2 DESTUCTING
//3 TEMPLATE STRING
//4 OBJECT PROPERTIES
//5 DEFAULT ARGUMENTS
//6 ARROW FUNCTION
//7 REST OPERATOR
//8 SPREAD OPERATORS



//***** 1 Let and const and let

// let ==> function scope
// let and const ==> block scope

// let myName = "Riyaz"
// console.log(myName)

// let myName = "Ansari"
// console.log(myName)

// const myName = "Rk"
// // console.log(myName)

// //****let
// function biodata() {
//     let myFirstName = "Riyaz"
//     console.log(myFirstName)

//     if (true) {
//         let mylastName = "Ansari"
//         console.log(mylastName);
//         console.log("inner " + myFirstName);
//         console.log("inner " + mylastName);
//     }

//     console.log("outer " + mylastName);
// }

// biodata()

//***** let

// function biodata() {
//     let myFirstName = "Riyaz"
//     console.log(myFirstName)

//     if (true) {
//         let mylastName = "Ansari"
//         console.log(mylastName);
//         console.log("inner " + myFirstName);
//         console.log("inner " + mylastName);
//     }

//     console.log("outer " + mylastName); //it give error because limit in scope
// }

// biodata()


//*** 2 Template literal (Template string) */

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 5;



//     console.log(`${tableOf } * ${num} = ${tableOf * num}`);


// }




//****3 Default Parameter */

// function mult(a, b) {
//     return a * b;
// }

// // console.log(mult(8)); // it has one aurgument then give NaN;

// so we use default parameter 


// function mult(a, b = 5) { // if one argument pass then assign in first parameter.

//     return a * b;
// }
// console.log(mult(8)); // give 40;


// ****4 Arrow function 


//Norma function
// console.log(sum());
// function sum() {
//     let a = 10;
//     let b = 20;
//     let total = a + b;
//     return `total is ${total}`;
// }



//fat Arrow function .in arrow function we should define first then call(print)

// const sum = () => `total is ${(a=4)+(b=25)}`;
// console.log(sum());