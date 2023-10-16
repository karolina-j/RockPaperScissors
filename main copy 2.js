function getComputerChoice(weapons) {
    let chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    return chosenWeapon;
}



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

    return [verdict, message];
}





function gameoverMessage(userScore, computerScore) {
    let message = "";
    let heading = "<h1> GAME OVER </h1>";
    let verdict;

    if (userScore > computerScore) {
        verdict = "<h3>You WIN!</h3>";

    } else if (userScore < computerScore) {
        verdict = "<h3>You LOSE...</h3>";

    } else if (userScore == computerScore) {
        verdict = "<h3>It's a TIE</h3>";

    }

    let scores = `You ${userScore} <---> Computer ${computerScore}`;

    message += heading;
    message += verdict;
    message += scores;


    const outcome = document.querySelector('#outcome');
    let outcomeId = outcome.id;
    console.log(`your choice: ${outcomeId}`);

    outcome.innerHTML = message;

}



function update_score(userScore, computerScore) {
    let userPoints = userScore;
    let computerPoints = computerScore;

    const user = document.querySelector('.user');
    user.innerHTML = userPoints;

    const computer = document.querySelector('.computer');
    computer.innerHTML = computerPoints;   
}




function game() {
    const weapons = ["Rock", "Paper", "Scissors"];

    let userScore = 0;
    let computerScore = 0;

    
    //listen in to all the buttons
    let buttons = document.querySelectorAll('.button');
    buttons.forEach((btn) => btn.addEventListener("click", (e) => {
            
        // get user choice for the round
        let userChoice = e.currentTarget.id;
        console.log(`your choice: ${userChoice}`);
            
        // get computer choice for the round
        let computerChoice = getComputerChoice(weapons);
        console.log(`computer choice: ${computerChoice}`);
            


        // play the round
        let verdict = singleRound(userChoice, computerChoice);  // outputs: [verdict, message]
        console.log(`verdict: ${verdict}`);

            
        // display round's meesage depending on verdict value
        if(verdict[0] == 1) {
            userScore++;
            outcome.innerHTML = verdict[1];
                
        } else if (verdict[0] == 0) {
            outcome.innerHTML = verdict[1];

        } else if (verdict[0] == -1) {
            computerScore++;
            outcome.innerHTML = verdict[1];
        }
        
        console.log(`You ${userScore} <---> Computer ${computerScore}`);
        update_score(userScore, computerScore);

        // play until someone is winning by 5 points
        // GAME OVER 
        if ((userScore== 5) || (computerScore== 5)){
            gameoverMessage(userScore, computerScore);

            // Let's play again!
            userScore = 0;
            computerScore = 0;
        }
            
        
    }));
    //}


    
    // Let's play again!
    //game();
}





console.log("test");


game();


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
    
    
    if (roundOutcome == 1) {
        userScore++;

    } else if (roundOutcome == -1) {
        computerScore++;

    } else if (roundOutcome == 0) {
        console.log("No points!");
    }
    

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

/*
const bttn = document.querySelector('#rock');
bttn.addEventListener('click', () => {
    alert(bttn.target);
});
*/



/*
const weapons = ["Rock", "Paper", "Scissors"];


const outcome = document.querySelector('#outcome');
let outcomeId = outcome.id;
console.log(`your choice: ${outcomeId}`);



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
    console.log(`verdict: ${verdict}`);

    

    if(verdict == 1) {
        outcome.innerHTML = "You WIN!";
        
    } else if (verdict == 0) {
        outcome.innerHTML = "It's a TIE...!";

    } else if (verdict == -1) {
        outcome.innerHTML = "You LOSE!";

    }
    
}));
*/



/*
    let id = e.getAttribute('id');

    e.addEventListener('click', function () {
        console.log(id);
    });
});
*/

//console.log(game());


