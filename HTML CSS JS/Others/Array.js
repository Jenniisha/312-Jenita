let fruits = ["Pine", "Banana", "Mango"];
fruits.pop(); //Remove the last element "Mango"
console.log(fruits); //Pine,Banana

//Append element at the end
let fruits1 = ["Pine","Banana"];
fruits1.push("Mango"); //add element at the end of the array
console.log(fruits1);

//Methods to remove element from the beginning of the array:
let fruits2 = ["Pine","Apple","Mango"];
fruits2.shift();
console.log(fruits2); //Pine, Apple

//Add element at the beginning of the array
let fruit3 = ["Pine", "Mango"];
fruit3.unshift("Banana");
console.log(fruit3); //Banana, Pine, Mango