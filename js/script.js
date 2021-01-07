// Q1
var firstNumber = 34;
var secondNumber = 89;
if (firstNumber < secondNumber); {
console.log("The first number is smaller than the second")
}
// Q2
var age = 11;
var minimumAge = "13";
if (age >= minimumAge) {
    console.log("Pass");
} else {
    console.log("Fail")
}
// Q3
var income = "11.050";
var maximumIncome = "13.075"
if (income >= maximumIncome) {
    console.log("Pass");
} else {
    console.log("Fail")
}
// Q4
var studentAge = 15;
var message;
if (studentAge >= 6 && studentAge <= 13) {
    console.log("Barneskole");
} else if (studentAge >= 14 && studentAge <= 16) {
    console.log("Ungdomsskole");
} else if (studentAge >= 17 && studentAge <= 19) {
    console.log("Videregående skole");
} else {
    message = "Invalid Age"
}
console.log(message);
// Q5
var colour = "blue";
// if ((colour = "orange")) {
//    console.log("This colour is a bit rubbish")
// }
if (colour === "orange") {
    console.log("This colour is a bit rubbish");
} else {
    console.log("This colour is not bad")
}
// Q6
var invoicePaid = false;
if (invoicePaid === false) {
    console.log("Not paid");
}
if (invoicePaid !== true) {
    console.log("Not Paid");
}
if (!invoicePaid) {
    console.log("Not paid")
}
// Q7
var selectedNumber = 11;
var winningNumber= "15";
if (selectedNumber !== (winningNumber)) {
    console.log("You loose again");
}
// Q8
var dayOfTheWeek = 2;
switch (dayOfTheWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}