// 유효성 검사에 성공후, 예매된 영화 정보를 보여주는 화면

let availableTicketPrintButton = document.querySelector("#printBtn");

// 유효 티켓 출력 버튼
availableTicketPrintButton.addEventListener('click',function(){
  alert("유효 티켓을 출력합니다! 매점 이용 유도 페이지로 연결해주세요!");
  showStoreSelectPage(); // 현재는 최초 화면으로 가게 되어있음
});