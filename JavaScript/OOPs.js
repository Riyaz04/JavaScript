//1. What is object Literal?

//How to create an Object.

// 1st way 

// let bioData = {
//     myName: "Riyaz",
//     age: 22,
//     getData: function() {
//         console.log(`My Name is ${bioData.myName} and age is ${bioData.age}`);
//     }
// }
// bioData.getData();

// 2nd way 

// let bioData = {
//     myName: "Riyaz", //key and obj
//     age: 22,
//     getData() {
//         console.log(`My Name is ${bioData.myName} and age is ${bioData.age}`);
//     }
// }
// bioData.getData();


// object inside object

// let bioData = {
//     myName: {
//         firstName: "Riyaz", //obj
//         lastName: "Ansari"
//     },
//     age: 22,
//     getData: function() {
//         console.log(`My Name is ${bioData.myName} and age is ${bioData.age}`);
//     }
// }
// console.log(bioData.myName.lastName)


// ⭐This Object => This object contain the current context.

// function myName() {
//     console.log(this); // it give window in this obj.
// }
// // myName();

// var myNames = "Riyaz";

// function myName() {
//     console.log(this.myNames)
// }
// myName();

const obj = {
    myAge: 22,
    myName() {
        console.log(this.myAge)
    }
}
obj.myName() //22