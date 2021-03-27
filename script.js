let playerSelection; 
let computerSelection;
const rounds = 5;
let gameResult;
let finalScore = 0;

for (i=0; i < rounds; i++){
    playerSelection = window.prompt("Choose your weapon: rock, paper, or scissors");
    computerSelection = computerPlay();
    gameResult = playRound(playerSelection, computerSelection);
    console.log(gameResult);
    
    switch (gameResult){
        case "It's a tie!":
            i--;
            break;

        case "You win!*":
            finalScore++;
            break;
        
        case "You lose!*":
            break;
    }


}

showResults(finalScore);






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

function playRound(play, comp){ //compare user input with computer selection to determine victor

        if (play == "rock"){
            if (comp == "rock"){
                return "It's a tie!";
            }

            else if (comp == "paper"){
                return "You lose! Paper beats Rock";
            }

            else if(comp == "scissors"){
                finalScore++;
                return "You win! Rock beats Scissors ";
            }
        }
        
        if (play == "paper"){
            if (comp == "rock"){
                finalScore++;
                return "You win! Paper beats Rock";
            }

            else if (comp == "paper"){
                return "It's a tie!";
            }

            else if(comp == "scissors"){
                return "You lose! Scissors beat Paper";
            }
        }
        

        if (play == "scissors"){
            if (comp == "rock"){
                return "You lose! Rock beats Scissors";
            }

            else if (comp == "paper"){
                finalScore++;
                return "You win! Scissors beats paper";
            }

            else if(comp == "scissors"){
                return "It's a tie!";
            }
        }
}
function showResults(a){

    switch(a){
        case 0:
            console.log("You won 0 matches. Better luck next time!");
            break;

        case 1:
            console.log("You won 1 match. Try again!");
            break;

        case 2:  
            console.log("You won 2 matches. So close!");
            break;

        case 3:  
            console.log("You won 3 matches. Victory!");
            break;

        case 4:  
            console.log("You won 4 matches. Decisive victory!");
            break;

        case 5: 
            console.log("You won 5 matches. Perfect record!");
    }
}
