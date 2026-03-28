import readline from "readline";

export function startquiz() {
        console.log("1. Basics Exercise 1:\n Sum of two numbers Task: Ask the user for two numbers and print their sum. ");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter Your path: ", (userpath) => {
            console.log("you entered: ", userpath);

                rl.close();
            });


    
};