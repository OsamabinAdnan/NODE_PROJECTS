#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue.white.bold(`\n =========================== QUIZ SYSTEM TYPESCRIPT ==================================== \n`));

let quiz: {
    question_1:string
    question_2:string
    question_3:string
    question_4:string
    question_5:string
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. What is the result of 2 ** 3 in TypeScript?",
        choices: ["6", "8", "5", "2"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. Which of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. Which operator is commonly used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. What is the correct way to check if a value is greater than or equal to another value in TypeScript?",
        choices: ["a >= b", "a => b", "a <= b", "a =< b"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. Which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start ()", "prompt ()", "init ()", "run ()"]
    }
]);

let score: number = 0;

switch (quiz.question_1) {
    case "8":
        console.log(chalk.green("Q1: You answer is Correct"));
        ++score;
        break;

    default:
        console.log(chalk.red("Q1: You answer is incorrect"));
    
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.green("Q2: You answer is Correct"));
        ++score;
        break;

    default:
        console.log(chalk.red("Q2: You answer is incorrect"));
    
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.green("Q3: You answer is Correct"));
        ++score;
        break;

    default:
        console.log(chalk.red("Q3: You answer is incorrect"));
    
}
switch (quiz.question_4) {
    case "a >= b":
        console.log(chalk.green("Q4: You answer is Correct"));
        ++score;
        break;

    default:
        console.log(chalk.red("Q4: You answer is incorrect"));
    
}
switch (quiz.question_5) {
    case "prompt ()":
        console.log(chalk.green("Q5: You answer is Correct"));
        ++score;
        break;

    default:
        console.log(chalk.red("Q5: You answer is incorrect"));
    
}
if (score >=4) {
    console.log(chalk.yellowBright.bold(`Well Done! Your final score is ${score}`));
} else {
    console.log(chalk.yellowBright.bold(`"You need to work harder, Your final score is ${score}"`));
}
