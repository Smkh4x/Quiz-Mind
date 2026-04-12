import readline, { clearLine } from "readline";
import { RandomQuiz } from "./random.js"
import { checker } from "./checker.js";


const colors = {
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    blue: (text) => `\x1b[34m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`
}

function main(){
    console.log(colors.blue("\n\t\tWelcome to the Logic Question Generator!\n"));
console.log(colors.yellow("This tool generates a random logic question for you to solve in JavaScript.\n"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("\t[+] PLease Enter any key to generate a Random Logic Question...\n", (answer) => {
        let i = 0;

            const loading = setInterval(() => {
                const dots = ".".repeat(i % 4);
                process.stdout.write(`\r Generating question ${dots} `);
                i++;
            }, 500);

                setTimeout(() => {
                    clearInterval(loading);
                    console.log(`\n\n\n \t \t \t \t Extercice`);
                    console.log(`${RandomQuiz()}`);


                }, 3000);



    });
}
main()


