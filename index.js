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


