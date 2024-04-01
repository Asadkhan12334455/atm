#! /usr/bin/env node
console.log(chalk.redBright("Welcome M.Asad"));
console.log(chalk.redBright("Your total amount is 50000"));
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 50000;
let mypin = 1244;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.green("Please enter your 4 digit pin code"),
    },
]);
if (mypin === pinanswer.pin) {
    console.log(chalk.greenBright("Correct pin code"));
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.green("Select any one oF the operations"),
            type: "list",
            choices: ["Withdraw", "Checkbalance", "Fastcash", "Deposit"],
        },
    ]);
    if (operationans.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.green("Please enter your amount"),
            },
        ]);
        if (mybalance >= amountAns.amount) {
            mybalance -= amountAns.amount;
            console.log(chalk.yellowBright(`Your remaining amount is ${mybalance} `));
        }
        else {
            console.log(chalk.redBright(`Unable to get transaction your balance is Insufficient`));
        }
    }
    else if (operationans.operation === "Checkbalance") {
        console.log(chalk.italic.yellowBright(`your amount is ${mybalance}`));
    }
    else if (operationans.operation === "Deposit") {
        let deposited = await inquirer.prompt([
            {
                name: "Deposit",
                type: "number",
                message: chalk.green("Please enter your deposit amount"),
            },
        ]);
        if (deposited.Deposit) {
            mybalance += deposited.Deposit;
            console.log(chalk.italic.yellowBright(`Successfully your amount has been deposited ${mybalance}`));
        }
    }
    else if (operationans.operation === "Fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "Fastcash",
                message: chalk.green("please select your amount"),
                type: "list",
                choices: ["5000", "10000", "20000", "30000", "50000"],
            },
        ]);
        if (mybalance >= fast.Fastcash) {
            mybalance -= fast.Fastcash;
            console.log(chalk.yellowBright(`Your remaining amount is ${mybalance}`));
        }
        else {
            console.log(chalk.redBright `Unable to get transaction your balance is Insufficient`);
        }
    }
}
else {
    console.log(chalk.redBright("Incorrect pin code"));
}
