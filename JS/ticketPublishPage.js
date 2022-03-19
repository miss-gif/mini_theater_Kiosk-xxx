// 티켓 발행 방식 선택 화면 제어 스크립트

let newTicketPurchase = document.querySelector("#newTicketPurchase");
let reservedTicketPrint = document.querySelector("#reservedTicketPrint");

// 새로 구매를 선택했을때, 영화 목록을 선택하는 페이지로 전환함
newTicketPurchase.addEventListener('click',function(){
  console.log("newTicket");
  showMovieSelectPage();
  console.log(nowPage);
});

// 예매 티켓 출력을 선택했을때, 예약된 티켓을 검색하는 페이지로 전환함
reservedTicketPrint.addEventListener('click',function(){
  console.log("reservedTicket");
  showReservedTicketSearchPage();
  console.log(nowPage);
});