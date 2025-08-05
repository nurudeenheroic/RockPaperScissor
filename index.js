let humanScore = 0, computerScore = 0;

function getComputerScore() {
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