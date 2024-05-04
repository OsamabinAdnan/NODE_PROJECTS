#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
/*
Structure Object Oriented Programming
In which we make classes
CLASSES ==> OBJECTS ==> METHODS ==> ATTRIBUTES
*/
//------------------------------------------------------------------------------1st part of program------------------------------------------------------------------//
class Student {
    static counter = 10000;
    name;
    id;
    courses;
    balance;
    constructor(name) {
        this.name = name; // to access any property of class, we use this keyword
        this.id = Student.counter++;
        this.courses = []; // Initialize empty array of courses
        this.balance = 21000;
    }
    //Method to enroll a student in a course | Method is a function inside a class
    enroll_course(course) {
        this.courses.push(course);
    }
    //Method to view balance
    view_balance() {
        console.log(chalk.greenBright.bold(`Balance fee for ${this.name}: PKR ${this.balance}`));
    }
    //Method to pay fee
    pay_fee(amount) {
        this.balance -= amount;
        console.log(chalk.greenBright.bold(`PKR ${amount} fee paid successfully by ${this.name}`));
        console.log(chalk.greenBright.bold(`Remaining balance is: PKR ${this.balance}`));
    }
    //Method to display student overall status
    display_status() {
        console.log(chalk.green.bold(`Name: ${this.name}`));
        console.log(chalk.green.bold(`ID: ${this.id}`));
        console.log(chalk.green.bold(`Courses: ${this.courses}`));
        console.log(chalk.green.bold(`Balance: ${this.balance}`));
    }
}
//------------------------------------------------------------------------------2nd part of program------------------------------------------------------------------//
//Creating another class to manage students
class Student_Manager {
    students;
    constructor() {
        this.students = [];
    }
    //Method to add new student
    add_student(name) {
        //Inheritance is one of the key features of OOP that allows us to create a new class from an existing class. 
        //The new class that is created is known as subclass (child or derived class) and the existing class from where the child class is derived is known as superclass (parent or base class).
        //we use "new" keyword to create an object of a class in inheritance.
        //we use "extends" keyword to inherit a class from another class.
        let new_student = new Student(name);
        this.students.push(new_student);
        console.log(chalk.greenBright.bold(`Student ${name} added successfully. Student ID: ${new_student.id}`));
    }
    //Method to enroll student in a course
    enroll_student(student_id, course) {
        let student_found = this.find_student(student_id);
        if (student_found) {
            student_found.enroll_course(course);
            console.log(chalk.greenBright.bold(`Student ${student_found.name} enrolled in course ${course} successfully`));
        }
    }
    //Method to view student balance
    view_student_balance(student_id) {
        let student_found = this.find_student(student_id);
        if (student_found) {
            student_found.view_balance();
        }
        else {
            console.log(chalk.red(`Student not found. Please enter correct student ID`));
        }
    }
    //Method to pay student fee
    pay_student_fee(student_id, amount) {
        let student_found = this.find_student(student_id);
        if (student_found) {
            student_found.pay_fee(amount);
        }
        else {
            console.log(chalk.red(`Student not found. Please enter correct student ID`));
        }
    }
    //Method to display student status
    show_student_status(student_id) {
        let student_found = this.find_student(student_id);
        if (student_found) {
            student_found.display_status();
        }
    }
    //Method to find student by student_id
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
}
//------------------------------------------------------------------------------3rd part of program------------------------------------------------------------------//
//Main function to run the program
async function main() {
    console.log(chalk.yellowBright.bold("\nWelcome to Governor Sindh Initiative Student Management System"));
    console.log(chalk.yellowBright("=".repeat(62)));
    // to call any class we used "new" keyword
    let student_manger = new Student_Manager();
    //while loop to keep program running
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                choices: ["Add Student", "Enroll Student", "View Student Balance", "Pay Student Fee", "Show Student Status", "Exit"],
                message: "Please select an option:",
            }
        ]);
        //Using switch statement to handle different choices
        switch (choice.choice) {
            case "Add Student":
                let student_name = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter student name:",
                    }
                ]);
                student_manger.add_student(student_name.name);
                break;
            case "Enroll Student":
                let student_id = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter student ID:",
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter course name:",
                    }
                ]);
                student_manger.enroll_student(student_id.id, student_id.course);
                break;
            case "View Student Balance":
                let student_id_balance = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter student ID:",
                    }
                ]);
                student_manger.view_student_balance(student_id_balance.id);
                break;
            case "Pay Student Fee":
                let student_id_fee = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter student ID:",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter amount to pay:",
                    }
                ]);
                student_manger.pay_student_fee(student_id_fee.id, student_id_fee.amount);
                break;
            case "Show Student Status":
                let student_id_status = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter student ID:",
                    }
                ]);
                student_manger.show_student_status(student_id_status.id);
                break;
            case "Exit":
                console.log(chalk.yellowBright.bold("Exiting....."));
                console.log(chalk.yellowBright.bold("Thank you for using the Student Management System"));
                process.exit();
        }
    }
}
//Calling the main function
main();
