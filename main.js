function getComputerChoice(weapons) {
    let chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    return chosenWeapon;
}

function singleRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();

    let verdict;

    let winOrLose = ["You WIN!", "It's a TIE..", "You LOSE."];
    let cause = [
        " Paper beats Rock",
        " Scissors beat Paper",
        " Rock beats Scissors",
    ];

    if (playerLower === "paper") {
        if (computerSelection === "Rock") {
            message = "You WIN! \nPaper beats Rock";
            verdict = 1;
        } else if (computerSelection === "Paper") {
            message = "It's a TIE..";
            verdict = 0;
        } else if (computerSelection === "Scissors") {
            message = "You LOSE. \nScissors beat Paper";
            verdict = -1;
        }
    } else if (playerLower === "rock") {
        if (computerSelection === "Rock") {
            message = "It's a TIE..";
            verdict = 0;
        } else if (computerSelection === "Paper") {
            message = "You LOSE. \nPaper beats Rock";
            verdict = -1;
        } else if (computerSelection === "Scissors") {
            message = "You WIN! \nRock beats Scissors";
            verdict = 1;
        }
    } else if (playerLower === "scissors") {
        if (computerSelection === "Rock") {
            message = "You LOSE. \nRock beats Scissors";
            verdict = -1;
        } else if (computerSelection === "Paper") {
            message = "You WIN! \nScissors beat Paper";
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
    let heading = "<h3> GAME OVER </h3>";
    let verdict;

    if (userScore > computerScore) {
        verdict = "<h5>You WIN!</h5>";
    } else if (userScore < computerScore) {
        verdict = "<h5>You LOSE...</h5>";
    } else if (userScore == computerScore) {
        verdict = "<h5>It's a TIE</h5>";
    }

    //let scores = `You ${userScore} <---> Computer ${computerScore}`;

    message += heading;
    message += verdict;
    //message += scores;

    const outcome = document.querySelector("#outcome");
    let outcomeId = outcome.id;
    console.log(`your choice: ${outcomeId}`);

    outcome.innerHTML = message;
}

function update_score(userScore, computerScore) {
    let userPoints = userScore;
    let computerPoints = computerScore;

    const user = document.querySelector(".user");
    user.innerHTML = userPoints;

    const computer = document.querySelector(".computer");
    computer.innerHTML = computerPoints;
}

function game() {
    const weapons = ["Rock", "Paper", "Scissors"];

    let userScore = 0;
    let computerScore = 0;

    //listen in to all the buttons
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((btn) =>
        btn.addEventListener("click", (e) => {
            // get user choice for the round
            let userChoice = e.currentTarget.id;
            console.log(`your choice: ${userChoice}`);

            // get computer choice for the round
            let computerChoice = getComputerChoice(weapons);
            console.log(`computer choice: ${computerChoice}`);

            // play the round
            let verdict = singleRound(userChoice, computerChoice); // outputs: [verdict, message]
            console.log(`verdict: ${verdict}`);

            // display round's meesage depending on verdict value
            if (verdict[0] == 1) {
                userScore++;
                outcome.innerHTML = verdict[1];
            } else if (verdict[0] == 0) {
                outcome.innerHTML = verdict[1];
            } else if (verdict[0] == -1) {
                computerScore++;
                outcome.innerHTML = verdict[1];
            }

            //console.log(`You ${userScore} <---> Computer ${computerScore}`);
            update_score(userScore, computerScore);

            // play until someone is winning by 5 points
            // GAME OVER
            if (userScore == 5 || computerScore == 5) {
                gameoverMessage(userScore, computerScore);

                // Let's play again!
                userScore = 0;
                computerScore = 0;
            }
        })
    );
}

game();
