// . -> .current folder
//..->parent folder
// arithmetic refers to the module.exports object from ./arithmetic.js
const arithmetic = require( './Ex_Shapes' );

// using the object destructuring syntax
const { add, multiply, PI } = require( './Ex_Shapes' );

console.log( arithmetic.add( 12, 13 ) );
console.log( arithmetic.multiply( 12, 13 ) );
console.log( arithmetic.PI );

console.log( add( 12, 13 ) );
console.log( multiply( 12, 13 ) );
console.log( PI );