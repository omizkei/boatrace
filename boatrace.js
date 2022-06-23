function aaOutput() {
    // console.log("aa")
    let num = 3;
    data = count(num);
    console.log(data);
    // let data = 2;
    // num = num + 100;
    // console.log(num);
}


function count(countData) {
//     // if (countData < 10) {
//     //     console.log("countData 10未満");
//     //     countData = countData + 1;
//     // } else {
//     //     console.log("countDataが10以上です");
//     // }
//     // for (let i = 0; i < 10; i++){
//     //     countData += 1;
//     //     console.log("今の値は"+ countData)
//     // }
    let whileToF;
    while (whileToF != "OK!") {
        countData++;
        console.log(countData);
        if (countData >10) {
            whileToF ="OK!"
        }
    }
    return countData;
}

// // アロー関数の書き方
// const outPut = () => {
//     console.log("hello")
// }
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;

console.log(rotateValue);
var rotateSum;

let x = 0;

let memo = function (num) {
    //upButton：num = +1
    //downButton：num = -1
    const detail1 = document.getElementById("public_gumble");
    const detail2 = document.getElementById("racer_profile");
    const detail3 = document.getElementById("Youtube");
    const detail4 = document.getElementById("technics");
    const detail5 = document.getElementById("documents");
    const details = [detail1, detail2, detail3, detail4];
    x = x + num;

    if(x == 4){
        x = 0
    }else if(x == -1){
        x = 3;
    }

    console.log(x);

    detail5.innerHTML = details[x].textContent

    // for (let num = 0; num < details.length; num++) {
    //     let element = details[num];
    //      detail4.innerHTML = element.textContent;
    // }
}

//upを押したらdetails[]の中を+1
//downを押したらdetails[]の中を-1
//ただし0と3で連結させる

upBtn.onclick = function () {
    // 時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    console.log(rotateSum);
    console.log("ok");
    memo(1);
}

downBtn.onclick = function () {
    // 反時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    memo(-1);
}