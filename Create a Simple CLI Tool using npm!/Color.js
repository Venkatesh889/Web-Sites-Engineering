// greeting.js
import chalk from "chalk";
import readline from "readline";



// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
rl.question('What is your name? ', (name) => {
    // Personalized greeting with different colors using chalk
    const message = chalk.white(`Hello, ${name}!`) +
        chalk.yellow(' Welcome to the colorful world of Node.js!') +
        chalk.greenBright('\nEnjoy coding with color!');
    console.log(message)

    // Close the readline interface after printing the message
    rl.close();
});