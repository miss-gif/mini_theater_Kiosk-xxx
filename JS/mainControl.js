// 전체 상영표 컨트롤하는 스크립트파일
const previousBtn = document.querySelector("#previousBtn"); // 이전버튼
const afterBtn = document.querySelector("#afterBtn"); // 다음버튼
const timeBox = document.querySelectorAll(".timeBox"); // 상영시간 버튼
const cancelBtn = document.querySelector(".cancelBtn"); //예매 취소 버튼
const mainContent = document.querySelectorAll(".mainContent");
let className = [mainContent[0],mainContent[1],mainContent[2]]; 
const nowMovie = document.querySelector(".nowMovie"); //현재 상영중인 영화 화면
const backgroundFilter = document.querySelector(".backgroundFilter"); // 예매 선택 화면

let selectedMovieName = ""; // 선택된 영화 이름
let selectedMovieImageUrl = ""; // 선택된 영화 URL
let selectedMoviePlace = ""; // 선택된 영화 상영장소
let selectedMovieStartTime = ""; // 선택된 영화 시작시간

previousBtn.addEventListener('click',function(){
  className.unshift(className.pop());
  className[0].style.left = "50%";
  className[0].style.transform = "translate(-50%, -50%)";
  className[0].style.height = "66rem";
  className[0].style.opacity = "1";
  className[0].style.zIndex = "11";
  className[1].style.left = "0";
  className[1].style.transform = "translate(0, -50%)";
  className[1].style.zIndex = "0";
  className[1].style.height = "64rem";
  className[1].style.opacity = "0.4";
  className[2].style.left = "42rem";
  className[2].style.transform = "translate(0, -50%)";
  className[2].style.zIndex = "0";
  className[2].style.height = "64rem";
  className[2].style.opacity = "0.4";
});

afterBtn.addEventListener('click',function(){
  className.push(className.shift());
  className[0].style.left = "50%";
  className[0].style.transform = "translate(-50%, -50%)";
  className[0].style.height = "66rem";
  className[0].style.opacity = "1";
  className[0].style.zIndex = "11";
  className[1].style.left = "0";
  className[1].style.transform = "translate(0, -50%)";
  className[1].style.zIndex = "0";
  className[1].style.height = "64rem";
  className[1].style.opacity = "0.4";
  className[2].style.left = "42rem";
  className[2].style.transform = "translate(0, -50%)";
  className[2].style.zIndex = "0";
  className[2].style.height = "64rem";
  className[2].style.opacity = "0.4";
});

