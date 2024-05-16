let result = document.querySelector("#result");
let user = document.querySelector("#user"),
  guessNum = document.querySelector("#guessNum");
let play = document.querySelector("#play"),
  replay = document.querySelector("#replay");
let chance = document.querySelectorAll("#chance li");
let ch1 = document.querySelector(".ch01"),
  ch2 = document.querySelector(".ch02"),
  ch3 = document.querySelector(".ch03"),
  ch4 = document.querySelector(".ch04"),
  ch5 = document.querySelector(".ch05"),
  ch6 = document.querySelector(".ch06"),
  ch7 = document.querySelector(".ch07");

randomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
};

randomNum();

let count = 6 - 1;

let game = (e) => {
  e.preventDefault();

  let userNum = user.value;
  console.log(userNum);

  if (userNum < computerNum) {
    result.innerText = "up";
    pizza();
  } else if (userNum > computerNum) {
    result.innerText = "down";
    pizza();
  } else {
    result.textContent = "bingo";
    win();
    play.disabled = true;
  }
  count--;
  console.log(count);
  guessNum.innerText = `${count}`;
};

let pizza = () => {
  if (count == 5) {
    ch1.style.display = "none";
    ch2.style.display = "block";
  } else if (count == 4) {
    ch2.style.display = "none";
    ch3.style.display = "block";
  } else if (count == 3) {
    ch3.style.display = "none";
    ch4.style.display = "block";
  } else if (count == 2) {
    ch4.style.display = "none";
    ch5.style.display = "block";
  } else if (count == 1) {
    ch5.style.display = "none";
    ch6.style.display = "block";
    play.disabled = true;
  }
};

let win = () => {
  chance.forEach((item, index) => {
    chance.forEach((item) => {
      item.style.display = "none";
    });
    chance[6].style.display = "block";
  });
};

let reset = () => {
  play.disabled = false;
  randomNum();
};

user.addEventListener("focus", () => {
  user.value = "";
});

play.addEventListener("click", game);
replay.addEventListener("click", reset);
