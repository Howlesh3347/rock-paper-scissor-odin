
const buttonContainer = document.querySelector(".btn-menu");
const buttons = document.querySelectorAll("button");
const textContainer = document.querySelector(".text-container");


buttons.forEach((button) => {                                           // Human Move by Buttons
    button.addEventListener("click", getHumanMove.bind(null, button.className))
})

function getHumanMove(buttonName) {
    return (buttonName === "rock-btn") ? globalHumanMove = "Rock"                         // Output => Rock / Paper / Scissor Human String
    : (buttonName === "paper-btn") ? globalHumanMove = "Paper"
    : globalHumanMove = "Scissor";
}


let humanScore = 0;
let computerScore = 0;

function getComputerMove() {                                            // Auto Move by Computer
    const possibleMoves = ["Rock", "Paper", "Scissor", "Rock"];
    return possibleMoves[Math.floor(Math.random() * 3)];                // Output => Rock / Paper / Scissor  Computer String                                                
}


// 3. Get scores

function getScores(humanMove , computerMove) {                          // Score Calculator 

    if (humanMove === computerMove) {
        return;
    }
    if (humanMove === "Rock" && computerMove === "Scissor"
        || humanMove === "Paper" && computerMove === "Rock"
        || humanMove === "Scissor" && computerMove === "Paper") 
        {
            humanScore = humanScore + 1;
        }
    else {
        computerScore = computerScore + 1;                              // Output => change in humanScore / computerScore
    }
}

function start() {                                                      // Game Start Text
    return `Current Scoreboard : Your Score ${humanScore} | Computer Score ${computerScore}`;
}

function winner(score1, score2) {                                       // Game Winner Text
    return (score1 > score2) ? "Congrats! You have won the Game!!! :D"
    : "Better Luck Next Time! You have lost... :(";
}

const startMsg = document.createTextNode(start());                      
textContainer.appendChild(startMsg);
let roundCounter=0;

function playRound() {

    if (roundCounter <= 4) {                                                       // Start of Function Calls and HTML text Appending

        const lineSkip = document.createElement("div");
        lineSkip.textContent = `-------------------------------`;
        textContainer.appendChild(lineSkip);

        const roundText = document.createElement("div");
        roundText.textContent = `This is round ${roundCounter+1}`;
        textContainer.appendChild(roundText);

        const humanMoveText = document.createElement("div");
        humanMoveText.textContent = `You chose ${globalHumanMove}`;
        textContainer.appendChild(humanMoveText);

        globalComputerMove = getComputerMove();
        const compMoveText = document.createElement("div");
        compMoveText.textContent = `The Computer chose ${globalComputerMove}`;
        textContainer.appendChild(compMoveText);
        
        getScores(globalHumanMove, globalComputerMove);

        const scoreText = document.createElement("div");
        scoreText.textContent = `Scoreboard : Your Score ${humanScore} | Computer Score ${computerScore}`;
        textContainer.appendChild(scoreText);

        roundCounter += 1;
    }

    else {
    const finalMsg = document.createTextNode(winner(humanScore, computerScore));
    textContainer.appendChild(finalMsg);
    }
}

buttons.forEach((button) => {                                           // Human Move by Buttons
    button.addEventListener("click", playRound);
});
// 5. play multiple rounds