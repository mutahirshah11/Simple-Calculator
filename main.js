#! /usr/bin/env node 
import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enter second number", type: "number", name: "SecondNumber" },
    {
        message: "select one the operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division",],
    },
]);
console.log(Answer);
if (Answer.operator === "Addition") {
    console.log(Answer.FirstNumber + Answer.SecondNumber);
}
else if (Answer.operator === "Subtraction") {
    console.log(Answer.FirstNumber - Answer.SecondNumber);
}
else if (Answer.operator === "Multiplication") {
    console.log(Answer.FirstNumber * Answer.SecondNumber);
}
else if (Answer.operator === "Division") {
    console.log(Answer.FirstNumber / Answer.SecondNumber);
}
else {
    console.log("Please select a valid operator");
}
;
