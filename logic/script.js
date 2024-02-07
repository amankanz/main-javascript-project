/*
Begin with a function called
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
function in the game to make the computer’s play.
 */

/*
Make your function’s playerSelection parameter case-insensitive (so users can
input rock, ROCK, RocK or any other variation).
*/

// Computer Move / Computer_selection
const computer_play = () => {
  const random_num = Math.floor(Math.random() * 3);

  switch (random_num) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
};

// Feedback Messages to the user
const user_feedback = {
  userWin: "You win!",
  computerWin: "Computer wins!",
  draw: "TIE!",
  bomb: "You dummy! Enter valid input 😂",
  quit: "Looser!😆. 🏃‍♂️🏃‍♀️WHY ARE YOU RUNNING? ",
};

// User Input Validation
const user_input_validation = () => {
  const user_input = prompt(`Make your Move Buddy!
  Enter one of the following options:
  Rock, Paper or Scissors.
  Good luck! 👲🤞 `);

  if (user_input === null) return `${user_feedback.quit}`;
  else if (typeof user_input === "string") {
    const set_lower_case = user_input.toLowerCase();

    if (set_lower_case === "rock") return "rock";
    else if (set_lower_case === "paper") return "paper";
    else if (set_lower_case === "scissors") return "scissors";
    else return `${user_feedback.bomb}`;
  }
};

// User Move / user_selection
const player_selection = () => {
  const user_selection = user_input_validation();
  return user_selection;
};

// Play round
const play_round = (playerSelection, computerSelection) => {
  console.log(playerSelection);
  console.log(computerSelection);
};

play_round(user_input_validation(), computer_play());
