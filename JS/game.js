// iframe's ID
let musicSampled = document.getElementById("musicSampled");
let musicToFind = document.getElementById("musicToFind");

// Square's answers'ID
let squareOne = document.querySelector(".square.one");
let squareTwo = document.querySelector(".square.two");
let squareThree = document.querySelector(".square.three");
let squareFour = document.querySelector(".square.four");
let squares = document.querySelectorAll(".square.a");

// Duo's answers'ID
let duoOne = document.querySelector(".duo.one");
let duoTwo = document.querySelector(".duo.two");
let duos = document.querySelectorAll(".duo.d");

// Sampling's indication
let info = document.querySelector(".sample-appears");
let title = document.querySelector(".title");
let infoToFind = document.querySelector(".sample-appears-find");
let titleToFind = document.querySelector(".title-find");

// Points'class
let points = document.querySelector(".points");
points.textContent = 0;

// Question mark & reveal's ID
let question = document.querySelector(".question");
let reveal = document.querySelector(".hidden");

// Next's button class
let next = document.querySelector(".no-display");

// Pick random musics
function randomMusicSampled() {
  let randomSampled = [];
  let randomToFind = [];

  randomSampled =
    musicsSampledIn[Math.floor(Math.random() * musicsSampledIn.length)];
  for (let j = 0; j < musicsSampleOf.length; j++) {
    if (
      musicsSampleOf[j].title.includes(randomSampled.sampleIn) &&
      musicsSampleOf[j].hasBeenPlayed === false
    ) {
      musicsSampleOf[j].hasBeenPlayed = true;
      randomToFind.unshift(musicsSampleOf[j]);
      console.log(musicsSampleOf[j]);
    }
  }
  console.log(randomSampled);
  console.log(randomToFind);
  console.log(musicsSampledIn);
  console.log(musicsSampleOf);

  musicSampled.src = randomSampled.url;
  musicToFind.title = randomToFind[0].song;
  musicToFind.src = randomToFind[0].url;
  info.textContent = randomSampled.sample;
  title.textContent = randomSampled.song;
  infoToFind.textContent = randomToFind[0].sample;
  titleToFind.textContent = randomToFind[0].song;

  return [musicSampled, musicToFind];
}

// reset hasBeenPlayed

function reset() {
  musicsSampleOf.forEach((element) => (element.hasBeenPlayed = false));
}

// Pick random square answers
function randomSquareAnswer() {
  //   const [musicSampled, musicToFind] = randomMusicSampled();
  const squareAnswers = [squareOne, squareTwo, squareThree, squareFour];
  const copy = [...musicsSampleOf];
  let squareShuffle = squareAnswers.sort((a, b) => 0.5 - Math.random());
  let musicsShuffle = copy.sort((a, b) => 0.5 - Math.random());
  let test = [];
  const answer = musicsShuffle.findIndex((element) => {
    if (element.url === musicToFind.src) {
      return true;
    }
  });
  test = [answer];
  squareShuffle[0].textContent = musicsShuffle[answer].song;

  while (test.length < 4) {
    const index = Math.floor(Math.random() * musicsShuffle.length);
    if (!test.includes(index)) {
      test.push(index);
    }
  }
  for (let i = 1; i < test.length; i++) {
    squareShuffle[i].textContent = musicsShuffle[test[i]].song;
  }
  // squareShuffle.forEach((x) => console.log(x.textContent));

  //   return (
  //     squareShuffle[0] + squareShuffle[1] + squareShuffle[2] + squareShuffle[3]
  //   );
}

// Pick random duo answers
function randomDuoAnswers() {
  //   const [musicSampled, musicToFind] = randomMusicSampled();
  const duoAnswers = [duoOne, duoTwo];
  let duoShuffle = duoAnswers.sort((a, b) => 0.5 - Math.random());
  const copy = [...musicsSampleOf];
  let musicsDuoShuffle = copy.sort((a, b) => 0.5 - Math.random());
  let test = [];
  const answer = musicsDuoShuffle.findIndex((element) => {
    if (element.url === musicToFind.src) {
      return true;
    }
  });
  test = [answer];
  duoShuffle[0].textContent = musicsDuoShuffle[answer].song;

  while (test.length < 2) {
    const index = Math.floor(Math.random() * musicsDuoShuffle.length);
    if (!test.includes(index)) {
      test.push(index);
    }
  }
  for (let i = 1; i < test.length; i++) {
    duoShuffle[i].textContent = musicsDuoShuffle[test[i]].song;
  }

  //   return duoShuffle[0] + duoShuffle[1];
}

// Add points to Scoreboard

function addPoints(n) {
  return (points.textContent = +points.textContent + n);
}

// Control good/bad answer
let click = false;
function checkIfGood(button) {
  if (click === false) {
    return musicToFind.title === button.textContent;
  }
}

squares.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (checkIfGood(event.target)) {
      question.classList.replace("question", "no-display");
      reveal.classList.replace("hidden", "reveal")
      addPoints(3);
      click = true;
      next.classList.replace("no-display", "next");
    } else {
      reveal.classList.replace("hidden", "reveal")
      question.classList.replace("question", "no-display")
      click = true;
      next.classList.replace("no-display", "next");
    }
  });
});

duos.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (checkIfGood(event.target)) {
      reveal.classList.replace("hidden", "reveal")
      question.classList.replace("question", "no-display")
      addPoints(1);
      click = true;
      next.classList.replace("no-display", "next");
    } else {
      reveal.classList.replace("hidden", "reveal")
      question.classList.replace("question", "no-display")
      click = true;
      next.classList.replace("no-display", "next");
    }
  });
});

// Next song & end  game
let counter = 0;
next.addEventListener("click", () => {
  if (next.classList.contains("next") && counter <= 10) {
    click = false;
    reveal.classList.replace("reveal", "hidden")
    question.classList.replace("no-display","question")
    next.classList.replace("next", "no-display");
    squareChoices.id = "noSquareAnswers";
    squareButton.classList.replace("no-display", "square");
    duoButton.classList.replace("no-display", "duo");
    squareButton.classList.replace("no-display", "square");
    duoButton.classList.replace("no-display", "duo");
    duoChoices.id = "noDuoAnswers";
    counter++;
    randomMusicSampled();
    randomSquareAnswer();
    randomDuoAnswers();
  }
  if (counter > 10) {
    choiceGame.id = "noGame";
    squareChoices.id = "noSquareAnswers";
    duoChoices.id = "noDuoAnswers";
    next.classList.replace("next", "no-display");
  }
});
