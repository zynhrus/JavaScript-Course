/* ******************************************************************
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

/* ****************************************************************
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

/* *****************************************************************
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

/*************************************************************
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

/*************************************************************
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

/*******************************************************************
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

/***************************************************************** 
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

/************************************************************** 
 * Function
 * Dont't Repeat Yourself (DRY)
 */

// function calculateAge(yearBirth) {
//     return 2018 - yearBirth;
// }

// var ageAlbert = calculateAge(2002);
// var ageJake = calculateAge(1950);
// var ageJohn = calculateAge(1990);
// console.log(ageAlbert, ageJake, ageJohn);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired ');
//     }

// }

// yearsUntilRetirement(2002, 'Albert');
// yearsUntilRetirement(1950, 'Jake');
// yearsUntilRetirement(1990, 'John');

/*****************************************************************
 * Function Statements and Expressions
 */

//  Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' design beautiful website.';
//         default:
//             return firstName + ' does something else.';
//     }
// }

// console.log(whatDoYouDo('teacher', 'Albert'));
// console.log(whatDoYouDo('driver', 'John'));
// console.log(whatDoYouDo('retired', 'Mark'));

/*****************************************************************
 * Arrays
 */

//  Initialize new array
// var names = ['Albert', 'John', 'Mark'];
// var years = new Array(2002, 1990, 1968);

// console.log(names[2]);
// console.log(names.length);

// Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// Diffrent data types
// var albert = ['Albert', 'Smith', 2002, 'student', false];

// albert.push('blue');
// albert.unshift('Mr.');
// console.log(albert);

// albert.pop();
// albert.pop();
// albert.shift();
// console.log(albert);

// console.log(albert.indexOf(23));

// var isDesigner = albert.indexOf('designer') === -1 ? 'Albert is NOT a designer' : 'Albert IS a designer';
// console.log(isDesigner);

/*****************************************************************
 * Objects and properties
 */

//  Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*****************************************************************
 * Objects and methods
 */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);

/*****************************************************************
 * Loops and iteration
 */
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FLASE, exit the loop!

// For loop
// var albert = ['Albert', 'Smith', 2002, 'student', false];
// for (var i = 0; i < albert.length; i++) {
//     console.log(albert[i]);
// }

// While loop
// var i = 0;
// while (i < albert.length) {
//     console.log(albert[i]);
//     i++
// }

// continue and break statements
var albert = ['Albert', 'Smith', 2002, 'student', false];
for (var i = 0; i < albert.length; i++) {
    if (typeof albert[i] !== 'string') continue; //continue = dilanjutin
    console.log(albert[i]);
}

for (var i = 0; i < albert.length; i++) {
    if (typeof albert[i] !== 'string') break; //break = diberentiin
    console.log(albert[i]);
}

for (var i = albert.length - 1; i >= 0; i--) {
    console.log(albert[i]);
}