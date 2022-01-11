// public
const add = ( x , y ) => x + y;

// private
const subtract = ( x , y ) => add( x, -y );

// public
const multiply = ( x , y ) => x * y;

// private
const divide = ( x, y ) => x / y;

// public
const PI = 3.14;

// whatever is the value of module.exports is available to other modules
module.exports = {
    // add: add
    add, // same as add: add
    multiply,
    PI
};