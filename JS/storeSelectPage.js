// 매점과 티켓발행 선택 페이지 스크립트 영역 입니다.

let storeSelectPage = document.querySelector("#storeSelectPage");
let cafeteriaStoreButton = document.querySelector("#cafeteriaStoreButton");
let ticketPublishButton = document.querySelector("#ticketPublishButton"); 

cafeteriaStoreButton.addEventListener('click',function(){
});

ticketPublishButton.addEventListener('click', function(){
  //console.log('ticketPublishButton');
  nowPage = "ticketPublishPage";
  showTicketPublishPage();
  console.log("아니왜또");
})