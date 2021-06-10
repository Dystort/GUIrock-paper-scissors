let playerVictoriesCount = 0;
let playerVictoriesCounter = document.querySelector('#player_victories');

let computerVictoriesCount = 0;
let computerVictoriesCounter = document.querySelector('#computer_victories');

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {playRound("rock")});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {playRound("paper")});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {playRound("scissors")});





function computerPlay(){   //return the string "rock", "paper", or "scissors" randomly
    let a = Math.random();
    if (a <= .33){
        return "rock";
    }
    else if (a > .33 && a <= .66){
        return "paper";
    }
    else if (a > .66){
        return "scissors";
    }
}

function playRound(play){ //compare user input with computer selection to determine victor
        

        let comp = computerPlay();
        const container = document.querySelector('#battles');
        const battleresult = document.createElement('p');


        if (play == "rock"){
            if (comp == "rock"){
                battleresult.textContent = "Tie!";
                container.appendChild(battleresult);
                
            }

            else if (comp == "paper"){
                battleresult.textContent = "Paper beats Rock, you lose!";
                container.appendChild(battleresult);
                computerVictoriesCount++;
                computerVictoriesCounter.textContent = computerVictoriesCount;


            }

            else if(comp == "scissors"){
                battleresult.textContent = "Rock Beats Paper, you win!";
                container.appendChild(battleresult);
                playerVictoriesCount++;
                playerVictoriesCounter.textContent = playerVictoriesCount;

            }
        }
        
        if (play == "paper"){
            if (comp == "rock"){
                battleresult.textContent = "Paper beats Rock, you win!";
                container.appendChild(battleresult);
                playerVictoriesCount++;
                playerVictoriesCounter.textContent = playerVictoriesCount;
            }

            else if (comp == "paper"){
                battleresult.textContent = "Tie!";
                container.appendChild(battleresult);
            }

            else if(comp == "scissors"){
                battleresult.textContent = "Scissors beat Paper, you lose!";
                container.appendChild(battleresult);
                computerVictoriesCount++;
                computerVictoriesCounter.textContent = computerVictoriesCount;
            }
        }
        

        if (play == "scissors"){
            if (comp == "rock"){
                battleresult.textContent = "Rock beats Scissors, you lose!";
                container.appendChild(battleresult);
                computerVictoriesCount++;
                computerVictoriesCounter.textContent = computerVictoriesCount;
            }

            else if (comp == "paper"){
                battleresult.textContent = "Scissors beat Paper, you win!";
                container.appendChild(battleresult);
                playerVictoriesCount++;
                playerVictoriesCounter.textContent = playerVictoriesCount;
            }

            else if(comp == "scissors"){
                battleresult.textContent = "Tie!";
                container.appendChild(battleresult);
            }
        }
        if(playerVictoriesCount >= 3){
            alert("YOU ARE VICTORIOUS!");
        }
        else if(computerVictoriesCount >= 3){
            alert("YOU HAVE BEEN DEFEATED!");
        }
}

