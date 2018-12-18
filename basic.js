/* ***************************
 * Variable and data types
 */

// string
// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';

// number
// var age = 28;

// boolean
// var fullAge = true;
// console.log(fullAge);

//  undifined
// var job;
// console.log(job);

// terus di isi jadi define
// job = 'programmer';
// console.log(job);

// variable rules
// var 3years = 3;   *gk boleh variable awalnya angka
// var john / mark = 'John and Mark';  *gk boleh variable di tengahnya tanda baca
// var if = 23; *gk boleh variable namanya keyword (if,delte,function,dll)

/* ********************************
 * Variable mutation and type coercion
 * coercion artinya mengubah bentuk variable menjadi string
 */

// Type coercion
// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// //  Variable mutation
// age = 'Twenty Eight';
// job = 'Driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + " " + lastName);

/* *******************************
 * Basic Operators
 */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logiacl operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/**********************************
 * Operator precendence
 */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// Multiple operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);

/**********************************
 * if / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' Will married soon');
// }

// var markMass = 80;
// var johnMass = 70;

// var markHeight = 1.76;
// var johnHeight = 1.77;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI);
// console.log(johnBMI);

// if (johnBMI < markBMI) {
//     console.log("Mark's BMI is higher than John's");
// } else {
//     console.log("John's BMI is higher than Mark's");
// }

/***********************************
 * Boolean logic
 */

// var firstName = "John";
// var age = 25;

// if (age < 13) {
//     console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + " is a young man.");
// } else {
//     console.log(firstName + " is a man.");
// }

/**************************************** 
 * The Ternary Operator and Switch Statements
 * Ternary operator digunakan untuk menggantikan if else
 * di gunakan untuk conditional yg simpel 
 */

// var firstName = 'John';
// var age = 16;

// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// Same as above
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
// var job = 'driver';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// age = 25;
// switch (true) {
//     case age < 13:
//         console.log(firstName + 'is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + 'is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + 'is a young man.');
//         break;
//     default:
//         console.log(firstName + 'is a man.');
//         break;
// }

/* 
 *Truthy and Falsy values and equality operators
 */

// Falsy values : undefined, null, 0, '', NaN
//  truthy values : NOT falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//     console.log('variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

//  Equality operators
// if (height === '23') {
//     console.log('The == operators does type coercion!');
// }

/************************************************* 
 *
 */