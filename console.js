import readline from "readline";
import { startquiz } from "./runner.js";

console.log("Welcome to the Logic Question Generator!\n");
console.log("This tool generates a random logic question for you to solve in JavaScript.\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("[+] PLease Enter any key to generate a Random Logic Question...", (answer) => {
        let i = 0;

            const loading = setInterval(() => {
                const dots = ".".repeat(i % 4);
                process.stdout.write(`\rGenerating question${dots}   `);
                i++;
            }, 500);

                setTimeout(() => {
                    clearInterval(loading);
                    console.log("Here is your random logic question:\n");
                    startquiz();
                    rl.close();
                }, 3000);

    
    });


