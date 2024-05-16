let result = document.querySelector("#result");
let user = document.querySelector("#user");
let play = document.querySelector("#play");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", game);

function game(event) {
  event.preventDefault();

  let userNum = user.value;
  console.log(userNum);

  if (userNum < computerNum) {
    result.innerText = "up";
  } else if (userNum > computerNum) {
    result.innerText = "down";
  } else {
    result.textContent = "bingo";
  }
}

/* 
랜덤숫자만들기
let num = Math.random();
console.log(Math.floor(num * 100 + 1));

입력한 값을 가지고 오고 싶을 땐 : 변수.value

  */
