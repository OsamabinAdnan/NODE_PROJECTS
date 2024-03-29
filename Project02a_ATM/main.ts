#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance: number = 10000; // in $
let myPin: number = 1234;

    let pinAnswer = await inquirer.prompt(
       [ 
        {
        name: "pin",
        message: "Enter you 4 digit pin",
        type: "number",
        }
       ] 
        );
        if (pinAnswer.pin === myPin){
            console.log ("Wellcome! You pincode in valid");
            let operationAns = await inquirer.prompt(
                [
                    {
                        name:"operation",
                        message:"Select 1 option from below list",
                        type:"list",
                        choices:["Withdraw", "Check Balance"]
                    }
                ]
            )
            if (operationAns.operation === "Withdraw") {
                let amountAns = await inquirer.prompt(
                    [
                        {
                            name:"amount",
                            message:"Enter your amount",
                            type:"number",
                        }
                    ]
                )
                myBalance -= amountAns.amount;
                console.log ("Your remaining balance is: " +myBalance);
            } else if (operationAns.operation === "Check Balance"){
                console.log ("Your balance is: " +myBalance);
            }
        }
        else {
            console.log ("Invalid pin code");
        }

    