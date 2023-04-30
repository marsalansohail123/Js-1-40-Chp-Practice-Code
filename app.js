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

// var cities = ["Karachi", "Quetta", "Lahore", "Islamabad"];

// index number
// alert("City = " + cities[3]);

// var mixedArray = [1, true, "Bob", "", "", , , "Abc"];

// console.log(mixedArray[1] = "abc");
// console.log(mixedArray[10] = "Arsalan");
// console.log(mixedArray)

// =================================================================

// Chp 16 Arrays: Adding and removing elements

// var animals = [];

// animals[0] = "dog";
// animals[1] = "cat";
// animals[2] = "lizard";

// adding elements in the last of the array
// animals.push("snake", "rabbit");
// removing elements in the last of the array
// animals.pop();

// console.log(animals);


// =================================================================

// Chp 17 Arrays: Removing, inserting, and extracting elements

// var names = ["arsalan", "sohail", "hassan", "mubeen", "owais"];

// removeing one element from the beginning of an array
// names.shift();
// adding element from the beginning of an array
// names.unshift("bob", "syde")
// splice method is use to add one or more elements anywhere in an array
// names.splice(1, 4, "bob", "syde", "kyth", "micheal")
// Another Example
// names.splice(2, 0, "abc");
// copy the elements of an array
// var newNames = names.slice(1, 5);

// console.log(newNames)


// =================================================================

// Chp 18 for loops

// var names = ["arsalan", "sohail", "hassan", "mubeen", "owais", "yaseen", "shayan"];
// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// =================================================================

// Chp 19 for loops: Flags, Booleans, array length, and loopus interruptus

// var names = ["arsalan", "sohail", "hassan", "mubeen", "owais", "yaseen", "shayan"];
// var input = prompt("please enter your name", "arsalan");
// var flag = false;

// for (var i = 0; i < names.length; i++) {
// console.log(names[i]);
//     if (input === names[i]) {
//         console.log("you must enter");
//         flag = true;
//         break;
//     }
// }

// if (flag === false) {
//     console.log("you must exit")
// }

// =================================================================

// Chp 20 nested loops

// var names = ["arsalan", "sohail", "hassan", "mubeen", "owais", "yaseen", "shayan"];
// var namestoAdded = ['bob', "micheal", "syde"];

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     for (var j = 0; j < namestoAdded.length; j++) {
//         console.log(namestoAdded[j]);
//         console.log(names[i] + " " + namestoAdded[j]);
//     }
// }

// =================================================================

// Chp 21 changing case

// var input = prompt("Enter any city name");
// input = input.toLowerCase();
// console.log(input);
// console.log(input.toUpperCase());

// =================================================================

// Chp 22 Strings: Measuring length and extracting parts

// var names = prompt("Enter your name");
// var firstWord = names.slice(0, 1).toUpperCase();
// var otherWords = names.slice(1).toLowerCase();

// var result = firstWord + otherWords;

// console.log(result);

// var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sed.";
// var flag = false;
// console.log(para.length);

// for (var i = 0; i < para.length; i++) {
// console.log(para[i]);
// console.log(para[i])
// console.log(i)
// console.log(i, i + 2)
//     if (para.slice(i, i + 2) === "  ") {
//         alert("There is a double space!");
//         flag = true;
//         break;
//     }
// }

// if (flag == false) {
//     alert("No double spaces found!");
// }

// =================================================================

// Chp 23 Strings: Finding segments

// var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit."

// if found index number is in result and on no found return -1
// var firstChr = str.indexOf("sit");
// var lastChr = str.lastIndexOf("sit");

// console.log(firstChr, lastChr)

// var para = "Second World War, also called World War II, conflict that involved virtually every part of the world during the years 1939–45"

// var firstChar = para.indexOf("World War II");
// if (firstChar !== -1) {
//     para = para.slice(0, firstChar) + "the second world war" + para.slice(firstChar + 12)
// console.log(para.slice(firstChar + 12))
// }

// console.log(para)

// =================================================================

// Chp 24 Strings: Finding a character at a location.

// var firstName = 'Arsalan';

// Way 1
// var firstChar = firstName.slice(0, 1);

// Way 2
// var firstChar = firstName.charAt(0);

// console.log(firstChar)

// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, sed!"

// for (var i = 0; i < text.length; i++) {
//     // console.log(text[i])
//     console.log(text.charAt(i))
//     if (text.charAt(i) === "!") {
//         alert("Exclamation point found.");
//         break;
//     }
// }

// =================================================================

// Chp 25 Strings: Replacing Characters.

// var text = "Lorem ipsum dolor sit second world war amet consectetur adipisicing elit.Accusantium, sed!"

// var firstChar = text.indexOf("second world war");

// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "replace text" + text.slice(firstChar + 16);
// }

// Short Hand

// text = text.replace("second world war", "world war ii");

// console.log(text)

// =================================================================

// Chp 26 Rounding numbers

// var result = 2.2;

// result = Math.round(result);
// result = Math.ceil(result);
// result = Math.floor(result);

// console.log(result)

// =================================================================

// Chp 27 Generating random numbers

// var rNumber = Math.random();
// var impovedNumber = (rNumber * 6) + 1;
// var numberOfStars = Math.floor(impovedNumber);
// console.log(numberOfStars);

// =================================================================

// Chp 28 Converting strings to integers and decimals

// var currAge = prompt("Enter your age");
// var cal = currAge - "18";
// console.log(cal);

// var currAge = +prompt("Enter your age");
// var cal = currAge + 18;
// console.log(cal);

// ParseInt
// var input = parseInt(prompt("Enter any number"));
// console.log(typeof (input))

// ParseFloat
// var input = prompt("Enter age");
// console.log(typeof (parseFloat(input)));

// =================================================================

// Chp 29 Converting strings to numbers, numbers to string

// var integarString = "1218";
// var num = Number(integarString);
// console.log(typeof (num));

// =================================================================

// Chp 30 Controlling the length of decimals

// var integarString = 1218;
// integarString = integarString.toString();
// console.log(typeof (integarString));

// =================================================================

// Chp 31 Getting the current date and time

// var currDate = new Date();

// var stringDate = currDate.toString();

// stringDate = stringDate.slice(0, 15)

// stringDate.getDay();

// var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var theDay = currDate.getDay();

// var day = daysArray[theDay];

// console.log(day);

// =================================================================

// Chp 32 Extracting parts of the date and time

// var date = new Date();

// var day = date.getDay(); // 0 is Sunday

// var currentMonth = date.getMonth(); // 0 is January

// var currYr = date.getFullYear(); // 2023

// var currentHrs = date.getHours(); // 0 is midnight 12 is noon 23 is 11pm

// var currMins = date.getMinutes();

// var currSecs = date.getSeconds();

// var currMills = date.getMilliseconds();

// console.log(day, currentMonth, currYr, currentHrs, currMins, currSecs, currMills)

// var millsSince = date.getTime(); // miliseconds since midnight Jan, 1 1970

// console.log(millsSince);

// =================================================================

// Chp 33 Specifying a date and time - Calculation of age

var date = new Date();
// console.log(date)

var dateOfBirth = new Date("October 27, 2005");

// console.log(dateOfBirth)

var msDate = date.getTime();
var msDateOfBirth = dateOfBirth.getTime();

// console.log(msDate, msDateOfBirth)

var diff = msDate - msDateOfBirth;

var calculateAge = diff / (1000 * 60 * 60 * 24 * 365);

// console.log("date", date.getTime());
console.log(Math.floor(calculateAge))
