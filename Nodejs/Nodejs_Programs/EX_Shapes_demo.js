// . -> .current folder
//..->parent folder
// arithmetic refers to the module.exports object from ./arithmetic.js
const arithmetic = require( './Ex_Shapes' );

// using the object destructuring syntax
const { square,rectangle,circle } = require( './Ex_Shapes' );

console.log( area.square(4,4 ) );
console.log( area.rectangle( 2,4 ) );
console.log( area.circle(PI,2,2) );

console.log( square(4,4 ) );
console.log( rectangle( 2,4 )); 
console.log(circle(PI,2,2) );