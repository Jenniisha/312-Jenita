//console.log(process);
//an object with the environment variables
console.log(process.env);
console.log(process.env.PORT);

console.clear();

console.log(process.argv);

const num1=parseInt(process.argv[2]);
const num2=parseInt(process.argv[3]);
if(isNaaN(num1) || isNaN(num2))
{



//when you want to stop the program
process.exit(1);
}
console.log(num1+num2)
console.log('End of Script');