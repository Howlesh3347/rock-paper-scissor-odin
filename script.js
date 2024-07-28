
// 1. Random Rock, Paper, Scissors Decision by computer

let humanScore = 0;
let computerScore = 0;

function getComputerMove() {                    // Output => Rock / Paper / Scissor  Computer String
    computerDecision = Math.random()
    if (computerDecision < 1/3) {
        computerMove = "Rock";
    }
    else if (computerDecision > 1/3 && computerDecision < 2/3) {
        computerMove = "Paper";
    }
    else {
        computerMove = "Scissor";
    }
    return computerMove;
}

// 2. Get Human choice

function getHumanMove() {                       // Output => Rock / Paper / Scissor Human String
    humanMove = prompt("Pick Rock, Paper, or Scissor", "");
    return humanMove;
}

// 3. Get scores

function getScores(humanMove , computerMove) {

    if (humanMove === computerMove) {
        return;
    }
    else if (humanMove === "Rock" && computerMove === "Scissor") {
        humanScore = humanScore + 1;
    }
    else if (humanMove === "Paper" && computerMove === "Rock") {
        humanScore = humanScore + 1;
    }
    else if (humanMove === "Scissor" && computerMove === "Paper") {
        humanScore = humanScore + 1;
    }
    else {
        computerScore = computerScore + 1;
    }
}

console.error(`Current Scoreboard : Your Score ${humanScore} | Computer Score ${computerScore}`);

for (let x = 0; x <= 4; x++) {
    console.log(`This is round ${x+1}`)
    globalComputerMove = getComputerMove();
    globalHumanMove = getHumanMove();
    console.log(`The Computer chose ${globalComputerMove}`);
    console.log(`You chose ${globalHumanMove}`);
    getScores(globalHumanMove, globalComputerMove);
    console.error(`Scoreboard : Your Score ${humanScore} | Computer Score ${computerScore}`);
}
// 5. play multiple rounds