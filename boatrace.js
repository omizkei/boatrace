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


let memo = function (after_detail) {
    
    // const detail1 = document.getElementById("public_gumble");
    const detail1 = document.getElementById("technics");
    const detail2 = document.getElementById("Youtube");
    const detail3 = document.getElementById("racer_profile");
    const detail4 = document.getElementById("documents");
    const details = [detail1, detail2, detail3];
  
        for (let num = 0; num < array.length; num++) {
            let element = array[num];
            after_detail = detail4.innerHTML = details[0].textContent;
            return after_detail   
        }

    
}

upBtn.onclick = function () {
    // 時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    console.log(rotateSum);
    console.log("ok");
    // after_detail = "b"
    nextdata = memo(after_detail);
}

downBtn.onclick = function () {
    // 反時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}





