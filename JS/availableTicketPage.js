// 유효성 검사에 성공후, 예매된 영화 정보를 보여주는 화면

let availableTicketPrintButton = document.querySelector("#printBtn");

// 유효 티켓 출력 버튼
availableTicketPrintButton.addEventListener('click',function(){
  alert("유효 티켓을 출력합니다!");
  showStoreSelectPage();
});