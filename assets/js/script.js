const buttons= document.querySelectorAll('.pick');
const scoreEl = document.getElementById('points');
const main = document.getElementById('main');
const choosing = document.getElementById('choosing');
const replay = document.getElementById('replay');
const player_select = document.getElementById('player_select');
const computer_select = document.getElementById('computer_select');
const win = document.getElementById('win')

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let points = 0;
let userChoice = undefined;

 buttons.forEach(button => {
  button.addEventListener('click',() => {
     userChoice = button.getAttribute('data-choice');


     checkWinner();
    }); 
});


replay.addEventListener('click', () => {
 //show main hide choosing 
   main.style.display = 'flex';
   choosing.style.display = 'none'
});



 
function checkWinner() {
         const computerChoice = pickRandomChoice();

         if (userChoice === computerChoice) {
            //draw
            win.innerText = 'draw';
         } 
         else if (
                  (userChoice === 'rock' && computerChoice === 'scissors')  ||
                  (userChoice === 'rock' && computerChoice === 'lizard')    ||
                  (userChoice === 'paper' && computerChoice ==='rock' )     ||
                  (userChoice === 'paper' && computerChoice === 'spock')    ||
                  (userChoice === 'scissors' && computerChoice === 'paper') ||
                  (userChoice === 'scissors' && computerChoice ==='lizard') ||
                  (userChoice === 'lizard' && computerChoice === 'spock' )  ||
                  (userChoice === 'lizard' && computerChoice === 'paper')   ||
                  (userChoice === 'spock' && computerChoice ==='rock')      ||
                  (userChoice === 'spock' && computerChoice === 'scissors' ) 
                  ) 
                  {  //user won
                     win.innerText = 'win';
                     updateScore(1);

                  } else {
              //user lost
              win.innerText = 'lose';
              updateScore(-1);
            }

            //show choosing hide main
            main.style.display = 'none';
            choosing.style.display = 'flex';


         }

   
 
 



function updateScore(value) {
   points += value;

   scoreEl.innerText = points;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
   }

   function updateSelection(selectionEl, choice){
      selectionEl.classList.remove('btn-rock');
      selectionEl.classList.remove('btn-paper');
      selectionEl.classList.remove('btn-scissors');
      selectionEl.classList.remove('btn-lizard');
      selectionEl.classList.remove('btn-spock');
       
      const img = selectionEl.querySelector('img');
      selectionEl.classList.add(`btn-${choice}`);
      img.src ='./assets/images-${select}.svg';
      img.alt = select;

      }