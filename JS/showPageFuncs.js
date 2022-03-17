// 페이지 전환 함수를 모아둔 스크립트 파일입니다..

function pageChanger(whereIsNowPage){
  // 현재 페이지를 전달받아 이 페이지의 이전페이지를 보여주세요
  switch(whereIsNowPage){
    case 'seatSelection' : {
      // 좌석 선택 페이지 일경우 영화 선택 페이지로 넘어감
      showMovieSelectPage();
      nowPage = "movieSelectPage";
      break;
    }
    case "movieSelectPage" : {
      showStoreSelectPage();
      break;
    }
    default : { break; }
  }
}

function showStoreSelectPage(){
  // 티켓예매 할지, 매점이용 할지 선택하는 페이지를 보여주세요
  // 홈 버튼을 눌렀을때도 해당 함수 사용됨
  nowPage = "StoreSelectPage";
  storeSelectPage.style.visibility = "visible";
  moviePageWrapper.style.visibility = "hidden";
  moviePageWrapper.style.display = "none";
  movieSelectPage.style.visibility = "hidden";
  seatSelectPage.style.visibility = "hidden";
  backgroundFilter.style.visibility = "hidden";
  storeSelectPage.style.display = "block";
  // 모든 모달창 hidden
  // 모든 페이지 hidden
}
function showMovieSelectModal(){
  backgroundFilter.style.display = "flex";
  mainContent[0].style.opacity = "0.9";
  backgroundFilter.style.visibility = "visible";
}
function showMovieSelectPage(){
  // 영화를 선택하는 페이지를 보여주세요
  // movieSelectpage 외에 모두 hidden
  seatSelectPage.style.visibility = "hidden";
  movieSelectPage.style.visibility = "visible";
  moviePageWrapper.style.visibility = "visible";
  moviePageWrapper.style.display = "block";
  
}
function showSeatSelectPage(){
  // 좌석 선택 페이지 제외 모두 숨김
  seatSelectPage.style.visibility = "visible";
  movieSelectPage.style.visibility = "hidden";
  seatSelection.style.display = "block";
  backgroundFilter.style.visibility = "hidden";
}

function showCafeteriaStorePage(){
  storeSelectPage.style.visibility = "hidden";
}

function showTicketPublishPage(){
  // 티켓발행 페이지로 넘겨주세요
  showMovieSelectPage();
  storeSelectPage.style.visibility = "hidden";
  storeSelectPage.style.display = "none";
}