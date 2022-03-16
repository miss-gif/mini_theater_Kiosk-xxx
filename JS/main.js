// 모달 제어용 임시 코드

const timeBox = document.querySelectorAll(".timeBox"); // 상영시간 버튼
const cancelBtn = document.querySelector(".cancelBtn"); //예매 취소 버튼
const selectionBtn = document.querySelector(".selectionBtn"); //좌석 선택 버튼
const mainContent = document.querySelector(".mainContent");

const nowMovie = document.querySelector(".nowMovie"); //현재 상영중인 영화 화면
const backgroundFilter = document.querySelector(".backgroundFilter"); // 예매 선택 화면
const seatSelection = document.querySelector(".seatSelection"); // 좌석 선택 화면

// 상영시간 버튼 클릭 시
timeBox.forEach(function (v, i, a) {
  a[i].addEventListener("click", function (e) {
    backgroundFilter.style.display = "flex";
    mainContent.style.opacity = "0.9";
    // 모달창에 영화 이미지 넣기
    selectedBox = e.target.parentNode.parentNode.parentNode.parentNode.children;
    //console.log(selectedBox);
    document.querySelector("#paymentImg").src = selectedBox[0].src;
    // 모달창에 영화 이름 넣기
    document.querySelector("#movieTitle").innerHTML = selectedBox[1].children[0].innerHTML;
    // 모달창에 상영관 이름 넣기
    document.querySelector("#movieFloor").innerHTML = e.target.parentNode.parentNode.children[0].children[1].innerHTML;
    // 모달창에 상영 시간 넣기
    document.querySelector("#movieTime").innerHTML = e.target.innerHTML;
  });
});

// 예매 취소 버튼 클릭 시
cancelBtn.addEventListener("click", function () {
  backgroundFilter.style.display = "none";
  mainContent.style.opacity = "1";
});

// 좌석 선택 버튼 클릭 시
selectionBtn.addEventListener("click", function () {
  // 좌석 표시 공간에 좌석들 넣기
  let seatArea = document.querySelector("#seatArea");
  seatArea.innerHTML = "";
  for (let col = 0; col < 5; col++) {
    seatArea.innerHTML += `<div id="seatRow${"A" + col}" class="matrixGW seatRowA">`;
    for (let row = 0; row < 6; row++) {
      seatArea.children[col].innerHTML += `<div id="seatNumber" class="seatNumber"></div>`;
    }
    seatArea.innerHTML += `</div>`;
  }
  // 좌석 버튼 대응
  let seatNumber = document.querySelectorAll("#seatNumber");
  seatNumber.forEach(function (v, i, a) {
    a[i].addEventListener("click", function (e) {
      if (e.target.classList.length == 1) {
        e.target.classList.add("emptySeat");
      }
      console.log(e.target.classList.length);
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
    }
  });
  document.querySelector("#peopleAdult #plusBtn").addEventListener("click", function () {
    //console.log("adult++");
    if (peopleAdultCount.value < 10) {
      peopleAdultCount.value++;
    }
  });
  // 성인 수 감소 증가 종료
  // 어린이 수 감소 증가
  let peopleChildrenCount = document.querySelector("#peopleChildrenCount");
  document.querySelector("#peopleChildren #minusBtn").addEventListener("click", function () {
    //console.log("children--");
    if (peopleChildrenCount.value > 0) {
      peopleChildrenCount.value--;
    }
  });
  document.querySelector("#peopleChildren #plusBtn").addEventListener("click", function () {
    //console.log("children++");
    if (peopleChildrenCount.value < 10) {
      peopleChildrenCount.value++;
    }
  });
});
