// 홈, 뒤로가기 버튼
let homeBtn = document.querySelector(".homeBtn"); // 홈버튼
let replyBtn = document.querySelector(".replyBtn"); // 뒤로가기 버튼


let getNowPageReturn = function(){
  // 현재 페이지를 리턴할 함수
  let seatSelectionStatus = document.querySelector(".seatSelection").style.display;
  let movieSelectionStatus = document.querySelector("#nowMovie").style.display;
  console.log(movieSelectionStatus);
  console.log(seatSelectionStatus == 'block');
  

  
}

homeBtn.addEventListener('click',function(){
  // 모든 선택을 리셋하고, 가장 최초의 화면으로 돌아간다.
});

replyBtn.addEventListener('click',function(){
  // 현재 페이지의 선택을 리셋하고, 이전 페이지로 돌아간다.
  getNowPageReturn();
});