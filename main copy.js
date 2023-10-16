function getComputerChoice(weapons) {
    let chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    return chosenWeapon;
}


/*

function singleRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();

    let verdict;

    let winOrLose = ["You WIN!", "It's a TIE..", "You LOSE."]
    let cause = [" Paper beats Rock", " Scissors beat Paper", " Rock beats Scissors"]

    if (playerLower === "paper") { 
        if (computerSelection === "Rock") {
            verdict = "You WIN! Paper beats Rock";

        } else if (computerSelection === "Paper") {
            verdict = "It's a TIE..";

        } else if (computerSelection === "Scissors") {
            verdict = "You LOSE. Scissors beat Paper";

        }

    } else if (playerLower === "rock") {
        if (computerSelection === "Rock") {
            verdict = "It's a TIE..";

        } else if (computerSelection === "Paper") {
            verdict = "You LOSE. Paper beats Rock";

        } else if (computerSelection === "Scissors") {
            verdict = "You WIN! Rock beats Scissors";

        }

    } else if (playerLower === "scissors") {
        if (computerSelection === "Rock") {
            verdict = "You LOSE. Rock beats Scissors";

        } else if (computerSelection === "Paper") {
            verdict = "You WIN! Scissors beat Paper";
            
        } else if (computerSelection === "Scissors") {
            verdict = "It's a TIE..";

        }
    }

    return verdict;
}

*/



function singleRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();

    let verdict;

    let winOrLose = ["You WIN!", "It's a TIE..", "You LOSE."]
    let cause = [" Paper beats Rock", " Scissors beat Paper", " Rock beats Scissors"]

    if (playerLower === "paper") { 
        if (computerSelection === "Rock") {
            message = "You WIN! Paper beats Rock";
            verdict = 1;

        } else if (computerSelection === "Paper") {
            message = "It's a TIE..";
            verdict = 0;

        } else if (computerSelection === "Scissors") {
            message = "You LOSE. Scissors beat Paper";
            verdict = -1;

        }

    } else if (playerLower === "rock") {
        if (computerSelection === "Rock") {
            message = "It's a TIE..";
            verdict = 0;

        } else if (computerSelection === "Paper") {
            message = "You LOSE. Paper beats Rock";
            verdict = -1;

        } else if (computerSelection === "Scissors") {
            message = "You WIN! Rock beats Scissors";
            verdict = 1;

        }

    } else if (playerLower === "scissors") {
        if (computerSelection === "Rock") {
            message = "You LOSE. Rock beats Scissors";
            verdict = -1;

        } else if (computerSelection === "Paper") {
            message = "You WIN! Scissors beat Paper";
            verdict = 1;
            
        } else if (computerSelection === "Scissors") {
            message = "It's a TIE..";
            verdict = 0;

        }
        
    }

    console.log(message);

    return verdict;
}


/*

function game() {
    const weapons = ["Rock", "Paper", "Scissors"];

    let userScore = 0;
    let computerScore = 0;


    let playerSelection = button.id;
    //const playerSelection = "rock";
    //let playerSelection = prompt("What's your weapon of choice?", "");
    console.log(`Your move: ${playerSelection}`);

    let computerSelection = getComputerChoice(weapons);
    console.log(`Computer's move: ${computerSelection}`);


    let roundOutcome = singleRound(playerSelection, computerSelection);        
    */
    /*
    if (roundOutcome == 1) {
        userScore++;

    } else if (roundOutcome == -1) {
        computerScore++;

    } else if (roundOutcome == 0) {
        console.log("No points!");
    }
    */
/*
    for(let i=0; i<5; i++) {
        let playerSelection = prompt("What's your weapon of choice?", "");
        console.log(`Your move: ${playerSelection}`);

        let computerSelection = getComputerChoice(weapons);
        console.log(`Computer's move: ${computerSelection}`);


        let roundOutcome = singleRound(playerSelection, computerSelection);        
        if (roundOutcome == 1) {
            userScore++;

        } else if (roundOutcome == -1) {
            computerScore++;

        } else if (roundOutcome == 0) {
            console.log("No points!");
        }
    }
    */
/*
    console.log("GAME OVER");
    if (userScore > computerScore) {
        console.log("You WIN!");

    } else if (userScore < computerScore) {
        console.log("You LOSE...");

    } else if (userScore == computerScore) {
        console.log("It's a TIE");

    }

    console.log(`You ${userScore} <---> Computer ${computerScore}`);

}
*/




/*
let game = () => {
    console.log(button.textContent);
}
*/
    /*
    const weapons = ["Rock", "Paper", "Scissors"];

    let userScore = 0;
    let computerScore = 0;


    let playerSelection = button.id;
    //const playerSelection = "rock";
    //let playerSelection = prompt("What's your weapon of choice?", "");
    console.log(`Your move: ${playerSelection}`);

    let computerSelection = getComputerChoice(weapons);
    console.log(`Computer's move: ${computerSelection}`);


    let roundOutcome = singleRound(playerSelection, computerSelection);        
    */
    /*
    if (roundOutcome == 1) {
        userScore++;

    } else if (roundOutcome == -1) {
        computerScore++;

    } else if (roundOutcome == 0) {
        console.log("No points!");
    }
    */
/*
    for(let i=0; i<5; i++) {
        let playerSelection = prompt("What's your weapon of choice?", "");
        console.log(`Your move: ${playerSelection}`);

        let computerSelection = getComputerChoice(weapons);
        console.log(`Computer's move: ${computerSelection}`);


        let roundOutcome = singleRound(playerSelection, computerSelection);        
        if (roundOutcome == 1) {
            userScore++;

        } else if (roundOutcome == -1) {
            computerScore++;

        } else if (roundOutcome == 0) {
            console.log("No points!");
        }
    }
    */
   /*
    console.log("GAME OVER");
    if (userScore > computerScore) {
        console.log("You WIN!");

    } else if (userScore < computerScore) {
        console.log("You LOSE...");

    } else if (userScore == computerScore) {
        console.log("It's a TIE");

    }

    console.log(`You ${userScore} <---> Computer ${computerScore}`);
*/





/*
const weapons = ["Rock", "Paper", "Scissors"];
let computerSelection = getComputerChoice(weapons);

const playerSelection = "rock";
*/
console.log("test");

/*
const bttn = document.querySelector('#rock');
bttn.addEventListener('click', () => {
    alert(bttn.target);
});
*/




const weapons = ["Rock", "Paper", "Scissors"];



let buttons = document.querySelectorAll('button');

//for (let button of buttons) {
//buttons.forEach(button => {
//document.querySelector('button').forEach(e => {
buttons.forEach((btn) => btn.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice(weapons);
    console.log(`computer choice: ${computerChoice}`);
    
    let userChoice = e.currentTarget.id;
    console.log(`your choice: ${userChoice}`);
    

    let verdict = singleRound(userChoice, computerChoice);


    const outcome = document.querySelector('#outcome');
    outcome.textContent = "";
    
}));

/*
    let id = e.getAttribute('id');

    e.addEventListener('click', function () {
        console.log(id);
    });
});
*/

//console.log(game());


