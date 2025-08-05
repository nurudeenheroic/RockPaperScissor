let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);

    switch (computerChoice) {
        case 0: 
            return 'Rock';
        case 1:
            return 'Paper';
        default:
            return 'Sccissor';
    }
}

function getHumanChoice() {
    let humanChoice = prompt("You are required to enter your choice Rock, Paper or Scissor");

    if ("Rock") {
        return "Rock";
    }
    else if ("Paper") {
        return "Paper";
    }
    else if ("Scissor") {
        return "Scissor";
    }
    else {
        alert ('Invalid input');
    }
}

function gameRound(humanChoice,computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        alert ("Rock vs Rock -> It's a tie!");
        console.log ("Rock vs Rock -> It's a tie!");
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        alert ("Rock vs Paper -> You lost this round!");
        console.log ("Rock vs Paper -> You lost this round!");
        computerScore++ ;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        alert ("Rock vs Scissor -> You won this round!");
        console.log ("Rock vs Scissor -> You won this round!");
        humanScore++ ;
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        alert ("Paper vs Paper -> It's a tie!");
        console.log ("Paper vs Paper -> It's a tie!");
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        alert ("Paper vs Scissor -> You lost this round!");
        console.log ("Paper vs Scissor -> You lost this round!");
        computerScore++ ;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        alert ("Paper vs Rock -> You won this round!");
        console.log ("Paper vs Rock -> You won this round!");
        humanScore++ ;
    }
    if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        alert ("Scissor vs Scissor -> It's a tie!");
        console.log ("Scissor vs Scissor -> It's a tie!");
    }
    else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        alert ("Scissor vs Rock -> You lost this round!");
        console.log ("Scissor vs Rock -> You lost this round!");
        computerScore++ ;
    }
    else {
        alert ("Scissor vs Paper -> You won this round!");
        console.log ("Scissor vs Paper -> You won this round!");
        humanScore++ ;
    }

}
