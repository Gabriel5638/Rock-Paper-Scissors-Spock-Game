const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const buttons= document.querySelectorAll('.btn-circle');

console.log(pickRandomChoice());

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}