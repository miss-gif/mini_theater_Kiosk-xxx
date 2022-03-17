// 홈, 뒤로가기 버튼 제어 스크립트

let moviePageWrapper = document.querySelector("#wrapper");
let movieSelectPage = document.querySelector("#nowMovie");  // 상영표 페이지
let seatSelectPage = document.querySelector("#seatSelection"); // 좌석선택 페이지
let nowPage = "";

let homeButton = document.querySelector(".homeBtn"); // 홈버튼
let replyButton = document.querySelector(".replyBtn"); // 뒤로가기 버튼

homeButton.addEventListener('click',function(){
  // 홈 버튼 : 모든 선택을 리셋하고, 가장 최초의 화면으로 돌아간다.
  //console.log("clickHome");
  showStoreSelectPage()
  console.log("NowPage");
});

replyButton.addEventListener('click',function(){
  // 이전으로 버튼 : 현재 페이지의 선택을 리셋하고, 이전 페이지로 돌아간다.
  //console.log("Back");
  pageChanger(nowPage);
  console.log(nowPage);
});

