
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice_num = Math.floor(Math.random() * 3);
    //console.log(computerChoice_num);
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
    console.log(`Human Chose ${concat(humanChoice)}  vs  Computer Chose ${concat(computerChoice)}`)
}

function printScore(){
    console.log("=>Human  vs  CPU");
    console.log(`   ${humanScore}          ${computerScore}`);
}

function playRound(humanChoice, computerChoice){

    printChoices(humanChoice, computerChoice);

    if(humanChoice === computerChoice){
        console.log("Its a Tie!!");
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
        if(computerChoice === 'R') humanScore += 1;
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
    console.log("HUMAN WINS !!!");
}
else console.log("CPU wins...");

