
let humanCurrScore = 0;
let CPUCurrScore = 0;

let selection = {
    'R':'🪨',
    'P':'🧻',
    'S':'✂️',
    '🪨':'R',
    '🧻':'P',
    '✂️':'S',
    'ROCK' :{
        'letter': 'R',
        'emoji': '🪨',
    },
    'PAPER': {
        'letter':'P',
        'emoji' : '🧻',
    },
    'SCISSORS' : {
        'letter': 'S',
        'emoji': '✂️',
    },
};

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
    let humanChoice = document.querySelector(".player.curr");
    // console.log(selection[humanChoice.textContent]);
    return selection[humanChoice.textContent];
}

function concat(choice){
    if(choice === 'R') return "ROCK";
    else if(choice === 'P') return "PAPER";
    else return "SCISSORS";
}

function printChoices(humanChoice, computerChoice){
    console.log(`human : ${humanChoice}, cpu: ${computerChoice}`);
    // alert(`Human Chose ${concat(humanChoice)}  vs  Computer Chose ${concat(computerChoice)}`)
}

function printScore(){
    alert(`=>Human  vs  CPU\n   ${humanCurrScore}          ${CPUCurrScore}`);
}

function updateScore(){
    let human_score = document.querySelector("#human-score");
    let computer_score = document.querySelector("#cpu-score");
    human_score.textContent = `Human: ${humanCurrScore}`;
    computer_score.textContent = `CPU: ${CPUCurrScore}`
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(computerChoice);

    let cpu_selection = document.querySelector(".cpu");
    cpu_selection.textContent = selection[computerChoice];

    // if(humanChoice != 'R' && humanChoice != 'P' && humanChoice != 'S'){
    //     alert("Please provide valid input"); return;
    // }

    printChoices(humanChoice, computerChoice);

    if(humanChoice === computerChoice){
        alert("Its a Tie!!");
        return;
    }
    if(humanChoice === 'R'){
        if(computerChoice === 'S') humanCurrScore += 1;
        else CPUCurrScore += 1;
    }
    else if(humanChoice === 'P'){
        if(computerChoice === 'R') humanCurrScore += 1;
        else CPUCurrScore += 1;
    }

    else if(humanChoice === 'S'){
        if(computerChoice === 'P') humanCurrScore += 1;
        else CPUCurrScore += 1;
    }

    // printScore();
    updateScore();

}

// while(humanCurrScore < 5 && CPUCurrScore < 5){
//     let human = getHumanChoice();
//     let cpu   = getComputerChoice();
//     playRound(human, cpu);
// }

// if(humanCurrScore > CPUCurrScore){
//     alert("HUMAN WINS !!!");
// }
// else alert("CPU wins...");

let rock_button = document.querySelector("#rock");
let paper_button = document.querySelector("#paper");
let sci_button = document.querySelector("#scissors");

rock_button.onclick = () => {
    let humanChoice = document.querySelector(".player.curr");
    humanChoice.textContent = rock_button.textContent;
}
paper_button.onclick = () => {
    let humanChoice = document.querySelector(".player.curr");
    humanChoice.textContent = paper_button.textContent;
}
sci_button.onclick = () => {
    let humanChoice = document.querySelector(".player.curr");
    humanChoice.textContent = sci_button.textContent;
}

let play_button = document.querySelector("#play");
play_button.onclick = () => { playRound() };

// alert("im still here");