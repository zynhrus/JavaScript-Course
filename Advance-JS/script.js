// Function Constructor
// Function Constructor more populer than Object.create
/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Programmer');
var jane = new Person('Jane', 1967, 'Teacher');
var mark = new Person('Mark', 1950, 'Retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1969
    },
    job: {
        VALUE: 'Designer'
    }
});
*/

// Primitives vs objects
/*
// Primitive
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/
// Lecture: Passing funcion as arguments

var years = [1990, 1965, 1937, 2005, 1998];


// Generic function 
function arraycalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function fullAges(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arraycalc(years, calculateAge);
var fullAges = arraycalc(ages, fullAges);
var rates = arraycalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);