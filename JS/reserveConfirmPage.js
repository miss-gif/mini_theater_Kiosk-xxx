// 예매 내용 확인 화면 제어 스크립트

let ConfirmOK = document.querySelector("#reserveConfirmPage #paymentBtn");

ConfirmOK.addEventListener("click",function(){
  console.log("confirmOK");
  // 이부분에서 db에 좌석정보를 업데이트 해주어야 함
  showStoreSelectPage();  // 현재는 최초 페이지로 연결되게 해둠
  alert("결제 페이지로 연결해주세요");
});