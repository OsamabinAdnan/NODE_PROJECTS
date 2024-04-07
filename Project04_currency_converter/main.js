#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.black.bold.bgWhiteBright("\n \t<<<==========Project: Currency Convertor==========>>>\n"));
//Defining the list of currecies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EURO": 0.92,
    "GBP": 0.79,
    "CAD": 1.36,
    "AUD": 1.52,
    "CNY": 7.23,
    "JPY": 151.61,
    "RUB": 92.58,
    "QAR": 3.64,
    "KWD": 0.31,
    "SAR": 3.75,
    "AED": 3.67,
    "ZAR": 18.73,
    "PKR": 277.54,
    "INR": 83.30,
    "BDT": 109.60, //Bangladeshi Taka  
};
// Prompt for user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: (chalk.bold.magentaBright("Select the currency to convert from:")),
        choices: ["USD", "EURO", "GBP", "CAD", "AUD", "CNY", "JPY", "RUB", "QAR", "KWD", "SAR", "AED", "ZAR", "PKR", "INR", "BDT"],
    },
    {
        name: "to_currency",
        type: "list",
        message: (chalk.bold.magentaBright("Select the currency to convert into:")),
        choices: ["USD", "EURO", "GBP", "CAD", "AUD", "CNY", "JPY", "RUB", "QAR", "KWD", "SAR", "AED", "ZAR", "PKR", "INR", "BDT"],
    },
    {
        name: "amount",
        type: "input",
        message: (chalk.bold.magentaBright("Enter the amount to convert:")),
    }
]);
//create variable to save above inputs
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//perform currency conversion formula
let base_amount = amount / from_amount;
let converted_amount = (base_amount * to_amount);
let fixed_amount = converted_amount.toFixed(2);
//Display the converted amount
console.log(chalk.greenBright.bold(`\n Your amount after conversion is: ${chalk.yellowBright(fixed_amount)}`));
