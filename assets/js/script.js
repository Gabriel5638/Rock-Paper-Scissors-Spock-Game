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
            // draw
         } else if (
                 (userChoice === )

         )

}



function updateScore(value) {
   points += value;

   scoreEl.innerText = points;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}