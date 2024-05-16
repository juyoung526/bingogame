let result = document.querySelector("#result");
let user = document.querySelector("#user");
let play = document.querySelector("#play");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", game());
// 함수옆에 ()가로를 쓰면 이벤트와 상관없이 함수가 호출됨

// function game(e) {
//   e.preventDefult();
//   console.log("game start");
// }

/* 
랜덤숫자만들기
let num = Math.random();
console.log(Math.floor(num * 100 + 1));

입력한 값을 가지고 오고 싶을 땐 : 변수.value

  */
