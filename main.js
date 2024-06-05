#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Person {
    personilty;
    constructor() {
        this.personilty = "mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personilty = "Extravert";
        }
        else if (answer === 2) {
            this.personilty = "Introvert";
        }
        else {
            this.personilty = `You are still a ${this.personilty}`;
        }
    }
    getPersonility() {
        return this.personilty;
    }
}
class Student extends Person {
    name;
    Name;
    constructor() {
        super();
        this.name = "";
    }
    get() {
        return this.name;
    }
    set() {
        this.name = this.Name;
    }
}
class Program {
    static async main() {
        let input = await inquirer.prompt({ name: "choice", message: chalk.italic.whiteBright("Select 1 if you like to talk to others\nSelect 2 if you would rather keep to yourself"), type: "number" });
        let userName = await inquirer.prompt({ name: "name", message: chalk.italic.whiteBright("Enter your name"), type: "input" });
        if (!isNaN(input.choice)) {
            let personality = new Person();
            personality.askQuestion(input.choice);
            let student = new Student();
            student.Name = userName.name;
            student.set();
            console.log(chalk.italic.yellow("You are: " + personality.getPersonility()));
            console.log(chalk.italic.yellow("You name is: " + student.get() + "\nYour personility is: " + student.getPersonility()));
        }
        else {
            console.log(chalk.italic.red("Please enter number"));
        }
    }
}
Program.main();
