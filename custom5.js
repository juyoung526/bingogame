let user = document.querySelector("#user"),
  play = document.querySelector("#play"),
  reset = document.querySelector("#reset"),
  result = document.querySelector("#result"),
  chance = document.querySelector("#chance");

let chances = 5;
let history = [];
let gameOver = false;

let randomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
};
randomNum();

play.addEventListener("click", game);
function game() {
  console.log("게임시작");
  let userValue = user.value;

  if (userValue < 1 || userValue > 100) {
    result.textContent = "1부터 100사이의 숫자를 입력해 주세요";
    return;
  }

  console.log(history.includes(userValue));

  if (history.includes(userValue)) {
    result.textContent = "중복된 숫자입니다. 다른 숫자를 입력해 주세요";
    return;
  }

  if (userValue < computerNum) {
    console.log("up");
    result.textContent = "Up";
    document.querySelector("#img").src = "img/up.png";
  } else if (userValue > computerNum) {
    console.log("down");
    result.textContent = "Down";
    document.querySelector("#img").src = "img/down.png";
  } else {
    console.log("bingo");
    result.textContent = "Bingo";
  }

  chances = chances - 1;
  chance.textContent = `남은찬스 : ${chances}번`;

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    play.disabled = true;
  }

  user.addEventListener("focus", () => {
    user.value = "";
  });
}
