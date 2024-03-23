#!/usr/bin/env node

/*//Certain number ==> Computer number is not random but easily predictable because we set that number

import inquirer from "inquirer"
const randomNumber = 3
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:"Please guess a number between 1 to 6?"
    }
])
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number");
} else {
    console.log ("Try Again! You guessed wrong number")
}*/

//Random number ==> Computer set number by itself which is not easily predictable
import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random()*6+1)
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:"Please guess a number between 1 to 6?"
    }
])
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number");
} else {
    console.log ("Try Again! You guessed wrong number")
}