// Array => when we feel like storing multiple values in one variable then .

// Traversal of an Array
// Searching and Filter in an Array
// Sort and Compare
//insert , add , Replace delete element in array (CRUD)
//Map(), Reduce(), Filter()


// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true];
// console.log(myFriends);

//Traversal of an Array

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', 'munna', "vinod"];
// //console.log(myFriends[2]);
// console.log(myFriends[myFriends.length - 1]);
// console.log(myFriends.length)

//**For in loop */

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', 'munna', "vinod"];
// for (var i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// }


// diffrence of in loop => give index no.

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', 'munna', "vinod"];

// for (let i in myFriends) {
//     console.log(myFriends[i]);
//     console.log(i) // 1 to 8
// }

//**For of loop */  => give object what are there 

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', 'munna', "vinod"];

// for (let i of myFriends) {
//     console.log(i); // give object
// }

//**For each loop */ => calls a function for each element in the array. {combination of for in and for of loop}

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', 'munna', "vinod"];

// myFriends.forEach(function(element, index, array) {
//     console.log(element, index);
// });

// using fat aarow function 

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', 'munna', "vinod"];

// myFriends.forEach((element, index, array) => {
//     console.log(element + ": index is " +
//         index + " " + array);
// });




//** ⭐⭐ Searching and Filter in an Array */

//Indexof() 🙋‍♂️ // none is found then give -1.

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', "Doli", 'munna', "vinod"];

// console.log(myFriends.indexOf('Doli')); // 2
// console.log(myFriends.indexOf('Doli', 4)); // search from 3

//lastIndexOf() 🙋‍♂️ // none is found then give -1. 

// var myFriends = ["Riyaz", "Ansari", "Doli",
//     18, true, 'bhaiji', 'guddu', "Doli", 'munna', "vinod"
// ];
// console.log(myFriends.lastIndexOf('Doli',
//     3)); //



//includes() 🙋‍♂️ // none is found then give false.

// var myFriends = ["Riyaz", "Ansari", "Doli", 18, true, 'bhaiji', 'guddu', "Doli", 'munna', "vinod"];

// console.log(myFriends.includes('Doli')); // true



//find method;

// const price = [200, 300, 350, 330, 500, 400, 600, 500];

// const findElem = price.find((currVal) => {
//     return currVal < 400;
// });
// console.log(findElem);


// filter;

// const price = [200, 300, 350, 330, 500, 400, 600, 500];

// const newPriceTag = price.filter((elem, index) => {
//     return elem > 400;
// })
// console.log(newPriceTag);




//** ⭐⭐ Sort and Compare */
//sort method is only sort in string.

// const months = ['march', 'jan', 'feb', 'dec', 'nov'];

// console.log(months.sort()); // sort in alphabatical order



//⭐⭐insert , add , Replace delete element in array (CRUD)

//🙋‍♂️push method return new lenght of the array

// const animals = ['cow', 'bull', "sheep", "goat"];
// animals.push('chickens');
// console.log(animals);  add at the end in array


// const animals = ['cow', 'bull', "sheep", "goat"];

// const count = animals.unshift('chicken', 'murgi')
// console.log(animals); // 5 add in the start in the array
// console.log(count) // 6



//pop() //  remove last in array

// const animals = ['cow', 'bull', "sheep", "goat"];

// const count = animals.pop();
// console.log(animals); // 3


//shift  pop at the start.

// const animals = ['cow', 'bull', "sheep", "goat"];

// const count = animals.shift();

// console.log(animals)



// // splice // 
// const animals = ['cow', 'bull', "sheep", "goat"];
// const newAnimals = animals.splice(animals.length, 0, "pussy");
// //which index you want to add and how many element want to 
// //delete and what you want to add
// console.log(animals);


// update method 

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const updaMonth = months.splice(1, 1, "March");

console.log(months);



// update method