// 좌석 선택 페이지를 제어하는 스크립트
let seatNumber = document.querySelectorAll("#seatNumber"); // 좌석
let seatSelectComplete = document.querySelector("#seatSelectCompleteButton"); // 좌석 선택 완료 버튼
let maxSelectableCount = 0; // 최대 선택가능한 좌석수
let selectedSeatCount = 0;  // 현재 선택한 좌석수

let ticketCountAdult = document.querySelector("#ticketAdultCount"); // 일반 n매
let ticketCountChild = document.querySelector("#ticketChildCount"); // 청소년 n매
let ticketCountSenior = document.querySelector("#ticketSeniorCount"); // 노인 n매
let ticketCountDisable = document.querySelector("#ticketDisableCount"); // 장애인 n매

// 좌석 초기화 함수
let resetSeatAll = function(){
  document.querySelector("#seatArea").innerHTML = `
  <div id="seatRowA" class="matrixGW seatRowA">
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber BookedSeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
</div>
<div id="seatRowB" class="matrixGW seatRowB">
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
</div>
<div id="seatRowC" class="matrixGW seatRowC">
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
</div>
<div id="seatRowD" class="matrixGW seatRowD">
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
</div>
<div id="seatRowE" class="matrixGW seatRowE">
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
  <div id="seatNumber" class="seatNumber emptySeat"></div>
</div>
  `;
  seatNumber = document.querySelectorAll("#seatNumber");
}


// 좌석 선택 상태 초기화 함수
function resetSeatStatus(){
  selectedSeatCount = 0;
  seatNumber.forEach(function(v,i,a){
    if(v.classList.contains("SelectedSeat")){
      v.classList.remove("SelectedSeat");
      v.classList.add("emptySeat");
    }
    if(v.classList.contains("disabledSeat")){
      v.classList.remove("disabledSeat");
      v.classList.add("emptySeat");
    }
  });
}
/**************필요한것*****************
좌석 버튼 클릭했을때 : empty <-> selected ,  selectedSeatCount+-
selectedSeatCount == maxSelectableCount -> emptySeat 비활성화
selectedSeatCount < maxSelectableCount -> emptySeat 활성화
***************************************/

// 좌석 선택상태와 선택된 좌석 수 컨트롤하는 함수
let seatStatusChange = function(targetSeat){
  if(targetSeat.classList.contains("emptySeat") && maxSelectableCount > selectedSeatCount){
    targetSeat.classList.remove("emptySeat");
    targetSeat.classList.add("SelectedSeat");
    selectedSeatCount++;
  } else if(targetSeat.classList.contains("SelectedSeat")){
    targetSeat.classList.remove("SelectedSeat");
    targetSeat.classList.add("emptySeat");
    selectedSeatCount--;
  }
  // 선택한 인원 수 만큼 사람을 선택한 경우
  if(maxSelectableCount == selectedSeatCount){
    seatSelectComplete.style.backgroundColor = "var(--textRed)";
    seatNumber.forEach(function(v){
      if(v.classList.contains("emptySeat")){
        v.classList.remove("emptySeat");
        v.classList.add("disabledSeat");
      }
    });
  // 선택한 인원 수 만큼 사람을 선택하지 않은 경우
  } else {
    seatNumber.forEach(function(v){
      if(v.classList.contains("disabledSeat")){
        v.classList.remove("disabledSeat");
        v.classList.add("emptySeat");
      }
    });
  }
}


// 좌석 선택 완료시
seatSelectComplete.addEventListener('click',function(){
  // 인원 선택한 수에 맞게 좌석을 선택한경우
  if(maxSelectableCount == selectedSeatCount){
    let paymentContent = document.querySelector('#paymentContent');
    document.querySelector('#totalTicketPrice').innerHTML = movieTotalPrice + "원";
    document.querySelector('#discountTicketPrice').innerHTML = '원';
    document.querySelector('#finallyTicketPrice').innerHTML = "원";
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
    // 아무일도 일어나지 않음
  }
});