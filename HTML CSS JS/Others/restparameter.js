//the third argument, mannyMoreArgs, will be an array that contains
//the 3rd, 4th, 5th, 6th  ...nth -as many arguments that the user includes.
function myFunction(a,b,c, ...manyMoreArgs){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("manyMoreArgs", manyMoreArgs)
  }
  myFunction("one","two","three","four","five","six")