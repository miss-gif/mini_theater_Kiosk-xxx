// 연령 고지 모달 제어 스크립트
let ageNoticeOK = document.querySelector("#ageLimitGuidanceBtn");
let ageNoticeNO = document.querySelector("#ageNoticeNO");

ageNoticeOK.addEventListener('click',function(){
  numberSelectArrayAdult[0].click();  // 관람 인원수 성인 디폴트값인 0으로 초기화
  numberSelectArrayChild[0].click();  // 관람 인원수 어린이 디폴트값인 0으로 초기화
  numberSelectArraySenior[0].click(); // 관람 인원수 노인 디폴트값인 0으로 초기화
  numberSelectArrayDisable[0].click();  // 관람 인원수 장애인 디폴트값인 0으로 초기화
  showPersonSelectModal();  // 관람 인원수 모달 표시
});

ageNoticeNO.addEventListener('click',function(){
  showMovieSelectPage();  // 영화 선택 화면 표시
});





































/*

// 상영시간 버튼 클릭 시
timeBox.forEach(function (v, i, a) {
  a[i].addEventListener("click", function (e) {
    showMovieSelectModal();
    // 모달창에 영화 이미지 넣기
    selectedBox = e.target.parentNode.parentNode.parentNode.parentNode.children;
    //console.log(selectedBox);
    document.querySelector("#paymentImg").src = selectedBox[0].src;
    selectedMovieImageUrl = document.querySelector("#paymentImg").src;
    // 모달창에 영화 이름 넣기
    selectedMovieName = selectedBox[1].children[0].innerHTML;
    document.querySelector("#movieTitle").innerHTML = selectedMovieName;
    // 모달창에 상영관 이름 넣기
    document.querySelector("#movieFloor").innerHTML = e.target.parentNode.parentNode.children[0].children[1].innerHTML;
    selectedMoviePlace = document.querySelector("#movieFloor").innerHTML;
    // 모달창에 상영 시간 넣기
    document.querySelector("#movieTime").innerHTML = e.target.innerHTML;
    selectedMovieStartTime = e.target.innerHTML;
  });
});

// 예매 거부 버튼 클릭 시
cancelBtn.addEventListener("click", function () {
  backgroundFilter.style.display = "none";
  mainContent[0].style.opacity = "1";
  selectedMovieName = "";
  selectedMovieImageUrl = "";
  selectedMoviePlace = "";
  selectedMovieStartTime = "";
});

*/