// 페이지 전환 함수를 모아둔 스크립트 파일입니다..
let nowPage = "storeSelectPage";

function pageChanger(whereIsNowPage){
  // 현재 페이지를 전달받아 이 페이지의 이전페이지를 보여주세요
  switch(whereIsNowPage){
    case "ticketPublishPage" : {
      showStoreSelectPage();
      break;
    }
    case "movieSelectPage" : {
      showStoreSelectPage();
      break;
    }
    case 'seatSelection' : {
      // 좌석 선택 페이지 일경우 영화 선택 페이지로 넘어감
      showMovieSelectPage();
      nowPage = "movieSelectPage";
      break;
    }
    default : { break; }
  }
}

function showStoreSelectPage(){
  // 상점 선택 페이지로 넘어가는 함수
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
function showCafeteriaStorePage(){
  // 매점 페이지로 넘어가는 함수
  storeSelectPage.style.visibility = "hidden";
}

function showTicketPublishPage(){
  // 티켓 발행 방식 선택 페이지로 넘어가는 함수
  showMovieSelectPage();
  storeSelectPage.style.visibility = "hidden";
  storeSelectPage.style.display = "none";
}
function showMovieSelectPage(){
  // 영화 선택 페이지로 넘어가는 함수
  seatSelectPage.style.visibility = "hidden";
  movieSelectPage.style.visibility = "visible";
  moviePageWrapper.style.visibility = "visible";
  moviePageWrapper.style.display = "block";
  
}
function showMovieSelectModal(){
  // 영화 선택 후 예매할지 선택하는 모달창
  backgroundFilter.style.display = "flex";
  mainContent[0].style.opacity = "0.9";
  backgroundFilter.style.visibility = "visible";
}
function showSeatSelectPage(){
  // 좌석 선택 페이지로 넘어가는 함수
  seatSelectPage.style.visibility = "visible";
  movieSelectPage.style.visibility = "hidden";
  seatSelection.style.display = "block";
  backgroundFilter.style.visibility = "hidden";
}

