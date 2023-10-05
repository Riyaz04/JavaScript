//⭐ Destucturing in ES6

// const bioData = ['Riyaz', 22, "Merrut"];

//let [Name, age, Palce] = bioData;

//console.log(Palce)
//we can add value too

// let [Name, age, Palce, myDegree = "MCS"] = bioData;
// console.log(myDegree);

//⭐ Object Destucturing

// const myBio = {
//     myName: 'Riyaz',
//     age: 22,
//     Place: 'Meerut'
// }
// let { myName, age, Place, myDegree = "MCS" } = myBio;
// console.log(myName, age, Place, myDegree);

//⭐  Object Properties // add any data inside the object

// let myName = 'Riyaz';
// const bio = {
//     [myName]: "hello dear",
//     [22 + 55]: "is my random no."
// }
// console.log(bio)


// ⭐add another data in array => Spread Operator

// const colors = ['red', 'blue', 'green', 'yellow'];
// // add data 
// const myColor = [...colors, 'black', 'white']
// console.log(myColor) //=>[ 'red', 'blue', 'green', 'yellow', 'black', 'white' ]


// ⭐ES7 feature
// 1. **
// console.log(2 ** 9)

// ⭐ES2017-18(ES8)
//string padding
//object.values()
//object.entries()


// ⭐1. string Padding
// let myName = "Riyaz".padStart(50);
// console.log(myName) //=> 50space before Riyaz

// let myAge = '26'.padEnd(40);
// console.log(myAge) //=>

// ⭐2. Object values

// const person = { name: 'Riyaz', age: 20 };
// console.log(Object.values(person)) => [Riyaz, 22]

// console.log(Object.entries(person)) // it change object array


// ⭐ES2020 
// 1. : BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum)
// console.log(9007199254740991 n + 12 n); // usning in bigdata