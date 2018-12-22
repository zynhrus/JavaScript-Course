/****************************************************************
 *CODING CHALLENGE 1
 */
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

// var markMass = 80;
// var johnMass = 70;
// console.log(markMass + 'kg');
// console.log(johnMass + 'kg');

// var markHeight = 1.76;
// var johnHeight = 1.77;
// console.log(markHeight + 'm');
// console.log(johnHeight + 'm');

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI);
// console.log(johnBMI);

// var isHigher = johnBMI < markBMI;
// console.log("Is Mark's BMI higher than John's? " + isHigher);

/****************************************************************
 *CODING CHALLENGE 2
 */
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

// var johnTeam = (89 + 120 + 103) / 3;
// var mikeTeam = (89 + 120 + 103) / 3;
// var maryTeam = (89 + 120 + 103) / 3;
// //  with if else
// if (johnTeam > mikeTeam && johnTeam > maryTeam) {
//     console.log("John's team win!!!");
//     console.log("Average of John's team score = " + johnTeam);
// } else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
//     console.log("Mike's team win!!!");
//     console.log("Average of Mike's team score = " + mikeTeam);
// } else if (maryTeam > johnTeam && maryTeam > mikeTeam) {
//     console.log("Mary's team win!!!");
//     console.log("Average of Mary's team score = " + maryTeam);
// } else if (mikeTeam === johnTeam && (!mikeTeam === johnTeam) === maryTeam) {
//     console.log("Mike's team and John's team draw");
//     console.log("Average of Mike's and John's team  score = " + mikeTeam);
// } else if (mikeTeam === maryTeam && (!mikeTeam === johnTeam) === maryTeam) {
//     console.log("Mike's team and Mary's team draw");
//     console.log("Average of Mike's and Mary's team  score = " + mikeTeam);
// } else if (maryTeam === johnTeam && (!mikeTeam === johnTeam) === maryTeam) {
//     console.log("Mary's team and John's team draw");
//     console.log("Average of Mary's and John's team  score = " + maryTeam);
// } else {
//     console.log("Mary's , Mike's and John's team draw");
//     console.log("Average of Mary's, Mike's and John's team  score = " + maryTeam);
// }

// with switch
// switch (true) {
//     case johnTeam > mikeTeam:
//         console.log("John's team win!!!");
//         console.log("Average of John's team score = " + johnTeam);
//         break;
//     case johnTeam < mikeTeam:
//         console.log("Mike's team win!!!");
//         console.log("Average of Mike's team score = " + mikeTeam);
//     default:
//         console.log("Mike's team and John's team draw");
//         console.log("Average of Mike's and John's team  score = " + mikeTeam);
//         break;
// }

/****************************************************************
 *CODING CHALLENGE 3
 */
 /*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

// function calculator(bill) {
//     if (bill < 50) {
//         percentage = 0.2;
//     } else if (bill > 50 && bill < 200) {
//         percentage = 0.15;
//     } else {
//         percentage = 0.1;
//     }
//     return bill * percentage;
// }

// var bills = [20, 100, 200];
// var tips = [calculator(bills[0]),
//     calculator(bills[1]),
//     calculator(bills[2])
// ];

// var total = [tips[0] + bills[0],
//     tips[1] + bills[1],
//     tips[2] + bills[2]
// ];
// console.log(tips, total);

/****************************************************************
 *CODING CHALLENGE 4
 */
 /*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/
// var john = {
//   fullName: "John Smith",
//   mass: 70,
//   height: 1.79,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// var mark = {
//   fullName: "Mark Thompson",
//   mass: 70,
//   height: 1.78,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

// if (john.BMI > mark.BMI) {
//   console.log(john.fullName + " Win!!! With BMI = " + john.BMI);
// } else if (john.BMI < mark.BMI) {
//   console.log(mark.fullName + " " + " Win!!! With BMI = " + mark.BMI);
// } else {
//   console.log(
//     mark.fullName +
//       " " +
//       " And " +
//       john.fullName +
//       " " +
//       "draw!!! With BMI = " +
//       john.BMI
//   );
// }

/****************************************************************
 *CODING CHALLENGE 5
 */
 /*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

//  My First TRY (FAILED) !!!
// var john = {
//   name: 'john',
//   bills: [10, 100, 200],
//   calcTips: function () {
//     for (var i = 0; i < this.bills.length; i++) {
//       if (this.bills[i] < 50) {
//         this.percentage = 0.2;
//       } else if (this.bills[i] > 50 && this.bills[i] < 200) {
//         this.percentage = 0.15;
//       } else {
//         this.percentage = 0.1;
//       }
//       console.log(this.tip = (this.bills[i] * this.percentage));
//     }
//   },
//   calcTotal: function () {
//     for (var i = 0; i < this.bills.length; i++) {
//       console.log(this.total = (this.tip[i] + this.bills[i]));
//     }
//   }
// };
// john.calcTips();
// john.calcTotal();

// The solution 
var john = {
  name: 'john',
  bills: [10, 100, 200],
  calcTips: function () {
    // Determine percentage based on tipping rules
    this.tips = []
    this.total = []

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to the corresponing arrays
      this.tips[i] = percentage * bill;
      this.total[i] = bill + percentage * bill;
    }
  }
};

var mark = {
  name: 'Mark',
  bills: [10, 100, 500],
  calcTips: function () {
    // Determine percentage based on tipping rules
    this.tips = []
    this.total = []

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // Add results to the corresponing arrays
      this.tips[i] = percentage * bill;
      this.total[i] = bill + percentage * bill;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john,mark);

if (john.average > mark.average) {
  console.log(john.name + "'s family pays higher tips, with an average of $" + john.average);
} else {
  console.log(mark.name + "'s family pays higher tips, with an average of $" + mark.average);
}