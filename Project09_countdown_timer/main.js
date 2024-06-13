#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//we will install another library of date command is ==> npm i date-fns
import { differenceInSeconds } from "date-fns";
console.log(chalk.blue.bold(`\n===========>"Welcome to the Timer App"<===========\n`));
const response = await inquirer.prompt({
    name: "UserInput",
    type: "number",
    message: (chalk.green.bold("Please enter the countdown seconds :")),
    validate: (input) => {
        if (isNaN(input)) {
            return (chalk.red.bold("Please enter a valid number"));
        }
        else if (input > 60) {
            return (chalk.red.bold("Seconds must be less than equal to 60"));
        }
        else {
            return true;
        }
    }
});
let input = response.UserInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const internalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(internalTime, currentTime);
        if (timeDifference <= 0) {
            console.log(chalk.yellowBright.bold("Timer has expired"));
            process.exit(1);
        }
        ;
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
