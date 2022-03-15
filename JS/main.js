// 모달 제어용 임시 코드

const timeBox = document.querySelector(".timeBox"); // 상영시간 버튼
const cancelBtn = document.querySelector(".cancelBtn"); //예매 취소 버튼
const selectionBtn = document.querySelector(".selectionBtn"); //좌석 선택 버튼

const nowMovie = document.querySelector(".nowMovie"); //현재 상영중인 영화 화면
const backgroundFilter = document.querySelector(".backgroundFilter"); // 예매 선택 화면
const seatSelection = document.querySelector(".seatSelection"); // 좌석 선택 화면

timeBox.addEventListener("click", function () {
  backgroundFilter.style.display = "flex";
});

cancelBtn.addEventListener("click", function () {
  backgroundFilter.style.display = "none";
});

selectionBtn.addEventListener("click", function () {
  seatSelection.style.display = "block";
  nowMovie.style.display = "none";
});
