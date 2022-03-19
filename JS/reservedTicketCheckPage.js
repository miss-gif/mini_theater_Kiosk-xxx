// 예매된 티켓 조회 화면

// 숫자 표시 영역 인풋란
let ticketNumberPrintArea = document.querySelector("#inputReservationNumberWindow");
// 키패드 숫자버튼
let ticketingNumberButton = document.querySelectorAll("#ticketingTicketNumber");
// 인풋란 초기화 버튼
let ticketingClearButton = document.querySelector("#ticketingTicketClearButton");
// 인풋란 한 글자 지우는 버튼
let ticketingBackspaceButton = document.querySelector("#ticketingTicketBackspaceButton");
// 조회하기 버튼
let reservedTicketCheckButton = document.querySelector("#ticketingTicketInquiryBtn");
// 임시 예매되있는 번호
let tmpMathManNumber = "1111-1111";
let tmpLevenementNumber = "2222-2222";
let tmpTheBatmanNumber = "3333-3333";

// 조회 버튼 클릭했을때
reservedTicketCheckButton.addEventListener("click",function(){
  console.log("조회 버튼 클릭됨");
  console.log(ticketNumberPrintArea.value);
  if(ticketNumberPrintArea.value == tmpTheBatmanNumber){
    console.log("배트맨 예매정보 출력");
    showAvailableTicketPage();
  } else if (ticketNumberPrintArea.value == tmpLevenementNumber){
    console.log("레벤르망 예매정보 출력");
    showAvailableTicketPage();
  } else if (ticketNumberPrintArea.value == tmpMathManNumber){
    console.log("수학자 예매정보 출력")
    showAvailableTicketPage();
  } else {
    console.log("예매정보 조회실패");
    showUnAvailableTicketModal();
  }
});
// 초기화 버튼 클릭시
ticketingClearButton.addEventListener("click",function(){
  ticketNumberPrintArea.value= "";
});
// 숫자 패드 클릭시
ticketingNumberButton.forEach(function(v,i,a){
  v.addEventListener("click",function(e){
    let numberLength = 0;
    numberLength = ticketNumberPrintArea.value.length;
    console.log(ticketNumberPrintArea.value);
    if(numberLength == 4){
      ticketNumberPrintArea.value += "-"
      ticketNumberPrintArea.value += (e.target.innerHTML);
    } else if (numberLength == 9){
      console.log("ㄴㄴ" );
    } else {
      ticketNumberPrintArea.value += (e.target.innerHTML);
    }
  });
});
// 지우기 버튼 클릭시
ticketingBackspaceButton.addEventListener('click',function(){
  let numberLength = 0;
  numberLength = ticketNumberPrintArea.value.length;
  if(numberLength == 0){
    console.log("0글자 제거");
  } else if (numberLength == 6){
    console.log("2글자 제거");
    ticketNumberPrintArea.value = ticketNumberPrintArea.value.slice(length, -1);
    ticketNumberPrintArea.value = ticketNumberPrintArea.value.slice(length, -1);
  } else {
    console.log("1글자 제거");
    ticketNumberPrintArea.value = ticketNumberPrintArea.value.slice(length, -1);
  }
});
