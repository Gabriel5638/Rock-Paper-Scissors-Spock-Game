const buttons= document.querySelectorAll('.btn-circle');

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
  button.addEventListener('click',() => {
     userChoice = button.getAttribute('data-choice');

     console.log(userChoice);
    }); 
});

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}