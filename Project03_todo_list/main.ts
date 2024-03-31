#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;

console.log(chalk.magentaBright("\n \t TODO LIST APPLICATION \n"));

while (condition) {
    let addTask = await inquirer.prompt([
    {
    name:"task",
    message:"What you want to add in your todo list?",
    type:"input",
    }
    ]);
    todolist.push(addTask.task);
    console.log (chalk.greenBright(`"${addTask.task} task has been added in Todo list successfully"`));
    
    let addmoreTask = await inquirer.prompt([
        {
            name:"addmore",
            message:"Do you want to add more task in your todolist",
            type:"confirm",
            default:"false",
        }
        ]);
        condition = addmoreTask.addmore
}
console.log ("Your updated Todo list:" , todolist);
