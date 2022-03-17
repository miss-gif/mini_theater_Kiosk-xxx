// 인원수 선택 모달창
let humanTypeAudlt=2; // document.querySelector("#성인 카운트수").value;
let humanTypeChild=3; // document.querySelector("#어린이 카운트수").value;
let humanTypeSenior=4; // document.querySelector("#노인 카운트수").value;
let humanTypeDisable=5; // document.querySelector("#장애인 카운트수").value;

// 어린이 어른 노인 장애인 순 가격표
let priceChild = 10000;
let priceAdult = 8000;
let priceSenior = 6000;
let priceDisable = 4000;

// 천단위 콤마 찍어서 반환하는 함수
function commaMaker(number){
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 가격의 총액을 반환하는 함수
function priceTotal(countAdult, countChild, countSenior, countDisable){
  let resultTotal = countAdult * priceAdult + countChild * priceChild + countSenior * priceSenior + countDisable * priceDisable;
  resultTotal = commaMaker(resultTotal);
  console.log(resultTotal);
  return resultTotal;
}
// 선택 가능한 인원 수를 반환하는 함수
function selectableSeat(countAdult, countChild, countSenior, countDisable){
  let resultSeat = countAdult + countChild + countSenior + countDisable;
  console.log(resultSeat);
  return resultSeat;
}

// 총액 반환
priceTotal(humanTypeAudlt, humanTypeChild, humanTypeSenior, humanTypeDisable);
// 인원수 반환
selectableSeat(humanTypeAudlt, humanTypeChild, humanTypeSenior, humanTypeDisable);


