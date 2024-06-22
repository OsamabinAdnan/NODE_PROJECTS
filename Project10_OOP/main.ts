#!/usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk"

class Student {
    name:string
    constructor(n:string){
        this.name = n
    }
}

class Person {
    students:Student[] = []
    addStudent (obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person ()
const programStart = async(persons:Person)=>{
    console.log(chalk.yellowBright.bold("\n================ Welcome! ================\n"))
    do {
    const ans = await inquirer.prompt({
        name:"Select",
        type:"list",
        message:"Whom would you like to interact with?",
        choices:["Staff","Student", "Exit"]
    })
    if (ans.Select === "Staff"){
       console.log(chalk.greenBright.bold("\n You approach to staff room. Please feel free to ask any question \n"));   
    }
    else if (ans.Select === "Student"){
        const ans = await inquirer.prompt({
            name:"student",
            type:"input",
            message:"Enter the student name you wish to engage with:"
        })
        const student = persons.students.find (val => val.name == ans.student)
        if (!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(chalk.cyanBright.bold(`\n Hello I am ${name.name}. Nice to meet you \n`))
            console.log(chalk.magentaBright.bold(" New Student added "));
            console.log(chalk.yellowBright.bold("\n================ Current Students List ================ \n"));
            console.log(persons.students)
        } else {
            console.log(chalk.cyanBright.bold(`\n Hello I am ${student.name}. Nice to see you again `))
            console.log(chalk.yellowBright.bold("\n================ Existing Students List ================\n"));
            console.log(persons.students)
        }
    } else if (ans.Select === "Exit"){
        console.log(chalk.yellowBright.bold("\n ================ GoodBye!, program is exiting ================ \n "));
        process.exit ()
        }
    } while (true)
}

programStart(persons)
