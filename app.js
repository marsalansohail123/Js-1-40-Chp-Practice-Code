// Book Link https://cdn.wccftech.com/wp-content/uploads/2014/10/JavaScript.pdf

// Chap 1 Alerts

// alert("Abc");

// alert aur window.alert mai koyi difference nahi hai bss alert jo hai woh window.alert ka short-hand hai aur koti faraq nai hai

// window.alert("Abc")

// =================================================================

// Chp 2 Variable for Strings

// Create variable
// var myName = "My name is Arsalan"; //Strings
// var myNationality = "My nationality is Pakistani";

// Update variable
// myName = "My name is Arsalan Sohail.";
// myNationality = "Nationality: Pakistani";

// console.log(myName, myNationality);

// Creating a number of variables
// var a, b, c, d;
// a = "Abc";
// b = "Def";
// c = "Ghi";
// d = "Def";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// =================================================================

// Chp 3 Variables for Numbers

// var weight = 150; //Number
// console.log(weight)

// var originalNumber = 23;
// var newNum = originalNumber + 2;
// console.log(newNum)

// var number = 150;
// number = number + 50;
// console.log(number)

// var stringNum = "23"; // string (concatenate hoga)
// var newNum = stringNum + 7;
// console.log(newNum);

// =================================================================

// Chp 4 Variable Names Legal and Illegal

// Legal variables
// var abc
// var abc1
// var _abc

// Illegal variables
// var 1abc
// var !abc // koyi b speacial characters use nahi hoty except underscore (_)
// var ab c

// =================================================================

// Chp 5 Math expressions: Familiar operators

// alert(2 + 2);

// if the number in a string, so on the time pf addition they will be concatenate
// alert("2" + "2")

// alert("2" - "2");
// alert("2" * "2");
// alert("2" / "2");

// var a = 20;
// var b = 20;
// var c = a = b;
// console.log("The output will be" + " " + c);

// =================================================================

// Chp 6 Math expressions: Unfamiliar operators

// Post Increment
// var num = 5;
// num++;
// console.log(num)
// var newNum = num++;
// console.log(num, newNum);

// Pre increment
// var num = 5;
// ++num;
// var newNum = ++num
// console.log(num, newNum);

// Post Decrement
// var num = 5;
// num--;
// console.log(num)
// var newNum = num--;
// console.log(num, newNum);

// Pre Decrement
// var num = 5;
// --num;
// var newNum = --num;
// console.log(num, newNum);

// =================================================================

// Chp 7 Math expressions: Eliminating ambiguity

// In JavaScript mathmetic operations will always be in BODMAS - DEMAS format (Brackets, Orders (powers/indices or roots), Division, Multiplication, Addition, Subtraction).

// Here is the short example of it.

// var calcy = 89 + 11 - (2 * 2) / 12 + 5 * 4;
//          89 + 11 - 4 / 12 + 5 * 4
//          89 + 11 - 0.3333333333333333 + 5 * 4
//          89 + 11 - 0.3333333333333333 + 20
// console.log(calcy)

// =================================================================

// Chp 8 Concatenating text strings

// alert("Hello");

// var message = "Hello";
// alert(message);

// var name = "Arsalan";
// var message = "Hello";
// alert(message + " " + name);

// If you mix strings and numbers... JavaScript automatically converts the numbers to strings, and displays the message "2plus 2 equals 22".
// alert("2 plus 2 equals to ", 2 + 2);

// Correct Way
// var add = 2 + 2;
// alert("2 plus 2 equals to " + add);

// =================================================================

// Chp 9 Prompts

// prompt(pehle mai message aaye ga, dusre mai by-default text aaega)

// Simple Prompt
// var abc = prompt();

// Message Prompt
// var abc = prompt("Here is the message...");

// Message and default text both
// var abc = prompt("Here is the message...", "message");

// var message = "Enter your name..";
// var name = "Arsalan";
// var abc = prompt(message, name);

// var catsOfUser = +prompt("How many cats you have?", 1);
// var addInCats = catsOfUser + 1;
// alert("Add 1 number in user cats. " + "User Cats: " + addInCats);


// =================================================================

// Chp 10 If statements

// var userCity = prompt("Enter your city", "Karachi");

// == double equals mai sirf condition chck krta hai aur === equal to mai type b chck krta hai
// if (userCity === "Karachi") {
//     console.log("Success")
// } else {
//     console.log("Error")
// }

// =================================================================

// Chp 11 Comparasion Operators

// var fullName = "Arsalan Sohail";

// if (fullName === "Arsalan" + " " + "Sohail") {
//     alert("You are the right person.")
// } else {
//     alert("Not allowed.")
// }

// !== not equal to
// var ticketNumber = prompt("Enter your four digit lottery number");
// if (ticketNumber !== "1234") {
//     alert("Better luck next time.")
// } else {
//     alert("Congratulations, you won.")
// }

// > greater than
// if (1 > 5) {
//     alert("Right")
// } else {
//     alert("Wrong")
// }

// < greater than
// if (1 < 5) {
//     alert("Right")
// } else {
//     alert("Wrong")
// }

// >= is greater than or equal to
// var age = 20;
// if (age >= 18) {
//     console.log("Allowed")
// } else {
//     console.log("Not Allowed")
// }

// <= is less than or equal to
// var age = 20;
// if (age <= 18) {
//     console.log("Allowed")
// } else {
//     console.log("Not Allowed")
// }

// =================================================================

// Chp 12 if...else and else if statements

// City List
// var city1 = "Karachi";
// var city2 = "Quetta";
// var city3 = "Lahore";
// var city4 = "Peshawar";

// User City
// var userCity = prompt("Please enter your city", "Lahore")

// Condition - Validation
// if (userCity == city1) {
//     console.log("Allowed")
// } else if (userCity == city2) {
//     console.log("Allowed")
// } else if (userCity == city3) {
//     console.log("Allowed")
// } else if (userCity == city4) {
//     console.log("Allowed")
// } else {
//     console.log("Not allowed.")
// }

// =================================================================

// Chp 13 Testing sets of conditions

// && (and and) koyi aik homa lazmi hai mtlb agr yeh nahii tw iske bd wali

// var name = prompt("Enter name");
// var _class = prompt("Enter class");
// var age = prompt("Enter age");

// if (!name && !age && !_class) {
//     console.log("Enter atleast one value on prompt")
// }

// || (or or) jis jis par condition lagi hui hai sbb ka hona lzmi hai

// var name = prompt("Enter name");
// var _class = prompt("Enter class");
// var age = prompt("Enter age");

// if (!name || !age || !_class) {
//     console.log("Must fill all fields")
// }


// =================================================================

// Chp 14 if statements nested

// var name = prompt("Enter name");
// var _class = prompt("Enter class");
// var age = prompt("Enter age");

// if (!name || !age || !_class) {
//     console.log("Must fill all fields")
// } else {
//     if (name == "abc") {
//         alert("You must enter");
//     } else {
//         alert("Please exit.");
//     }
// }

// =================================================================

// Chp 15 Arrays

