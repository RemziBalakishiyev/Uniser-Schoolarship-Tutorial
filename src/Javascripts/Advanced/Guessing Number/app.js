// const mainBtn = document.querySelector(".main-btn");
// const numberInput = document.querySelector(".number-input");

// const showAlert = function () {
//   alert("Hello");
// };

// // mainBtn.addEventListener("mouseover", showAlert);

// // numberInput.addEventListener("keydown", showAlert);

// // mainBtn.onclick = showAlert;

const randomNumber = 13;

const guessBtn = document.querySelector(".guess-btn");
const numberInput = document.querySelector(".number-input");
const recorded = document.querySelector(".guesses");
const startBtn = document.querySelector(".main-btn");
const progress = document.querySelector("#progress"); // let count = 0;

let count = 0;

const clearAllTag = () => {
  numberInput.value = "";
  recorded.innerHTML = "Not Started";
  progress.value = 0;
  numberInput.removeAttribute("disabled");
  guessBtn.removeAttribute("disabled");
};

const increaseProgress = function () {
  progress.value = progress.value + 25;
  if (+progress.value == 100) {
    guessBtn.setAttribute("disabled", "disabled");
    numberInput.setAttribute("disabled", "disabled");
    recorded.innerHTML = "Game over!";
  }
};

const checkNumber = function () {
  const numberInputValue = numberInput.value;

  if (+numberInputValue < randomNumber) {
    recorded.innerHTML = "Eded kiçikdir";
    increaseProgress();
  } else if (+numberInputValue > randomNumber) {
    recorded.innerHTML = "Eded boyukdur";
    increaseProgress();
  } else {
    recorded.innerHTML = "Eded dogrudur";
    clearAllTag();
  }
};

guessBtn.addEventListener("click", checkNumber);
startBtn.addEventListener("click", clearAllTag);
