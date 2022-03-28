let main = (() =>{
    let selectMenu = () =>{
      let selectCombo = ["0rem","70rem","140rem","210rem"];
      let selectPopcon = ["-70rem","0rem","70rem","140rem"];
      let selectBeverage = ["-140rem","-70rem","0rem","70rem"];
      let selectSnack = ["-210rem","-140rem","-70rem","0rem"];
      let selectMenu = document.querySelectorAll(".selectMenu");
      let menuList = document.querySelectorAll(".menuList");
      class MenuMove {
        constructor() {

        }
      MoveMenu(menuSelect,selectNumber,select,notMenuSelect1,notMenuSelect2,notMenuSelect3) {
        menuSelect.addEventListener("click",()=>{ 
          menuList[0].style.left = select[0];
          menuList[1].style.left = select[1];
          menuList[2].style.left = select[2];
          menuList[3].style.left = select[3];
          if(menuSelect) {
            menuSelect.style.backgroundColor = "#ed3214";
            menuSelect.style.border = "0.3rem solid #ed3214";
            menuSelect.firstChild.style.color = "#fff";
            notMenuSelect1.firstChild.style.color = "black";
            notMenuSelect2.firstChild.style.color = "black";
            notMenuSelect3.firstChild.style.color = "black";
            notMenuSelect1.style.backgroundColor = "white";
            notMenuSelect2.style.backgroundColor = "white";
            notMenuSelect3.style.backgroundColor = "white";
            notMenuSelect1.style.border = "0.3rem solid #363636";
            notMenuSelect2.style.border = "0.3rem solid #363636";
            notMenuSelect3.style.border = "0.3rem solid #363636";
          }
          selectNumber.style.transition = "0.5s";
        })
        }
      }
      let letsMove = new MenuMove();
      letsMove.MoveMenu(selectMenu[0],menuList[0],selectCombo,selectMenu[1],selectMenu[2],selectMenu[3]);
      letsMove.MoveMenu(selectMenu[1],menuList[1],selectPopcon,selectMenu[0],selectMenu[2],selectMenu[3]);
      letsMove.MoveMenu(selectMenu[2],menuList[2],selectBeverage,selectMenu[0],selectMenu[1],selectMenu[3]);
      letsMove.MoveMenu(selectMenu[3],menuList[3],selectSnack,selectMenu[1],selectMenu[2],selectMenu[0]);
    }

    let selectOption = () => {
      let comboModal = document.querySelector(".comboModal");
      let modalClose = document.querySelector(".modalClose");
      let selectCombo = document.querySelectorAll(".selectCombo");
      let countingNumber = document.querySelectorAll(".countingNumber");
      let minusCount = document.querySelectorAll(".minusCount");
      let closeButton = document.querySelector(".closeButton");
      let plusCount = document.querySelectorAll(".plusCount");
      let plusCountDrink = document.querySelectorAll(".plusCountDrink");
      let minusCountDrink = document.querySelectorAll(".minusCountDrink");
      let drinkSelect = document.querySelectorAll(".drinkSelect");
      let checkQty = document.querySelector(".checkQty");
      let checkQtyDrink = document.querySelector(".checkQtyDrink");
      let selectInfomationDrink = document.querySelector(".selectInfomationDrink");
      let infoCombo = [];
      let infoDrink = [];
      let countArray = [];
      let countResult = 0;
      let drinkCountResult = 0;
      let modalNext = document.querySelector(".modalNext");
      let drinkChoice = document.querySelector(".drinkChoice");
      let comboClassName = "";
      let drinkArray = [];
      let orderList = document.querySelector(".orderList");
      let infoSelect = [];
      let infoComboPrice = 0;
      let cummaPrice = 0;
      let totalAmount = document.querySelector(".totalAmount");
      let totalPriceAmount = 0;

      class comboSelect {
        constructor() {}

        comboChoice(comboName,comboImgName,thisCombo,closeCombo1,closeCombo2,closeCombo3,drinkCount) {
          window.addEventListener("click",(e)=>{
            if(e.target.classList.contains(comboName)) {
              infoSelect = [];
              let replaceStr = e.target.childNodes[5].innerHTML;
              let secondReplace = replaceStr.replace(",","");
              infoSelect.push(parseInt(secondReplace));
              infoSelect.push(e.target.childNodes[3].innerHTML);
              comboModal.style.top = '12.5rem';
              thisCombo.style.visibility = "visible";
              comboClassName = thisCombo.className;
              closeCombo1.style.visibility = "hidden";
              closeCombo2.style.visibility = "hidden";
              closeCombo3.style.visibility = "hidden";
              selectInfomationDrink.innerHTML = `음료를 선택해주세요 (${drinkCount})`;
            }else if(e.target.classList.contains(comboImgName)) {
              infoSelect = [];
              let replaceStr = e.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;
              let secondReplace = replaceStr.replace(",","");
              infoSelect.push(e.target.nextSibling.nextSibling.innerHTML);
              infoSelect.push(parseInt(secondReplace));
              comboModal.style.top = '12.5rem';
              thisCombo.style.visibility = "visible";
              comboClassName = thisCombo.className;
              closeCombo1.style.visibility = "hidden";
              closeCombo2.style.visibility = "hidden";
              closeCombo3.style.visibility = "hidden";
              selectInfomationDrink.innerHTML = `음료를 선택해주세요 (택 ${drinkCount})`;
            }
            if(e.target == modalClose || e.target == closeButton ) {
              comboModal.style.top = '90rem';
              countResult = 0;
              infoDrink = [];
              drinkCountResult = 0;
              drinkChoice.style.left = "70rem";
              countArray = [];
              drinkArray = [];
              comboClassName = "";
              infoCombo = [];
              infoComboPrice = 0;
              checkQty.style.visibility = "visible";
              checkQtyDrink.style.visibility = "hidden";
              for(let i = 0; i < plusCount.length; i++) {
                countingNumber[i].value = 0;
              }
              for(let j = 0; j < plusCountDrink.length; j++) {
                drinkSelect[j].value = 0;
              }
            }
          })  
        }
      }

      let openComboModal = new comboSelect();
      openComboModal.comboChoice("cgvCombo","cgvcomboImg",selectCombo[0],selectCombo[1],selectCombo[2],selectCombo[3],2);
      openComboModal.comboChoice("largeCombo","largeComboImg",selectCombo[1],selectCombo[0],selectCombo[2],selectCombo[3],2);
      openComboModal.comboChoice("doubleCombo","doubleComboImg",selectCombo[2],selectCombo[0],selectCombo[1],selectCombo[3],2);
      openComboModal.comboChoice("smallCombo","smallComboImg",selectCombo[3],selectCombo[0],selectCombo[1],selectCombo[2],1);
      

      for(let i = 0; i < plusCount.length; i++) {
        plusCount[i].addEventListener("click",(e)=>{
          countArray = [];
          if(countResult == 2) {
            for(let j = 0; j < countingNumber.length; j++) {
            countingNumber[j].value = 0;
            }
            infoCombo = [];
            infoComboPrice = 0;
          }else if(countResult == 1 && comboClassName == "smallSetchoice selectCombo" || comboClassName == "comboPopcornchoice selectCombo") {
            for(let i = 0; i < countingNumber.length; i++) {
              countingNumber[i].value = 0;
            }
            infoCombo = [];
            infoComboPrice = 0;
          }
          if(countingNumber[i].value >= 2 && countingNumber[i].classList.contains("twoSelect")) {
            countingNumber[i].value = 2;
          }else if(countingNumber[i].value >= 1 && countingNumber[i].classList.contains("oneSelect")) {
            countingNumber[i].value = 1;
          }else{
            countingNumber[i].value = parseInt(countingNumber[i].value) + 1;
            infoCombo.push(e.target.parentNode.childNodes[1].innerHTML);
            infoComboPrice += parseInt(e.target.parentNode.childNodes[5].innerHTML);
            for(let j = 0; j < countingNumber.length; j++) {
              countArray.push(parseInt(countingNumber[j].value));
              countResult = countArray.reduce((prv,cuv)=>{
                return prv + cuv;
              })
            }
          }
        })
      } 

      for(let i = 0; i < plusCountDrink.length; i++) {
        plusCountDrink[i].addEventListener("click",(e)=>{
          drinkArray = [];
          if(drinkCountResult == 1 && comboClassName == "smallSetchoice selectCombo") {
            for(let i = 0; i < drinkSelect.length; i++) {
              drinkSelect[i].value = 0;
            }
            infoDrink = [];
          }else if(drinkCountResult == 2) {
            for(let j = 0; j < drinkSelect.length; j++) {
            drinkSelect[j].value = 0;
            }
            infoDrink = [];
          }
          if(drinkSelect[i].value >= 1 && comboClassName == "smallSetchoice selectCombo") {
            drinkSelect[i].value = 1;
          }else if(drinkSelect[i].value >= 2) {
            drinkSelect[i].value = 2;
          }else{
            drinkSelect[i].value = parseInt(drinkSelect[i].value) + 1;
            infoDrink.push(e.target.parentNode.childNodes[1].innerHTML);
          }
          for(let j = 0; j < drinkSelect.length; j++) {
            drinkArray.push(parseInt(drinkSelect[j].value));
            drinkCountResult = drinkArray.reduce((prv,cuv)=>{
              return prv + cuv;
            })
          }
        })
      }

      for(let i = 0; i < minusCount.length; i++) {
        minusCount[i].addEventListener("click",(e)=>{
          countArray = [];
          if(countingNumber[i].value <= 0) {
            countingNumber[i].value = 0;
          }else{
            infoCombo.pop();
            infoCombo.pop();
            countingNumber[i].value = parseInt(countingNumber[i].value) - 1;
          }
          for(let j = 0; j < countingNumber.length; j++) {
            countArray.push(parseInt(countingNumber[j].value));
            countResult = countArray.reduce((prv,cuv)=>{
              return prv + cuv;
            })
          }
        })
      } 

      for(let i = 0; i < minusCountDrink.length; i++) {
        minusCountDrink[i].addEventListener("click",()=>{
          drinkArray = [];
          if(drinkSelect[i].value <= 0) {
            drinkSelect[i].value = 0;
          }else{
            infoDrink.pop();
            drinkSelect[i].value = parseInt(drinkSelect[i].value) - 1;
          }
          for(let j = 0; j < drinkSelect.length; j++) {
            drinkArray.push(parseInt(drinkSelect[j].value));
            drinkCountResult = drinkArray.reduce((prv,cuv)=>{
              return prv + cuv;
            })
          }
        })
      }

      window.addEventListener("click",()=>{
        console.log(infoDrink);
        console.log(infoCombo);
        if(countResult == 2) {
          checkQty.style.visibility = "hidden";
        }else if(countResult == 1 && comboClassName == "smallSetchoice selectCombo") {
          checkQty.style.visibility = "hidden";
        }else if(countResult == 1 && comboClassName == "comboPopcornchoice selectCombo"){
          checkQty.style.visibility = "hidden";
        }else{
          checkQty.style.visibility = "visible";
        }


        if(checkQty.style.visibility == "visible") {
          checkQtyDrink.style.visibility = "hidden";
        }else if(countResult == 2 && drinkCountResult == 2) {
          checkQtyDrink.style.visibility = "hidden";
        }else if(countResult == 1 && drinkCountResult == 2 && comboClassName == "comboPopcornchoice selectCombo") {
          checkQtyDrink.style.visibility = "hidden";
        }else if(countResult == 1 && drinkCountResult == 1 && comboClassName == "smallSetchoice selectCombo") {
          checkQtyDrink.style.visibility = "hidden";
        }else if(checkQty.style.visibility == "hidden" && drinkCountResult == 1) {
          checkQtyDrink.style.visibility = "visible";
        }


      })

      class nextBtn {
        constructor() {}

        NextClick (countNumber, countNumber2 , ClassName) {
          modalNext.addEventListener("click",()=>{
            if(countResult == 2) {
              checkQtyDrink.style.visibility = "visible";
            }else if(countResult == 1 && comboClassName == "smallSetchoice selectCombo" || comboClassName == "comboPopcornchoice selectCombo") {
              checkQtyDrink.style.visibility = "visible";
            }
            for(let i = 0; i < selectCombo.length; i++) {
              if(countResult + drinkCountResult == countNumber && comboClassName == ClassName) {
                selectCombo[i].style.visibility = "hidden";
                drinkChoice.style.left = "0";
              }else if(countResult + drinkCountResult == countNumber2 && comboClassName == ClassName) {
                comboModal.style.top = "90rem";
                drinkChoice.style.left = "70rem";
                countResult = 0;
                drinkCountResult = 0;
                checkQtyDrink.style.visibility = "hidden";
                checkQty.style.visibility = "visible";
                cummaPrice = infoSelect[1] + infoComboPrice;
                let replaceStr = totalAmount.innerHTML;
                let secondReplace = replaceStr.replace(",","");
                let resultReplace = secondReplace.replace("원","");
                totalPriceAmount = cummaPrice + parseInt(resultReplace);
                totalAmount.innerHTML = `${totalPriceAmount.toLocaleString("kr")}`;
                orderList.innerHTML += `<li class="orderMenu"><span>${infoSelect[0]}</span><i class="xi-minus-square minus"></i><p class="su">1</p><i class="xi-plus-square plus"></i><span>${cummaPrice.toLocaleString("kr")} 원</span><div>${cummaPrice}</div><div>${infoDrink[0]}${infoDrink[1]}</div><div>${infoCombo[0]}${infoCombo[1]}</div><i class="xi-close-square close"></i></li>`;
                infoComboPrice = 0;
                infoDrink = [];
                for(let j = 0; j < countingNumber.length; j++) {
                  countingNumber[j].value = 0;
                  infoCombo = [];
                  }
                for(let k = 0; k < drinkSelect.length; k++) {
                  drinkSelect[k].value = 0;
                }
                }
              }  
            })
          }
        }

        let NextComboSelect = new nextBtn();

        NextComboSelect.NextClick(1,3,"comboPopcornchoice selectCombo");
        NextComboSelect.NextClick(2,4,"largeCombochoice selectCombo");
        NextComboSelect.NextClick(2,4,"doubleCombochoice selectCombo");
        NextComboSelect.NextClick(1,2,"smallSetchoice selectCombo");
    }

    let orderListCount = () =>{
      let orderList = document.querySelector(".orderList");
      let totalAmount = document.querySelector(".totalAmount");
      this.addEventListener("click",(e)=>{
        if(e.target.className == `xi-plus-square plus`) {
          let replaceStr = e.target.nextSibling.innerHTML;
          let replaceStrs = e.target.nextSibling.nextSibling.innerHTML;
          let secondReplace = replaceStr.replace(",","");
          let resultReplace = secondReplace.replace("원","");
          let totalReplace = totalAmount.innerHTML;
          let totalSecondReplace = totalReplace.replace(",","");
          let totalResultReplace = totalSecondReplace.replace("원","");
          let cummaPrice = parseInt(resultReplace) + parseInt(replaceStrs);
          let totalCummaPrice = parseInt(replaceStrs) + parseInt(totalResultReplace);
          let countMenu = parseInt(e.target.previousSibling.innerHTML);
          if(countMenu >= 9) {
            countMenu == 9;
          }else{
            countMenu++;
            e.target.nextSibling.innerHTML = cummaPrice.toLocaleString("kr") + " 원";
            totalAmount.innerHTML = totalCummaPrice.toLocaleString("kr");
            e.target.previousSibling.innerHTML = countMenu;
          }
        }
        if(e.target.className == `xi-minus-square minus`) {
          let replaceStr = e.target.nextSibling.nextSibling.nextSibling.innerHTML;
          let replaceStrs = e.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;
          let secondReplace = replaceStr.replace(",","");
          let resultReplace = secondReplace.replace("원","");
          let totalReplace = totalAmount.innerHTML;
          let totalSecondReplace = totalReplace.replace(",","");
          let totalResultReplace = totalSecondReplace.replace("원","");
          let cummaPirce = parseInt(resultReplace) - parseInt(replaceStrs);
          let totalCummaPrice = parseInt(totalResultReplace) - parseInt(replaceStrs);
          let countMenu = parseInt(e.target.nextSibling.innerHTML);
          if(countMenu <= 1) {
            countMenu == 1;
          }else{
            countMenu--;
            e.target.nextSibling.nextSibling.nextSibling.innerHTML = cummaPirce.toLocaleString("kr") + " 원";
            e.target.nextSibling.innerHTML = countMenu;
            totalAmount.innerHTML = totalCummaPrice.toLocaleString("kr");
          }
        }
        if(e.target.className == `xi-close-square close`) {
          let replaceStr = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
          console.log(replaceStr);
          let secondReplace = replaceStr.replace(",","");
          let resultReplace = secondReplace.replace("원","");
          let totalReplace = totalAmount.innerHTML;
          let totalSecondReplace = totalReplace.replace(",","");
          let totalResultReplace = totalSecondReplace.replace("원","");
          let totalCummaPrice = parseInt(totalResultReplace) - parseInt(resultReplace);
          e.target.parentNode.remove();
          totalAmount.innerHTML = totalCummaPrice.toLocaleString("kr");
        }
      }) 
    }


    let notCombo = () => {
      let orderList = document.querySelector(".orderList");
      let totalAmount = document.querySelector(".totalAmount");
      let cummaPrice = 0;
      let totalPriceAmount = 0;
      window.addEventListener("click",(e)=>{
        let menuInfo = [];
        if(e.target.classList.contains("storeList")) {
          let replace = e.target.childNodes[5].innerHTML;
          let priceReplace = replace.replace(",","");
          menuInfo.push(e.target.childNodes[3].innerHTML);
          menuInfo.push(parseInt(priceReplace));
          cummaPrice = menuInfo[1];
          let replaceStr = totalAmount.innerHTML;
          let secondReplace = replaceStr.replace(",","");
          let resultReplace = secondReplace.replace("원","");
          totalPriceAmount = cummaPrice + parseInt(resultReplace);
          totalAmount.innerHTML = `${totalPriceAmount.toLocaleString("kr")}`;
          orderList.innerHTML += `<li class="orderMenu"><span>${menuInfo[0]}</span><i class="xi-minus-square minus"></i><p class="su">1</p><i class="xi-plus-square plus"></i><span>${cummaPrice.toLocaleString("kr")} 원</span><div>${cummaPrice}</div><div></div><div></div><i class="xi-close-square close"></i></li>`;
        }else if(e.target.classList.contains("notComboMenu")) {
          let replace = e.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;
          let pirceReplace = replace.replace(",","");
          menuInfo.push(e.target.nextSibling.nextSibling.innerHTML);
          menuInfo.push(parseInt(pirceReplace));
          cummaPrice = menuInfo[1];
          let replaceStr = totalAmount.innerHTML;
          let secondReplace = replaceStr.replace(",","");
          let resultReplace = secondReplace.replace("원","");
          totalPriceAmount = cummaPrice + parseInt(resultReplace);
          totalAmount.innerHTML = `${totalPriceAmount.toLocaleString("kr")}`;
          orderList.innerHTML += `<li class="orderMenu"><span>${menuInfo[0]}</span><i class="xi-minus-square minus"></i><p class="su">1</p><i class="xi-plus-square plus"></i><span>${cummaPrice.toLocaleString("kr")} 원</span><div>${cummaPrice}</div><div></div><div></div><i class="xi-close-square close"></i></li>`;
        }
      })
    }

    let payMent = () => {
      let orderPayment = document.querySelector(".orderPayment");
      let orderCheckbox = document.querySelector(".orderCheckbox");
      let checkOrder = document.querySelector(".checkOrder");
      let lastPayMent = document.querySelector(".lastPayMent");
      let totalAmount = document.querySelector(".totalAmount");
      let discountPayMent = document.querySelector(".discountPayMent");
      let returnToprev = document.querySelector(".returnToprev");

      orderPayment.addEventListener("click",()=>{
        let orderMenu = document.querySelectorAll(".orderMenu");
        if(orderMenu.length >= 1) {
        checkOrder.style.visibility = "visible";
        returnToprev.style.left = "0rem";
        for(let i = 0; i < orderMenu.length; i++) {
        let resultCombo = orderMenu[i].childNodes[7].innerHTML.replace("undefined","");
        let resultDrink = orderMenu[i].childNodes[6].innerHTML.replace("undefined","");
        console.log(resultCombo);
        if(resultCombo == "") {
          orderCheckbox.innerHTML += `<p>${orderMenu[i].childNodes[0].innerHTML}</p><span>${orderMenu[i].childNodes[4].innerHTML}</span><br /><p></p>`;
        }else{
          orderCheckbox.innerHTML += `<p>${orderMenu[i].childNodes[0].innerHTML}</p><span>${orderMenu[i].childNodes[4].innerHTML}</span><br /><p>팝콘: ${resultCombo} / 음료: ${resultDrink}</p>`;
        }
        
        lastPayMent.innerHTML = `${totalAmount.innerHTML} 원`;
        discountPayMent.innerHTML = `${totalAmount.innerHTML} 원`;
        }
      }
      })
      returnToprev.addEventListener("click",()=>{
        orderCheckbox.innerHTML = "";
        lastPayMent.innerHTML = `0 원`;
        discountPayMent.innerHTML = `0 원`;
        checkOrder.style.visibility = "hidden";
        returnToprev.style.left = "8rem";
      })
    }

    selectMenu();
    selectOption();
    orderListCount();
    notCombo();
    payMent();
})();