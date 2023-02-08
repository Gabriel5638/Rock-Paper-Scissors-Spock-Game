const buttons= document.querySelectorAll('.pick');
const scoreEl = document.getElementById('points');
const main = document.getElementById('main');
const choosing = document.getElementById('choosing');
const replay = document.getElementById('replay');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const win = document.getElementById('win')

//modal buttons & functions
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

//animate buttons 
const rockElement = document.querySelector('.btn-rock');
rockElement.classList.add('bounceIn');
const paperElement = document.querySelector('.btn-paper');
paperElement.classList.add('bounceIn');
const scissorsElement = document.querySelector('.btn-scissors');
scissorsElement.classList.add('bounceIn');
const lizardElement = document.querySelector('.btn-lizard');
lizardElement.classList.add('bounceIn');
const spockElement = document.querySelector('.btn-spock');
spockElement.classList.add('bounceIn');


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

openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
   modal.style.display = 'none';
});


 
function checkWinner() {
         const computerChoice = pickRandomChoice();

         //update choices

         updateSelection(user_select, userChoice)
         updateSelection(computer_select, computerChoice)

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
                     updateScore();

                  } else {
              //user lost
              win.innerText = 'lose';

              //add button animation here too
            }

           { //show choosing hide main
            main.style.display = 'none';
            choosing.style.display = 'flex';
           }


         }

   
 
 



function updateScore() {
   points += 1;

   scoreEl.innerText = points;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
   }
     // reset class
   function updateSelection(selectionEl, choice){
      selectionEl.classList.remove('btn-rock');
      selectionEl.classList.remove('btn-paper');
      selectionEl.classList.remove('btn-scissors');
      selectionEl.classList.remove('btn-lizard');
      selectionEl.classList.remove('btn-spock');
       
      //add image
      const img = selectionEl.querySelector('img');
      selectionEl.classList.add(`btn-${choice}`);
      img.src = `/assets/images/${choice}.svg`;
      img.alt = choice;

      }



