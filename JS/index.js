// All buttons elements by ID
const launchButton = document.getElementById("launch");
const rulesButton = document.getElementById("rules");
const whatButton = document.getElementById("what");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");
const squareButton = document.getElementById("square");
const duoButton = document.getElementById("duo");

// Sections elements for displaying
const header = document.getElementById("intro");
const gameTime = document.getElementById("game-none");
const level = document.getElementById("level");
const vinyl = document.querySelector(".vinyl");
const choiceGame = document.getElementById("noGame");
const squareChoices = document.getElementById("noSquareAnswers");
const duoChoices = document.getElementById("noDuoAnswers");

// Launching & restart the game 
launchButton.addEventListener("click", () => {
  if (launchButton.classList.contains("start")) {
    launchButton.textContent = "Restart?";
    launchButton.classList.replace("start", "restart");
    header.id = "no-intro";
    vinyl.classList.replace("vinyl", "no-display");
    level.id = "no-level";
    choiceGame.id = "game";
    randomMusicSampled();
    randomSquareAnswer()
    // randomDuoAnswers()
  } else if (launchButton.classList.contains("restart")) {
    launchButton.textContent = "Start the game!";
    launchButton.classList.replace("restart", "start");
    header.id = "intro";
    vinyl.classList.replace("no-display", "vinyl");
    level.id = "level";
    choiceGame.id = "noGame";
    squareChoices.id = "noSquareAnswers";
    duoChoices.id = "noDuoAnswers";
    squareButton.classList.replace("no-display", "square" );
    duoButton.classList.replace("no-display", "duo");
    click = false;
    points.textContent = 0;
  }
});

// Picking choices for "Square"
squareButton.addEventListener("click", () => {
  if (squareButton.classList.contains("square")) {
    squareChoices.id = "squareAnswers";
    squareButton.classList.replace("square", "no-display");
    duoButton.classList.replace("duo", "no-display");
  }
});

// Picking choices for "Duo"
duoButton.addEventListener("click", () => {
  if (duoButton.classList.contains("duo")) {
    squareButton.classList.replace("square", "no-display");
    duoButton.classList.replace("duo", "no-display");
    duoChoices.id = 'duoAnswers'
  }
});
  
  // Pick random answers
  
  // Add points to Scoreboard
  
  