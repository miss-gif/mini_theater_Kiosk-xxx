// 영화 프로세스에 공통적으로 포함되어있는 요소를 제어하는 스크립트
let homeButton = document.querySelectorAll(".homeBtn"); // 홈버튼
let replyButton = document.querySelectorAll(".replyBtn"); // 뒤로가기 버튼


// 홈 버튼
homeButton.forEach(function(v,i,a){
  a[i].addEventListener('click',function(){
    // 홈 버튼 : 모든 선택을 리셋하고, 가장 최초의 화면으로 돌아간다.
    //console.log("clickHome");
    showStoreSelectPage();
    console.log(nowPage);
  });
});

// 이전 버튼
replyButton.forEach(function(v,i,a){
  a[i].addEventListener('click',function(){
    // 이전으로 버튼 : 현재 페이지의 선택을 리셋하고, 이전 페이지로 돌아간다.
    //console.log("Back");
    pageChangeToBack(nowPage);
    console.log(nowPage);
  });
});

