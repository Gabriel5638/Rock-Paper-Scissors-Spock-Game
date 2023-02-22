//Add functions
const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('points');
const main = document.getElementById('main');
const choosing = document.getElementById('choosing');
const replay = document.getElementById('replay');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const win = document.getElementById('win');

//Add modal buttons & functions
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

//Animate buttons 
const rockElement = document.querySelector('.btn-rock');
rockElement.classList.add('animate__bounceIn');
const paperElement = document.querySelector('.btn-paper');
paperElement.classList.add('animate__bounceIn');
const scissorsElement = document.querySelector('.btn-scissors');
scissorsElement.classList.add('animate__bounceIn');
const lizardElement = document.querySelector('.btn-lizard');
lizardElement.classList.add('animate__bounceIn');
const spockElement = document.querySelector('.btn-spock');
spockElement.classList.add('animate__bounceIn');




// Rpsls choices and click listener
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let points = 0;
let userChoice;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice');


    checkWinner();
  });
});


// Audio and click event listener

const rockSound = new Audio('./assets/sounds/rock.mp3');
const paperSound = new Audio('./assets/sounds/paper.mp3');
const scissorsSound = new Audio('./assets/sounds/scissors.mp3');
const lizardSound = new Audio('./assets/sounds/lizard.mp3');
const spockSound = new Audio('./assets/sounds/spock.mp3');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const choice = this.dataset.choice;

    switch (choice) {
      case 'rock':
        rockSound.currentTime = 0;
        rockSound.play();
        break;
      case 'paper':
        paperSound.currentTime = 0;
        paperSound.play();
        break;
      case 'scissors':
        scissorsSound.currentTime = 0;
        scissorsSound.play();
        break;
      case 'lizard':
        lizardSound.currentTime = 0;
        lizardSound.play();
        break;
      case 'spock':
        spockSound.currentTime = 0;
        spockSound.play();
        break;
      default:
        break;
    }
  });
});




replay.addEventListener('click', () => {
  //Show main hide choosing 
  main.style.display = 'flex';
  choosing.style.display = 'none';
});

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


function checkWinner() {
  const computerChoice = pickRandomChoice();

  //Update choices

  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    //Draw
    win.innerText = 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'rock' && computerChoice === 'lizard') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'paper' && computerChoice === 'spock') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'scissors' && computerChoice === 'lizard') ||
    (userChoice === 'lizard' && computerChoice === 'spock') ||
    (userChoice === 'lizard' && computerChoice === 'paper') ||
    (userChoice === 'spock' && computerChoice === 'rock') ||
    (userChoice === 'spock' && computerChoice === 'scissors')
  ) { //User won
    win.innerText = 'win';
    updateScore();

  } else {
    //User lost
    win.innerText = 'lose';
  }

  { //Show choosing hide main
    main.style.display = 'none';
    choosing.style.display = 'flex';
  }


}

//Add gif Index
var gifs = ['./assets/gifs/heads.gif', './assets/gifs/lean.gif', './assets/gifs/nod.gif', './assets/gifs/picard.gif', './assets/gifs/rain.gif',
  './assets/gifs/scream.gif', './assets/gifs/smile.gif', './assets/gifs/smirk.gif', 'assets/gifs/spock.gif', './assets/gifs/star.gif',
  './assets/gifs/toast.gif', './assets/gifs/yes.gif', './assets/gifs/zoe.gif'
];
var currentGifIndex = 0;

function updateScore() {
  points += 1;

  scoreEl.innerText = points;

  if (points === 6) {
    currentGifIndex = Math.floor(Math.random() * gifs.length);
    Swal.fire({
      title: 'Congratulations!',
      text: 'You beat the game!',
      imageUrl: gifs[currentGifIndex],
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Winning gif'
    });
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    points = 0;
    scoreEl.innerText = points;
  }
}






//Pick random button
function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
// reset class
function updateSelection(selectionEl, choice) {
  selectionEl.classList.remove('btn-rock');
  selectionEl.classList.remove('btn-paper');
  selectionEl.classList.remove('btn-scissors');
  selectionEl.classList.remove('btn-lizard');
  selectionEl.classList.remove('btn-spock');

  //add image
  const img = selectionEl.querySelector('img');
  selectionEl.classList.add('btn-' + choice);
  img.src = './assets/images/' + choice + '.svg';
  img.alt = choice;

}