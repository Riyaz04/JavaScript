// Javascript date object represent a single moment in time in a plaform-independent format. Date object contains a Number that represent millisecond since 1 jan 1970 UTC.

// Creating date objects type 

// 4 types to create a new date 

// 1.⭐🙋‍♂️ new Date() // current date and time

// let currentDate = new Date();
// console.log(currentDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString())

// 2.⭐🙋‍♂️ new Date(milliseconds) // date as number of milliseconds since 1 jan 1970 UTC

// var d = new Date(2011, 0, 15, 11, 45, 55, 22);
// console.log(d.toString())
// console.log(d.toLocaleString())

// 3.⭐🙋‍♂️ new Date(dateString) // date as a string

// var date = new Date("September 05, 2023, 11:55:55 ")
// console.log(date.toLocaleString())

//3.⭐🙋‍♂️How to fetch , get individual date 

// var currentDate = new Date();
// console.log(currentDate.toLocaleString)
// console.log(currentDate.getFullYear())
// console.log(currentDate.getMonth())
// console.log(currentDate.getDate())
// console.log(currentDate.getDay())
// console.log(currentDate.getHours())
// console.log(currentDate.getMinutes())
// console.log(currentDate.getSeconds())
// console.log(currentDate.getMilliseconds())
// console.log(currentDate.getTime())

//How to set date

// var currentDate = new Date();
// console.log(currentDate.setFullYear(2023, 01, 30))

//Set time interval dynamic time

// (function() {
//     setInterval(() => {
//         var currentDate = new Date();
//         console.log(currentDate.toLocaleString())
//     }, 1000)
// })();