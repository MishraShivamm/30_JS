/* Control Structure
Activity 1: If-Else Statements
Task 1: Write a program to check if a number is positive , negative or zero and log the result. */

let num = 4;
if (num> 0){
    console.log(`${num}`,"is Positive ");
}
else {
    console.log(`${num}` ,"is Negative");
}

//Task 2: Write a program to check if a person is eligible to vote(age>18) and log the result to the console.

let age = 1;
if(age>18){
    console.log(`${age}`,"You  are Eligible");
}
else{
    console.log("Not Eligible");
}

/* Activity 2: Nested If-Else Statements
Task 3: Write a program to find largest of three numbers using nested if-else statements. */

let num1 = 33;
let num2 = 12;
let num3 = 6;
if(num1>num2 && num1>num3){
    console.log(`${num1}`,"is greater");
}else if(num2>num1 && num2>num3){
    console.log(`${num2}`,"is greater");
}else if(num3>num1 && num3 >num2) {
    console.log(`${num3}`,"is greater");
}

/* Activity 3: Switch Case
Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console. */

let days = prompt("enter your number");
switch (days) {
    case "1":{
        console.log("Sunday");
    }break;
    case "2":{
        console.log("Monday");
    }break;
    case "3":{
        console.log("Tuesday");
    }break;
    case "4":{
        console.log("Wedday");
    }break;
    case "5":{
        console.log("Thursday");
    }break;
    case "6":{
        console.log("Friday");
    }break;
    case "7":{
        console.log("Saturay");
    }
        break;
    default:
        console.log("Days are only 7 and you entered wrong day count i.e",`${days}`);
        break;
}

//Task 5: write a program  that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = prompt("Enter your score");
if(score>100 || score< 0){
    console.log("Enter correct Score");
}
else{
    switch(true){
        case (score <"0" || score >"100"):{
            console.log("Wrong Score");
        }break;
        case (score >="90" && score <"100"):{
            console.log("Grade A+");
        }break;
        case (score >="80" && score <"90"):{
            console.log("Grade A");
        }break;
        case (score >="70" && score <"80"):{
            console.log("Grade B");
        }break;
        case (score >="60" && score <"70"):{
            console.log("Grade C");
        }break;
        case (score >="40" && score <"60"):{
            console.log("Grade D");
        }break;
        case (score >="0" && score <"40"):{
            console.log("Grade F");
        }break;
        
    }
}