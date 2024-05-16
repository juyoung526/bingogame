let result = document.querySelector("#result");
let user = document.querySelector("#user");
let play = document.querySelector("#play");

randomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
};
randomNum();

let game = (e) => {
  e.preventDefault();

  let userNum = user.value;
  console.log(userNum);

  let re =
    userNum < computerNum ? "up" : userNum > computerNum ? "down" : "bingo";
  result.innerText = re;
};

user.addEventListener("focus", () => {
  user.value = "";
});

play.addEventListener("click", game);




/* 
랜덤숫자만들기
let num = Math.random();
console.log(Math.floor(num * 100 + 1));

입력한 값을 가지고 오고 싶을 땐 : 변수.value

삼항연산자
let i = num1 >= num2 ? "큽니다" : "작습니다";

다중삼항연산자
let result4 =
        taget >= 90
          ? "매우우수"
          : taget >= 80
          ? "우수"
          : taget >= 70
          ? "보통"
          : "미흡";
  */
