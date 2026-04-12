import fs from 'fs/promises';
import path from 'path';

const colors = {
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    blue: (text) => `\x1b[34m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`
}

const questions = [
  {
    question: `create a function name ${colors.blue(`print`)} \n \nand fileName ${colors.green(`printhl.js`)} in the path challenge example : \n\n${colors.red(`user/Desktop/Quizmind/challenge`)}"\n`,
    output: "Hello,World",
    fileName: "printhl"
  },
  {
    question: `create a function name ${colors.blue(`printNumbers`)} \n \nand fileName ${colors.green(`print_1_9.js`)} in the path challenge example : \n\n${colors.red(`user/Desktop/Quizmind/challenge`)}"\n`,
    output: "123456789",
    fileName: "print_1_9"
  },
  {
    question: `create a function name ${colors.blue(`ReverseName`)} \n \nand fileName ${colors.green(`Reverse_name.js`)} in the path challenge example : \n\n${colors.red(`user/Desktop/Quizmind/challenge`)}"\n`,
    output: "olleh",
    fileName: "Reverse_name"
  }
];

export async function RandomQuiz() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];

  const filePath = path.join("./exercices-folder", question.fileName + ".js");

  const fileContent = await fs.readFile(filePath, "utf-8");
  
  

  console.log("Question:", question.question);
  console.log("output:", question.output);
  console.log(`\nNow Open Your code and goto the path and start exercice \n fax tsali kteb > "" check filename ""`)
  //console.log("File content:\n", fileContent);

  return { question, fileContent };
}
