#!/usr/bin/env node
//This project is not GUI based. It is a console-based game. 
import inquirer from "inquirer";
import chalk from "chalk";

//we have to make 2 characters player and opponent
class Player {
    name:string;
    health:number = 100;
    constructor(name:string){
        this.name = name;
    }
    //Function to decrease health of player
    healthDecrease (){
        let health = this.health - 25
        this.health = health;
    }
    healthIncrease (){
        let health = this.health + 25
        this.health = health;
    }
}
class Opponent {
    name:string;
    health:number = 100;
    constructor(name:string){
        this.name = name;
    }
    //Function to decrease health of opponent
    healthDecrease (){
        let health = this.health - 25
        this.health = health;
    }
}

//making variable to take input from user
let player = await inquirer.prompt([
    {name:"name",
    type:"input",
    message: "Please enter your name"
    }
])
let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Please select your opponent",
        choices:["Batman","Superman","Spiderman"]
    }
])

// now we will get data from user
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

//making loop for condition
do{
    //For Batman
    if (opponent.select == "Batman"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What do you want to do?",
                choices:["Attack","Heal","Run for your Life"],
            }
        ])
        if (ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2)
            if (num > 0){
                p1.healthDecrease();
                console.log (`${p1.name} health is ${p1.health}`)
                console.log (`${o1.name} health is ${o1.health}`)
                if (p1.health <= 0){
                    console.log("You Loose, Better luck next time");
                    process.exit();
                }
            }
            if (num<=0){
                o1.healthDecrease;
                console.log (`${p1.name} health is ${p1.health}`)
                console.log (`${o1.name} health is ${o1.health}`)
                if (o1.health <= 0){
                    console.log("Congratulations! You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Heal"){
        p1.healthIncrease();
        console.log(`You health has been increased, Your health is ${p1.health}`);
        }
        if (ask.opt == "Run for your Life"){
            console.log("You ran away from the fight, You Loose, Better luck next time");
            process.exit();
        }
    }
    //For Superman
    if (opponent.select == "Superman"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What do you want to do?",
                choices:["Attack","Heal","Run for your Life"],
            }
        ])
        if (ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.healthDecrease();
                console.log (`${p1.name} health is ${p1.health}`)
                console.log (`${o1.name} health is ${o1.health}`)
                if (p1.health <= 0){
                    console.log("You Loose, Better luck next time");
                    process.exit();
                }
            }
            if (num<=0){
                o1.healthDecrease;
                console.log (`${p1.name} health is ${p1.health}`)
                console.log (`${o1.name} health is ${o1.health}`)
                if (o1.health <= 0){
                    console.log("Congratulations! You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Heal"){
        p1.healthIncrease();
        console.log(`You health has been increased, Your health is ${p1.health}`);
        }
        if (ask.opt == "Run for your Life"){
            console.log("You ran away from the fight, You Loose, Better luck next time");
            process.exit();
        }
    }
    //For Spiderman
    if (opponent.select == "Spiderman"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What do you want to do?",
                choices:["Attack","Heal","Run for your Life"],
            }
        ])
        if (ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2)
            if (num > 0){
                p1.healthDecrease();
                console.log (`${p1.name} health is ${p1.health}`)
                console.log (`${o1.name} health is ${o1.health}`)
                if (p1.health <= 0){
                    console.log ("You Loose, Better luck next time");
                    process.exit();
                }
            }
            if (num<=0){
                o1.healthDecrease;
                console.log (`${p1.name} health is ${p1.health}`)
                console.log (`${o1.name} health is ${o1.health}`)
                if (o1.health <= 0){
                    console.log("Congratulations! You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Heal"){
        p1.healthIncrease();
        console.log(`You health has been increased, Your health is ${p1.health}`);
        }
        if (ask.opt == "Run for your Life"){
            console.log("You ran away from the fight, You Loose, Better luck next time");
            process.exit();
        }
    }
}
while(true)