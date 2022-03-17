const seatSelection = document.querySelector(".seatSelection"); // 좌석 선택 화면
const selectionBtn = document.querySelector(".selectionBtn"); //좌석 선택 버튼




// 좌석 선택 버튼 클릭 시
selectionBtn.addEventListener("click", function () {
  // 좌석 버튼 대응
  let seatNumber = document.querySelectorAll("#seatNumber");
  let maxSelectableCount = 0; // 최대 선택가능한 좌석수
  let selectedSeatCount = 0;  // 현재 선택한 좌석수


  seatNumber.forEach(function (v, i, a) {
    // 좌석 선택상태 초기화
    if(a[i].classList.contains("SelectedSeat")){
      a[i].classList.remove("SelectedSeat");
      a[i].classList.add("emtySeat");
    }
    a[i].addEventListener("click", function (e) {
      // 선택한 좌석이 예약된 자리인경우
      if(e.target.classList.contains("BookedSeat")){
        alert("이미 예약되어있는 자리입니다.");
      }else{
        // 예약안됐고 선택된 시트인경우 비선택으로 바꾸기
        if(e.target.classList.contains("SelectedSeat")){
        e.target.classList.remove("SelectedSeat");
        e.target.classList.add("emtySeat")
        selectedSeatCount--;
        // 예약안됐고 선택안된 시트인경우 선택으로 바꾸기
        }else{
          e.target.classList.remove("emtySeat");
          e.target.classList.add("SelectedSeat");
          selectedSeatCount++;
        }
      }
      // 선택을 마쳤을때 선택한 좌석수가 최대 선택 좌석수보다 많은경우
      if(maxSelectableCount < selectedSeatCount){
        e.target.classList.remove("SelectedSeat");
        e.target.classList.add("emtySeat");
        selectedSeatCount--;
        console.log(selectedSeatCount);
        alert("선택 가능한 좌석 수 초과");
      }
    });
  });

  seatSelection.style.display = "block";
  backgroundFilter.style.display = "none";
  nowMovie.style.display = "none";
  // 성인 수 감소 증가
  let peopleAdultCount = document.querySelector("#peopleAdultCount");
  document.querySelector("#peopleAdult #minusBtn").addEventListener("click", function () {
    //console.log("adult--");
    if (peopleAdultCount.value > 0) {
      peopleAdultCount.value--;
      maxSelectableCount--;
      console.log(maxSelectableCount);
    }
  });
  document.querySelector("#peopleAdult #plusBtn").addEventListener("click", function () {
    //console.log("adult++");
    if (peopleAdultCount.value < 10) {
      peopleAdultCount.value++;
      maxSelectableCount++;
      console.log(maxSelectableCount);
    }
  });
  // 성인 수 감소 증가 종료
  // 어린이 수 감소 증가
  let peopleChildrenCount = document.querySelector("#peopleChildrenCount");
  document.querySelector("#peopleChildren #minusBtn").addEventListener("click", function () {
    //console.log("children--");
    if (peopleChildrenCount.value > 0) {
      peopleChildrenCount.value--;
      maxSelectableCount--;
      console.log(maxSelectableCount);
    }
  });
  document.querySelector("#peopleChildren #plusBtn").addEventListener("click", function () {
    //console.log("children++");
    if (peopleChildrenCount.value < 10) {
      peopleChildrenCount.value++;
      maxSelectableCount++;
      console.log(maxSelectableCount);
    }
  });
});
