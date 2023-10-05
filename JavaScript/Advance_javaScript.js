// ⭐ What is event propagation? 
// Event bubbling and capturing are two ways of event propagation in the HTML DOM API , whne an event occurs in an element inside another element and both element have registred a handle for that event .


// The  event propagation mode determines in which order the elements receive the event
//⭐what is event bubbling ?
// with event bubbling the event is first captured and handle by the innermost element and then propagated to outer element.==>bottom to up 
// ⭐Event capturing ==>top to bottom. -> outer to inner (box)


// ⭐Asynchronous JavaScript

// 1.Hoisting in javaScript.==> Hoisting in js is a mechanism where variable and function declaration are moved to the top of their scope before the code execute. Hoisting cannot use let,const 



// ⭐Lecically => which means that we can see what the scope chain will be by looking at the code.We can know code value by ;ooking in that particular code.

// Asynchronous progm

// const fun2 = () => {

//     setTimeout(() => {
//         console.log(`function 2 is called`)
//     }, 2000);
// }
// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called`)

// }
// fun1();

// ⭐Event Loop;