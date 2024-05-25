import inquirer from "inquirer";
const randNum = Math.floor(Math.random() * 10);
let guessGame = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "guess a number"
    }
]);
let num1 = guessGame.userGuess;
if (num1 == randNum) {
    console.log("answer is correct you win!");
}
else {
    console.log("your answer is incorrect try again");
}
