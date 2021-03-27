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

function playRound(play, comp){

        if (play == "rock"){
            if (comp == "rock"){
                return "It's a tie!";
            }

            else if (comp == "paper"){
                return "You lose! Paper beats Rock";
            }

            else if(comp == "scissors"){
                return "You win! Rock beats Scissors ";
            }
        }
        
        if (play == "paper"){
            if (comp == "rock"){
                return "You win! Paper beats Rock";
            }

            else if (comp == "paper"){
                return "It's a tie!";
            }

            else if(comp == "scissors"){
                return "You lose! Scissors beat Paper";
            }
        }
        

        if (play == scissors){
            if (comp == rock){
                return "You lose! Rock beats Scissors";
            }

            else if (comp == paper){
                return "You win! Scissors beats paper";
            }

            else if(comp == scissors){
                return "It's a tie!";
            }
        }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log (computerSelection);
console.log(playRound(playerSelection, computerSelection));