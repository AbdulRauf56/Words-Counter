#! /usr/bin/env node

// Importing inquirer and chalk Packages.
import inquirer from "inquirer";
import chalk from "chalk";

// Print a colourfull Welcome message.
console.log(chalk.bold.cyanBright("\n \t\t Code with Abdul Rauf - Word Counter"));
console.log("=".repeat(65));

// Prompt the user to enter a Sentence.
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Triming the sentence and spliting it into words based on "spaces".

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence.
console.log("=".repeat(65));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Counter: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(65));