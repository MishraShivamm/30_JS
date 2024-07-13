/* Activity 1 : Variable Declaration
Task 1 : Decalre a variable using "var" , assign it a number and log the value to the console.
*/

var num = 3;
console.log(num);

//Task 2 : Decalre a variable using "let" , assign it a number and log the value to the console.

let ty= "1";
console.log(ty);

/* Activity 2 : Constant Declaration
Task 3 : Decalre a variable using "const" , assign it a boolean value and log the value to the console.
*/

const task = true;
console.log(task);

/* Activity 3 : Data Types
Task 4 : Create variables of different data types (string, number , boolean , object , array) and log each variable's type using " typeof " operator.
*/
var nub = 2;
let st = "Hello , this is Day 1 of JS Practice";
let bool = false;

const obj ={
    name : "Shivam"
};

const arr = [1,2,3,4,5];
console.log(nub , typeof nub);
console.log(st , typeof st);
console.log(bool, typeof bool);
console.log(obj , typeof obj);
console.log(arr , typeof arr);

/* Activity 4 : Reassigning Variables
Task 5 : Declare a variable using "let" , assign it an initial value , reassign a new value and log both values to the console.
*/

let reas = 31;
console.log("old value" , reas);
reas = 33;
console.log("new value", reas);

/* Activity 5 : Understanding "const"
Task 6: Try reassigning a variable declared with "const" and observe the error.
*/

const reass= 1;
console.log("old value:",reass);
reass= 11; // Error because it's decalred using const and it's immutable.
console.log("new value:",reass);