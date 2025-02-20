import chalk from "chalk";

// Create an array of motivational quotes
const quotes = [
    "Every morning is a new beginning, a chance to rewrite your story.",
    "The future depends on what you do today.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don't watch the clock; do what it does. Keep going."
];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Get a random quote and display it in a colorful format
const quoteOfTheDay = getRandomQuote();

// Display the quote with a title and color the quote using chalk
console.log(chalk.bold.blue('Your Quote of the Day:'));
console.log(chalk.green(`"${quoteOfTheDay}"`));