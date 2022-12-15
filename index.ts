#! /usr/bin/env node
import inquirer from "inquirer";
//import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculator');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "which operator you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "enter number 1:",
        },
        {
            type: "number",
            name: "num2",
            message: "enter number 2:"
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(`${answers.num1} + ${answers.num2}= ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.num1} - ${answers.num2}= ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2}= ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.num1} / ${answers.num2}= ${answers.num1 / answers.num2}`);
    }
}
;
async function againStart() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "list",
            name: "restart",
            message: "Do you want to continue?",
            choices: ["yes", "No"]
        });
    } while (again.restart == "yes");
}
againStart();
