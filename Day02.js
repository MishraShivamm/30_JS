/* Activity 1: Arithmetic Operations
Task 1: Write a program to add two numbers and log the result to the console
*/

let num1 =  3;
let num2 = 5;
sum = num1 + num2;
//console.log(sum);

// Task 2: Write a program to subtract two numbers and log the result to the console

let nm1 = 4;
let nm2 = 5;
sub = nm2 - nm1;
//console.log(sub);

// Task 3: Write a program to multiply two numbers and log the result to the console

let n1 = 4;
let n2 = 3;
mul = n1 * n2;
//console.log(mul);

// Task 4: Write a program to divide two numbers and log the result to the console

let d1 = 56;
let d2 = 5;
div = d1 /d2;
//console.log(div);

// Task 5: Write a program to remainder when one number is divided by another and log the result to the console

let r1 = 34;
let r2 = 3;
remainder = r1 % r2;
//console.log(remainder);

/* Activity 2: Assignment Operators
Task 6: Use the "+=" operator to add a number to a variable and log the result to the console. */

let a = 34;
let b= 31;
//console.log(a += b);

//Task 7: Use the "-=" operator to subtract a number to a variable and log the result to the console.

let c= 33;
let d= 32;
//console.log(c -= d);

/* Activity 3: Comparison Operators
Task 8: Write a program to compare two numbers using ">" and "<" and log the result to the console. */

let com1 = 3;
let com2 = 4;
compare = com1 > com2;
compare1 = com1 < com2;
//console.log(compare);
//console.log(compare1);

// Task 9: Write a program to compare two numbers using ">=" and "<=" and log the result to the console.

let comm = 33;
let comm1= 34
compare2 = comm >= comm1;
compare3 = comm <= comm1;
//console.log(compare2);
//console.log(compare3);

// Task 10: Write a program to compare two numbers using "==" and "===" and log the result to the console.

let variable = 1 ;
let str = "1";
console.log(variable == str);
console.log(variable === str);

/* Activity 4: Logical Operators
Task 11: Write a program that uses the "&&" operator to combine two conditions and log the result to console. */

let con1 = 6;
let con2 = 2;
condition = con1 +con2 && con1 - con2;
console.log(condition);

//Task 12: Write a program that uses the "||" operator to combine two conditions and log the result to console.

let con3 = 4;
let con4 = 5;
condition1 = con3 + con4 || con3 - con4;
console.log(condition1);

//Task 13: Write a program that uses the "!" operator to negate a condition and log the result to console.

let con5 = 6;
let con6 = 6;
add = !(con5 + con6);
sub = !(con5 - con6);
console.log(add , sub);

/*Activity 5: Ternary Operator
Taskk 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console. */

let number1 = (-5>0)? "Positive" : "Negative";
console.log(number1);

/* Feature Request
Arithmetic Operations Script: Write a script that performs basic arithmetic operations on two numbers and logs the results. */

let fr = 3;
let fr1 = 5;
addition = fr + fr1;
subtraction = fr- fr1;
multipy = fr * fr1;
division = fr/fr1;
remain= fr % fr1;
let obj = {addition , subtraction,multipy,division,remain};
console.log(obj);

//comparison and Logical Operators Script: Create a script that compares two numbers using different comparison opperators and combines conditions using logical operators, logging the results.

let cop = 34;
let cop1 = "33";
greater= cop > cop1;
less = cop > cop1;
greater_equal = cop >= cop1;
less_equal = cop <= cop1;
equality_operator = cop == cop1;
strict_equality_operator = cop === cop1;
// combinig with logical operators
AND = cop +cop1 && cop -cop1;
OR= cop +cop1 || cop -cop1;
NOT_equal = !(cop +cop1);
let obj1 = {greater,less,greater_equal,less_equal,equality_operator,strict_equality_operator, AND, OR,NOT_equal};
console.log(obj1);

//Ternary Operator Script : Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result

let numm = 3;
let topr= (numm >0)? "Positive":"Negative";
console.log(`${numm}` ,"is" ,`${topr}`);
