let user =0;
let bot = 0; 
let playerSelection;
const elements = document.querySelectorAll('.el');
const userpoints = document.querySelector('.user');
const botpoints = document.querySelector('.bot');
const result = document.querySelector('.result');
const winning = document.querySelector('.winning');
const button = document.createElement('button');
const reset = document.querySelector('.reset');
elements.forEach((p)=>{
    p.addEventListener('click', () => {
        if(user<5 && bot<5){
        playerSelection = p.textContent;
        game();
        }
        });
});
function computerPlay(){
  let rand = Math.floor(Math.random() * 3) + 1;
    switch(rand){
      case 1: return "rock";
      case 2: return "paper";
      case 3: return "scissors";
    }
  }

function playRound(playerSelection, computerSelection) {
      if(playerSelection == computerSelection){
        return "You tied!";
      }
      if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
          user++;
          return "You win! Rock beats scissors";
        }
        else if(computerSelection == "paper"){
          bot++;
          return "You lose! Paper beats rock";
        }
      }
      else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
          bot++;
          return "You lose! Scissors beat paper";
        }
        else if(computerSelection == "rock"){
          user++;
          return "You win! Paper beats rock";
        }
      }
      else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
          bot++;
          return "You lose! Rock beats scissors";
        }
        else if(computerSelection == "paper"){
          user++;
          return "You win! Scissors beat paper";
        }
      }
  }

function game(){
    computerSelection = computerPlay();
    winning.textContent = playRound(playerSelection, computerSelection);
    userpoints.textContent = user;
    botpoints.textContent = bot;
    if (user===5 || bot===5){
        if(user===5){
            result.textContent = "YOU WON";    
          }
        else result.textContent = "YOU LOST";
        button.textContent = "Play again";
        button.classList.add('btn');
        button.addEventListener('click', ()=> window.location.reload());
        reset.appendChild(button);
    }   
}
