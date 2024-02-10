console.log(`Welcome to the Rock, Paper, Scissors game!
  My name is Darling_Code.👲
  Follow the instructions to play the Game ☝😇
  
  To start the game, in the console, type: start_game();
  then press 'Enter' 👩‍💻
  `);

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

const user_feedback = {
  userWin: "You win!😉",
  computerWin: "You Lose!🤖",
  draw: "👔, It's a Tie!",
  bomb: "You dummy🤡! Enter valid input 😂",
  quit: "Looser!😆. 🏃‍♂️🏃‍♀️WHY ARE YOU RUNNING? ",
};

const input_validation = (userInput) => {
  if (typeof userInput === "string") {
    const text_input = userInput.toLowerCase().trim();

    if (text_input === "rock") return "rock";
    else if (text_input === "paper") return "paper";
    else if (text_input === "scissors") return "scissors";
    else return `${user_feedback.bomb}`;
  }
};

const player_selection = () => {
  const user_input = prompt(`Make your 5️⃣ Moves Buddy!
  Enter 1️⃣ of the following options:
  Rock ⛰, Paper 📃 or Scissors ✂.
  Best of luck! 👲🤞😻 `);

  if (user_input === null) {
    return `${user_feedback.quit}`;
  } else {
    return input_validation(user_input);
  }
};

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `${user_feedback.draw}\n
    Player's move 😇: ${playerSelection}
    Computer's move🤖: ${computerSelection}`;
  } else if (playerSelection === "null") {
    return `${user_feedback.quit}`;
  } else if (playerSelection === "rock") {
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

const game = () => {
  for (let i = 1; i <= 5; i) {
    const playerSelection = player_selection();
    const computerSelection = computer_play();
    if (playerSelection !== user_feedback.bomb) {
      i++;
    }
    if (playerSelection === user_feedback.quit) {
      console.log(`WHY LEAVING?!😭`);
      break;
    }
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
    You lost buddy!
    The 🤖 has beaten you. You're JUST a potato🍠 at this game😂`);
  } else if (userScore === computerScore) {
    console.log(`
    😇Player Score:${userScore}
    🤖Computer Score:${computerScore}
    Draw, No one Wins! 0️⃣ - 0️⃣ 😂`);
  }
};

const start_game = () => {
  const choice = prompt(
    "👩‍💻Type 'START' to begin the game or 'EXIT' to quit!👲"
  );
  if (choice === null) {
    console.log(`You didn't confirm to start the game. ${user_feedback.quit}`);
  } else {
    if (choice.toLowerCase().trim() === "start") {
      const start_confirmation = prompt(
        `😤YOU'RE READY?! 👩‍💻Type 'START GAME' to begin playing✨🤟😻`
      );
      if (start_confirmation === null) {
        console.log(
          `You didn't confirm to start the game. ${user_feedback.quit}`
        );
      } else {
        if (start_confirmation.toLowerCase().trim() === "start game") {
          game();
        } else {
          console.log(`${user_feedback.bomb}`);
          start_game();
        }
      }
    } else if (choice.toLowerCase().trim() === "exit") {
      console.log("Thank you for playing! Goodbye!🖐👲");
    } else {
      console.log(`${user_feedback.bomb}`);
      start_game();
    }
  }
};
