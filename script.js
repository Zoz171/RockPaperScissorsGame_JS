
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice_num = Math.floor(Math.random() * 3);
    //alert(computerChoice_num);
    switch(computerChoice_num){
        case 0:
            return 'R';
        case 1:
            return 'P';
        case 2:
            return 'S';
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Pick Rock or Paper or Scissors\n1- R for Rock\n2- P for Paper\n3- S for Scissors");
    return humanChoice;
}

function concat(choice){
    if(choice === 'R') return "ROCK";
    else if(choice === 'P') return "PAPER";
    else return "SCISSORS";
}

function printChoices(humanChoice, computerChoice){
    alert(`Human Chose ${concat(humanChoice)}  vs  Computer Chose ${concat(computerChoice)}`)
}

function printScore(){
    alert(`=>Human  vs  CPU\n   ${humanScore}          ${computerScore}`);
}

function playRound(humanChoice, computerChoice){

    if(humanChoice != 'R' && humanChoice != 'P' && humanChoice != 'S'){
        alert("Please provide valid input"); return;
    }

    printChoices(humanChoice, computerChoice);

    if(humanChoice === computerChoice){
        alert("Its a Tie!!");
        return;
    }
    if(humanChoice === 'R'){
        if(computerChoice === 'S') humanScore += 1;
        else computerScore += 1;
    }
    else if(humanChoice === 'P'){
        if(computerChoice === 'R') humanScore += 1;
        else computerScore += 1;
    }

    else if(humanChoice === 'S'){
        if(computerChoice === 'P') humanScore += 1;
        else computerScore += 1;
    }

    printScore();
}

while(humanScore < 5 && computerScore < 5){
    let human = getHumanChoice();
    let cpu   = getComputerChoice();
    playRound(human, cpu);
}

if(humanScore > computerScore){
    alert("HUMAN WINS !!!");
}
else alert("CPU wins...");

