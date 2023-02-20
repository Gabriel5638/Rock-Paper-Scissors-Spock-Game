// Define the game rules
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"]
  };
  
  // Get the game buttons and score elements
  const buttons = document.querySelectorAll(".game-btn");
  const userScoreEl = document.getElementById("player-score");
  const computerScoreEl = document.getElementById("computer-score");
  const gameResultEl = document.getElementById("game-result");
  
  let userScore = 0;
  let computerScore = 0;
  
  // Define a function to update the score and check for game end
  function updateScore(result) {
    if (result === "win") {
      userScore++;
      if (userScore === 6) {
        gameResultEl.textContent = "You win!";
        disableButtons();
      }
    } else if (result === "lose") {
      computerScore++;
      if (computerScore === 6) {
        gameResultEl.textContent = "You lose!";
        disableButtons();
      }
    }
  
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
  }
  
  // Define a function to check the game result
  function checkResult(userChoice) {
    // Generate a random computer choice
    const computerChoice = buttons[Math.floor(Math.random() * buttons.length)].dataset.type;
  
    // Check the result
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
  
  // Add event listeners to the game buttons
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
  
  // Disable game buttons
  function disableButtons() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
  