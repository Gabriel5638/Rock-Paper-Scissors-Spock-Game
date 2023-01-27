const buttons= document.querySelectorAll('.btn-circle');
const scoreEl = document.getElementById('points');

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let points = 0;
let userChoice = undefined;

buttons.forEach(button => {
  button.addEventListener('click',() => {
     userChoice = button.getAttribute('data-choice');

     checkWinner();
    }); 
});

function checkWinner() {
         const computerChoice = pickRandomChoice();

         if (userChoice === computerChoice) {
            //draw
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
                     updateScore(1);

                  } else {
              //user lost
              updateScore(-1);
            }
         }
      




function updateScore(value) {
   points += value;

   scoreEl.innerText = points;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
   }