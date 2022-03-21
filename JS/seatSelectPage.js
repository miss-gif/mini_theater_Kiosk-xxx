// 좌석 선택 페이지를 제어하는 스크립트
let seatNumber = document.querySelectorAll("#seatNumber"); // 좌석
let seatSelectComplete = document.querySelector("#paymentBtn");
let maxSelectableCount = 0; // 최대 선택가능한 좌석수
let selectedSeatCount = 0;  // 현재 선택한 좌석수

// 좌석 선택 상태 초기화 함수
function resetSeatStatus(){
  selectedSeatCount = 0;
  seatNumber.forEach(function(v,i,a){
    if(v.classList.contains("SelectedSeat")){
      v.classList.remove("SelectedSeat");
      v.classList.add("emptySeat");
    }
  });
}

// 좌석
seatNumber.forEach(function (v, i, a) {
  // 각 좌석마다 버튼 대응
  a[i].addEventListener("click", function (e) {
    // 선택한 좌석이 예약된 자리인경우
    if(e.target.classList.contains("BookedSeat")){
      alert("이미 예약되어있는 자리입니다.");
    }else{
      // 예약안됐고 선택된 시트인경우 비선택으로 바꾸기
      if(e.target.classList.contains("SelectedSeat")){
      e.target.classList.remove("SelectedSeat");
      e.target.classList.add("emptySeat")
      selectedSeatCount--;
      // 예약안됐고 선택안된 시트인경우 선택으로 바꾸기
      }else{
        e.target.classList.remove("emptySeat");
        e.target.classList.add("SelectedSeat");
        selectedSeatCount++;
      }
    }
    // 선택을 마쳤을때 선택한 좌석수가 최대 선택 좌석수보다 많은경우
    if(maxSelectableCount < selectedSeatCount){
      e.target.classList.remove("SelectedSeat");
      e.target.classList.add("emptySeat");
      selectedSeatCount--;
      console.log(selectedSeatCount);
      alert("선택 가능한 좌석 수 초과");
    }
  });
});

// 좌석 선택 완료시
seatSelectComplete.addEventListener('click',function(){
  // 인원 선택한 수에 맞게 좌석을 선택한경우
  if(maxSelectableCount == selectedSeatCount){
    let paymentContent = document.querySelector('#paymentContent');
    document.querySelector('#paymentPrice').innerHTML = movieTotalPrice + "원";
    paymentContent.querySelector('img').src = selectedMovieImageUrl;
    paymentContent.querySelector('H3').innerHTML = selectedMovieName;
    paymentContent.querySelectorAll('P')[0].innerHTML = `CGV 안산 ${selectedMoviePlace}`;
    paymentContent.querySelectorAll('P')[1].innerHTML = `yyyy.mm.dd(day) ${selectedMovieStartTime} ~ movieEndTimeVariable`;
    document.querySelector('#paymentContentInfoNumber').innerHTML = '';
    if(countAdult){ document.querySelector('#paymentContentInfoNumber').innerHTML += `<p>일반 ${countAdult}매</p>`; }
    if(countChild){ document.querySelector('#paymentContentInfoNumber').innerHTML += `<p>어린이 ${countChild}매</p>`; }
    if(countSenior){ document.querySelector('#paymentContentInfoNumber').innerHTML += `<p>경로우대 ${countSenior}매</p>`; }
    if(countDisable){ document.querySelector('#paymentContentInfoNumber').innerHTML += `<p>장애인 ${countDisable}매</p>`; }
    showReserveConfirmPage();
  } else { // 선택한 인원수와 맞지 않게 좌석을 선택한 경우
    alert("인원수에 맞게 좌석을 선택해주세요");
  }
  
})