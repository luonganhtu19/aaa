let arrPl1= new Array();
let arrPl2 = new Array();
let arr=[];
let strPl1="";
let strPl2="";
let point1=0;
let point2=0;
let arrNumberStr="";
let id = 0;
const arrType =["C","D","H","S"];
let run;
function display() {
    clearStrig();
    for (let i = 0; i < 52; i++) {
        arr[i] = random();
    }
    // for (let i=0;i<52;i++){
    //     window.setInterval(chooseArr(`${i}`),1000);
    // }
    run = setInterval(chooseArr,100);
    // document.getElementById("cards1").innerHTML=strPl1;
    // document.getElementById("cards2").innerHTML=strPl2;
    // clearStrig();
}
function chooseArr() {
    console.log("a");
    if(id%2==0){
        arrPl1.push(arr[id]);
        strPl1+=`<img class="cards" src="cards/${arr[id]}.svg" alt="">`
        document.getElementById("cards1").innerHTML=strPl1;
    }else {
        arrPl2.push(arr[id]);
        strPl2+=`<img class="cards" src="cards/${arr[id]}.svg" alt="">`
        document.getElementById("cards2").innerHTML=strPl2;
    }
    id++;
    if(id >= 52){
        clearInterval(run);
    }

}

function random(){
    do {
        let rad = Math.random();
        let rad1=Math.random();
        let radNumber = Math.floor(rad * 13+1);
        let tyIndex = Math.floor(rad1 * 4+1);
        let type=arrType[tyIndex-1];
         arrNumberStr =radNumber+""+type;
    }while (arr.indexOf(arrNumberStr)   != -1);
    return arrNumberStr;
}
function checkWin() {
    for (let i = 0; i < 26; i++) {
        let count2,count1=0
        count1= +arrPl1[i].substring(0,arrPl1[i].length-1);
        count2= +arrPl2[i].substring(0,arrPl2[i].length-1);

        if (count1>count2){
             point1=point1+count1-count2;
             //alert(point1+" point 1")
        }else {
            point2=point2+count2-count1;
            // alert(point2+" point2")
        }
    }
    //alert(point1);
    if (point1>point2){
        alert("Player 1 you win with "+point1);
    }else if(point2>point1) {
        alert("Player 2 you win with "+point2 );
    }else {
        alert("The number of points crossed each other");
    }
}

function clearStrig() {
    arrPl1= new Array();
    arrPl2 = new Array();
    arr=[];
    strPl1="";
    strPl2="";
    point1=0;
    point2=0;
    arrNumberStr="";
    id = 0;
}




