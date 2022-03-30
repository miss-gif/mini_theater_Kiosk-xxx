/*** 모달창  제어 ***/
(function () {
  const DISCOUNTBUTTON = document.querySelector(".pointProcess");
  const MAINSKETCH = document.querySelectorAll(".mainSketch")[0];
  const CLOSEBUTTON = document.querySelectorAll(".closeButton");

  let mainBox = document.querySelector(".onePage");
  let grayPaper = document.querySelector(".grayWall");

  let directButton = document.querySelector(".directProcess");
  let orderList = document.querySelector(".checkOrder");
  let firstPage = document.querySelector(".creditCard1");
  let secondPage = document.querySelector(".creditCard2");
  let thirdPage = document.querySelector(".completePage");
  let pageReturn = document.querySelector(".returnToprev");
  let homeReturn = document.querySelector(".returnTohome");

  directButton.addEventListener("click", () => {
    MAINSKETCH.style.top = "-50rem";
    MAINSKETCH.style.left = "66rem";
    setTimeout(function () {
      //orderList.style.display = 'none';
      firstPage.style.left = "0rem";
      secondPage.style.left = "70rem";
      thirdPage.style.left = "140rem";
    }, 1000);
    setTimeout(function () {
      //orderList.style.left = '-200rem';
      firstPage.style.left = "-70rem";
      secondPage.style.left = "0rem";
      thirdPage.style.left = "70rem";
      pageReturn.style.display = "none";
    }, 3000);
    setTimeout(function () {
      //orderList.style.left = '-200rem';
      firstPage.style.left = "-140rem";
      secondPage.style.left = "-70rem";
      thirdPage.style.left = "0rem";
      pageReturn.style.display = "none";
      homeReturn.style.display = "inline-block";
    }, 5000);
  });
  for (i = 0; i < pageReturn.length; i++) {
    pageReturn.addEventListener("click", () => {
      //orderList.style.display = 'block';
      firstPage.style.left = "70rem";
      secondPage.style.left = "140rem";
      thirdPage.style.left = "210rem";
    });
  }

  DISCOUNTBUTTON.addEventListener("click", () => {
    mainBox.classList.add("baseModal-open");
    grayPaper.classList.toggle("hidden");
  });

  for (j = 0; j < CLOSEBUTTON.length; j++) {
    CLOSEBUTTON[j].addEventListener("click", () => {
      mainBox.classList.remove("baseModal-open");
      grayPaper.classList.add("hidden");
    });
  }
})();

(function () {
  const MAINSKETCH = document.querySelectorAll(".mainSketch")[0];
  const NEXTSCREEN = 70;
  let grayPaper = document.querySelector(".grayWall");
  let innerList = document.querySelectorAll(".modalSector");
  let nextProcess = document.querySelector("#applyButton");
  let moveRem = 0;
  let i = 0;

  nextProcess.addEventListener("click", () => {
    if (i < 1) {
      moveRem -= NEXTSCREEN;
      innerList[0].style.transform = `translateX(${moveRem}rem)`;
      innerList[1].style.transform = `translateX(${moveRem}rem)`;
      i++;
    } else {
      MAINSKETCH.classList.remove("baseModal-open");
      grayPaper.classList.add("hidden");
      moveRem += NEXTSCREEN;
      innerList[0].style.transform = `translateX(${moveRem}rem)`;
      innerList[1].style.transform = `translateX(${moveRem}rem)`;
      i = 0;
    }
  });
})();

/*** 포인트 사용 ***/
//

(function () {
  const NUMBERPAD = Array.from(document.querySelectorAll(".keyPad>button"));
  const CLEARKEY = document.querySelector(".removeKey");
  const RESETKEY = document.querySelector(".resetKey");

  let nowValue = document.querySelector("#identifyPhone");
  let increasePoint = document.querySelector(".plusPoint");
  let decreasePoint = document.querySelector(".minusPoint");
  let remainsPoint = document.querySelector("#remainsPoint");
  let pointControl = document.querySelector("#pointSelector");
  let blankNum = "";
  function floatNumber() {
    nowValue.value += this.innerHTML;
    blankNum.value = nowValue.value.length;

    //blankNum.value = nowValue.value.replace(/^(01[016789]{1})-?(\d{4}-?(\d{4}))$/);
    if (nowValue.value.length < 4) {
      return nowValue;
    } else if (nowValue.value.length < 7) {
      blankNum += nowValue.value.substr(0, 3);
      blankNum += "-";
      blankNum += nowValue.value.substr(3);
      return blankNum;
    } else if (nowValue.value.length < 11) {
      blankNum += nowValue.value.substr(0, 3);
      blankNum += "-";
      blankNum += nowValue.value.substr(3, 4);
      blankNum += "-";
      blankNum += nowValue.value.substr(7);
      return blankNum;
    } else {
      blankNum = "";
    }
    return nowValue;
  }

  function clearLetter() {
    nowValue.value = nowValue.value.slice(0, -1);
  }

  function clearAll() {
    nowValue.value = "";
  }

  NUMBERPAD.map((number) => {
    number.addEventListener("click", floatNumber);
  });
  CLEARKEY.addEventListener("click", clearLetter);
  RESETKEY.addEventListener("click", () => {
    clearAll();
  });
  const ENTERKEY = document.querySelector(".enterKey");
  let pointComma1 = document.querySelector("#pointSelector");
  let pointComma2 = document.querySelector("#totalPoint");

  ENTERKEY.addEventListener("click", () => {
    let testCord = 01011111111;
    if (testCord == nowValue.value) {
      pointComma1.value = 0;
      pointComma2.innerHTML = 10000;
    }
    function comma(pointComma1) {
      return pointComma1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function comma(pointComma2) {
      return pointComma2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    comma();
  });

  increasePoint.addEventListener("click", () => {
    let currentValue = parseInt(pointControl.innerHTML, 10);
    pointControl.innerHTML = currentValue + 1000;
    remainsPoint.value = totalPoint.value - pointControl.value;
  });
  decreasePoint.addEventListener("click", () => {
    let currentValue = parseInt(pointControl.innerHTML, 10);
    pointControl.innerHTML = currentValue - 1000;
    remainsPoint.value = totalPoint.value - pointControl.value;
  });

  if (pointControl.value > totalPoint.value) {
    pointControl.value = totalPoint.value;
    increasePoint.disabled = true;
  } else if (pointControl == 0) {
    decreasePoint.disabled = true;
  }
})();
