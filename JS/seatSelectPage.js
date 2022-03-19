// 좌석 선택 페이지를 제어하는 스크립트
let seatNumber = document.querySelectorAll("#seatNumber"); // 좌석
let seatSelectComplete = document.querySelector("#paymentBtn");
let maxSelectableCount = 0; // 최대 선택가능한 좌석수
let selectedSeatCount = 0;  // 현재 선택한 좌석수

seatNumber.forEach(function (v, i, a) {
  // 좌석 선택상태 초기화
  if(a[i].classList.contains("SelectedSeat")){
    a[i].classList.remove("SelectedSeat");
    a[i].classList.add("emptySeat");
  }
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
  showReserveConfirmPage();
})