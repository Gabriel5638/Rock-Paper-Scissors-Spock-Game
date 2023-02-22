// Game rules
const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};

// Game buttons and score elements
const buttons = document.querySelectorAll(".game-btn");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");



let playerScore = 0;
let computerScore = 0;




// Add win/loose gif 
var gifs = ['./assets/gifs/heads.gif', './assets/gifs/lean.gif', './assets/gifs/nod.gif', './assets/gifs/picard.gif', './assets/gifs/rain.gif',
  './assets/gifs/scream.gif', './assets/gifs/smile.gif', './assets/gifs/smirk.gif', 'assets/gifs/spock.gif', './assets/gifs/star.gif',
  './assets/gifs/toast.gif', './assets/gifs/yes.gif', './assets/gifs/zoe.gif'
];
var currentGifIndex = 0;

function updateScore(outcome) {
  if (outcome === "win") {
    playerScore++;
    playerScoreEl.innerText = playerScore;
  } else if (outcome === "lose") {
    computerScore++;
    computerScoreEl.innerText = computerScore;
  }

  if (playerScore === 6) {
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
    playerScore = 0;
    playerScoreEl.innerText = playerScore;
    computerScore = 0;
    computerScoreEl.innerText = computerScore;
  } else if (computerScore === 6) {
    currentGifIndex = Math.floor(Math.random() * gifs.length);
    Swal.fire({
      title: 'Game Over!',
      text: 'Computer beat you!',
      imageUrl: 'assets/images/lose.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'image'
    });
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    playerScore = 0;
    playerScoreEl.innerText = playerScore;
    computerScore = 0;
    computerScoreEl.innerText = computerScore;
  }
}

// Check game result
function checkResult(userChoice) {
  // Generate a random computer choice
  const computerChoice = buttons[Math.floor(Math.random() * buttons.length)].dataset.type;

  // Check the win/loss result
  if (userChoice === computerChoice) {
    return "draw";
  } else if (rules[userChoice].includes(computerChoice)) {
    updateScore("win");
    return "win";
  } else {
    updateScore("lose");
    return "lose";
  }
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = checkResult(button.dataset.type);

    // Add or remove classes to show the game result
    if (result === "draw") {
      button.classList.add("draw");
      setTimeout(() => {
        button.classList.remove("draw");
      }, 1000);
    } else if (result === "win") {
      button.classList.add("win");
      setTimeout(() => {
        button.classList.remove("win");
      }, 1000);
    } else {
      button.classList.add("lose");
      setTimeout(() => {
        button.classList.remove("lose");
      }, 1000);
    }
  });
});