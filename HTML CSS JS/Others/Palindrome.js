function palindromeFun (str )  
{  
// convert the string into an array using the string.split() function  
const arrValue = string.split (''); //   
  
// use reverse() method to reverse the array values  
const reveArrVal = arrValue.reverse();   
  
// use join() method to group the array values into the string  
const revString = reveArrVal.join('');  
  
if (string == revString) // if string condition is equal to the revString  
{  
alert('It is a Palindrome string '); // print the Palindrome   
}  
else {  
alert (' It is not a Palindrome string' ); // if the condition is not true.  
}  
}  
// take a string from the user  
const string = prompt( ' Enter the string to check Palindrome ');  
const value = palindromeFun (string); // call the function  
console.log(value);  