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

// Points'class
let points = document.querySelector(".points");
points.textContent = 0;

// Next's button class
let next = document.querySelector(".no-display");

// Pick random musics
function randomMusicSampled() {
  let randomSampled = [];
  let randomToFind = [];

  randomSampled =
    musicsSampledIn[Math.floor(Math.random() * musicsSampledIn.length)];
  for (let j = 0; j < musicsSampleOf.length; j++) {
    if (musicsSampleOf[j].title.includes(randomSampled.sampleIn)) {
      randomToFind.push(musicsSampleOf[j]);
    }
  }

  musicSampled.src = randomSampled.url;
  musicToFind.title = randomToFind[0].song;
  musicToFind.src = randomToFind[0].url;

  return [musicSampled, musicToFind];
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
      console.log(`element${element.url}`);
      console.log(musicToFind.src);
      return true;
    }
  });
  test = [answer];
  squareShuffle[0].textContent = musicsShuffle[answer].song;
  //   console.log("Good ", answer);
  //   console.log(musicToFind);

  while (test.length < 4) {
    const index = Math.floor(Math.random() * musicsShuffle.length);
    if (!test.includes(index)) {
      test.push(index);
    }
  }
  for (let i = 1; i < test.length; i++) {
    squareShuffle[i].textContent = musicsShuffle[test[i]].song;
    //   console.log(musicsShuffle[test[i]]);
  }
  squareShuffle.forEach((x) => console.log(x.textContent));

  //   return (
  //     squareShuffle[0] + squareShuffle[1] + squareShuffle[2] + squareShuffle[3]
  //   );
}


// Pick random duo answers
function randomDuoAnswers() {
  //   const [musicSampled, musicToFind] = randomMusicSampled();
  const duoAnswers = [duoOne, duoTwo];
  let duoShuffle = duoAnswers.sort((a, b) => 0.5 - Math.random());
  console.log(duoShuffle);
  const copy = [...musicsSampleOf];
  let musicsDuoShuffle = copy.sort((a, b) => 0.5 - Math.random());
  let test = [];
  for (let i = 0; i < musicsDuoShuffle.length; i++) {
    if (musicsDuoShuffle[i].url === musicToFind.url) {
      duoShuffle[0].textContent = musicsDuoShuffle[i].song;
      test.push(i);
      console.log(duoShuffle[0]);
    }
  }
  while (test.length < 2) {
    const index = Math.floor(Math.random() * musicsDuoShuffle.length);
    if (!test.includes(index)) {
      test.push(index);
    }
  }
  for (let i = 0; i < test.length; i++) {
    duoShuffle[i].textContent = musicsDuoShuffle[i].song;
  }

  return duoShuffle[0] + duoShuffle[1];
}

// Add points to Scoreboard

function addPoints(n) {
  return (points.textContent = +points.textContent + n);
}
let click = false;
function checkIfGood(button) {
  if (click === false) {
    return musicToFind.title === button.textContent;
  }
}

squares.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (checkIfGood(event.target)) {
      addPoints(3);
      click = true;
      next.classList.replace("no-display", "next");
    } else {
      click = true;
      next.classList.replace("no-display", "next");
    }
  });
});

duos.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (checkIfGood(event.target)) {
      addPoints(1);
      click = true;
      next.classList.replace("no-display", "next");
    } else {
      click = true;
      next.classList.replace("no-display", "next");
    }
  });
});

// Next song
next.addEventListener("click", () => {
  if (next.classList.contains("next")) {
    click = false;
    randomMusicSampled();
    randomSquareAnswer();
    randomDuoAnswers();
    next.classList.replace("no-display", "next");
  }
});
