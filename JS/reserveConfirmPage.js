// 예매 내용 확인 화면 제어 스크립트

let ticketPointPaymentButton = document.querySelector("#ticketPointPaymentButton");
let ticketNormalPaymentButton = document.querySelector("#ticketNormalPaymentButton");

// 즉시 결제
ticketNormalPaymentButton.addEventListener("click",function(){
  console.log("ticketNormalPaymentButton click");
  // 이부분에서 db에 좌석정보를 업데이트 해주어야 함
  showStoreSelectPage();  // 현재는 최초 페이지로 연결되게 해둠
  alert("즉시 결제 페이지로 연결해주세요");
});

// 포인트 결제
ticketPointPaymentButton.addEventListener("click",function(){
  console.log("ticketPointPaymentButton click");
  // 이부분에서 db에 좌석정보를 업데이트 해주어야 함
  showStoreSelectPage();  // 현재는 최초 페이지로 연결되게 해둠
  alert("포인트 결제 페이지로 연결해주세요");
});