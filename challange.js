/*
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

/*
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

/*
 *CODING CHALLENGE 3
 */

function calculator(bill) {
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill > 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return bill * percentage;
}

var bills = [20, 100, 200];
var tips = [calculator(bills[0]),
    calculator(bills[1]),
    calculator(bills[2])
];

var total = [tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
];
console.log(tips, total);