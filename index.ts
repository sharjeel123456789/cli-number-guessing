import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1 );


const answer = await inquirer.prompt([
    {
        name: "userGuuessedNumber",
        type: "Number",
        message: "Please guess the Number between 1 to 6: ",
    
    },
]);

if (answer.userGuuessedNumber === randomNumber) {
    console.log("congratulation you guess rightnumber.");
} else {
    console.log("you guess wrong number")
}