// 메인페이지 컨트롤하는 스크립트파일
const previousBtn = document.querySelector("#previousBtn");
const afterBtn = document.querySelector("#afterBtn");
const timeBox = document.querySelectorAll(".timeBox"); // 상영시간 버튼
const cancelBtn = document.querySelector(".cancelBtn"); //예매 취소 버튼
const mainContent = document.querySelectorAll(".mainContent");
let className = [mainContent[0],mainContent[1],mainContent[2]]; 
const nowMovie = document.querySelector(".nowMovie"); //현재 상영중인 영화 화면
const backgroundFilter = document.querySelector(".backgroundFilter"); // 예매 선택 화면
// 예매 취소 버튼 클릭 시
cancelBtn.addEventListener("click", function () {
  backgroundFilter.style.display = "none";
  mainContent.style.opacity = "1";
});


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