#! /usr/bin/env node
//import inquirer module, which is command line interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";
//Declare a constant 'answers' and  assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: (chalk.bold.cyanBright `"Enter your sentences: "`),
    }
]);
/*
Trim function remove white spaces and line in any text and split function converts all elements in array form
Trim is removing start and end spaces here, it is not removing spaces between sentence.
If your remove split from this code, trim will count each letter including space between words then give the answer
If you remove trim from this code, then split will consider each whitespace and count it as 1
If you remove space between inverted commas in split function then this code will count each letter of sentence as 1
*/
const words = answers.Sentence.trim().split(" ");
//Print the array of words to the console
console.log(words);
//Print the word count of the sentence to the console
console.log(chalk.bold.yellow(`"Your sentence word count is: ${chalk.bold.magentaBright(words.length)}"`));
