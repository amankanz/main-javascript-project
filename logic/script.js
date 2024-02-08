// ROCK PAPER SCISSORS Game!!! 👨‍💻👩‍💻

// Computer Move / Computer_selection
const computer_play = () => {
  const random_num = Math.floor(Math.random() * 3);

  switch (random_num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
};

// Feedback Messages to the user
const user_feedback = {
  userWin: "You win!😉",
  computerWin: "You Lose!🤖",
  draw: "👔, It's a Tie!",
  bomb: "You dummy🤡! Enter valid input 😂",
  quit: "Looser!😆. 🏃‍♂️🏃‍♀️WHY ARE YOU RUNNING? ",
};

// Validation
function input_validation(userInput) {
  if (typeof userInput === "string") {
    const set_lower_case = userInput.toLowerCase();

    if (set_lower_case === "rock") return "rock";
    else if (set_lower_case === "paper") return "paper";
    else if (set_lower_case === "scissors") return "scissors";
    else return `${user_feedback.bomb}`;
  }
}

// User Input
function player_selection() {
  const user_input = prompt(`Make your 5️⃣ Moves Buddy!
  Enter 1️⃣ of the following options:
  Rock ⛰, Paper 📃 or Scissors ✂.
  Best of luck! 👲🤞😻 `);

  if (user_input === null) {
    return `${user_feedback.quit}`;
  } else {
    return input_validation(user_input);
  }
}

// SCORES
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  // Tie
  if (playerSelection === computerSelection) {
    return `${user_feedback.draw}\n
    Player's move 😇: ${playerSelection}
    Computer's move🤖: ${computerSelection}`;
  } else if (playerSelection === "null") {
    return `${user_feedback.quit}`;
  } else if (playerSelection === "rock") {
    // Rock
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return `${user_feedback.computerWin} Paper beats Rock`;
      } else {
        userScore++;
        return `${user_feedback.userWin} Rock beats ${computerSelection}`;
      }
    }
  } else if (playerSelection === "paper") {
    // Paper
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        return `${user_feedback.computerWin} Scissors beats Paper`;
      } else {
        userScore++;
        return `${user_feedback.userWin} Paper beats ${computerSelection}!`;
      }
    }
  } else if (playerSelection === "scissors") {
    // Scissors
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        return `${user_feedback.computerWin} Rock beats Scissors`;
      } else {
        userScore++;
        return `${user_feedback.userWin} Scissors beats ${computerSelection}!`;
      }
    }
  } else {
    return playerSelection;
  }
}

// Game
function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = player_selection();
    const computerSelection = computer_play();

    console.log(playRound(playerSelection, computerSelection));
  }

  if (userScore > computerScore) {
    console.log(`
    Player Score:${userScore}
    Computer Score:${computerScore}
    Excellent 👌 buddy,
    you're 👍 good at this 👲🤟😻✨`);
  } else if (userScore < computerScore) {
    console.log(`
    Player Score:${userScore}
    Computer Score:${computerScore}
    Lost buddy!
    The 🤖 has beaten you. You're JUST a potato🍠 at this game😂`);
  } else if (userScore === computerScore) {
    console.log(`
    😇Player Score:${userScore}
    🤖Computer Score:${computerScore}
    Draw! 0️⃣ - 0️⃣ 😂`);
  }
}

game();
