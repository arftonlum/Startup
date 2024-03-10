//add a way for the new player to see if they need to move before playing
//add text to say what players turn
let firstposition = [1,1,"S","first"];
let secondposition=[1,1,"S","second"];
let myposition=[0,0,"N","first"]
let board = [];
let boardwidth = 7;
let boardheight= 7;
let score = 0;
let multiplier=1;
function Buildboard(){
    let blah = document.getElementById("boardofthegame");
    let blahtx = blah.getContext("2d");
    blahtx.reset(); 
    drawtemplates();
    document.querySelector('.player-name').textContent=getPlayerName();
    board=[];
    firstposition=[3,0,"N","first"];
    secondposition=[3,6,"S","second"];
    myposition=[...firstposition];
    score = 0;
    updateScore(score);
    for (let i = 0; i<boardwidth; i++){
      board.push(column=[]);
        for (let i = 0; i<boardheight; i++){
            column.push({tile:"empty"})
        }}}
function changeturns(){
  console.log("changeturns");
if (myposition[3] == "first"){
  console.log(myposition,firstposition);
  firstposition=[...myposition];
  myposition=[...secondposition];
  console.log(myposition,firstposition);
}
else {secondposition= [...myposition]
myposition=[...firstposition];
};
}
function drawtemplates(){
  let a = document.getElementById("righttemplate");
  let atx = a.getContext("2d");
  atx.beginPath();
  atx.arc(0, 0, 50, 0, .5*Math.PI);
  atx.stroke();
  atx.beginPath();
  atx.arc(100,100,50,Math.PI,1.5*Math.PI);
  atx.stroke();
  let c = document.getElementById("lefttemplate");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 0, 50, 0.5*Math.PI, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,100,50,1.5*Math.PI,2*Math.PI);
    ctx.stroke();
    let b = document.getElementById("crosstemplate");
    let btx = b.getContext("2d");
    btx.beginPath();
    btx.moveTo(0,50);
    btx.lineTo(100,50);
    btx.moveTo(50,0);
    btx.lineTo(50,100);
    btx.stroke(); 
}
function DrawArcRTiles(firstlinesize=1,twolinesize=1){
const c = document.getElementById("boardofthegame");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(myposition[0]*100, myposition[1]*100, 50, 0, .5*Math.PI);
ctx.lineWidth=firstlinesize;
ctx.stroke();
ctx.lineWidth=1;
ctx.beginPath();
ctx.arc(myposition[0]*100+100,myposition[1]*100+100,50,Math.PI,1.5*Math.PI);
ctx.lineWidth=twolinesize;
ctx.stroke();
ctx.lineWidth=1; 
}
function DrawArcLTiles(firstlinesize=1,twolinesize=1){
    const c = document.getElementById("boardofthegame");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(myposition[0]*100+100, myposition[1]*100, 50, 0.5*Math.PI, Math.PI);
    ctx.lineWidth=firstlinesize;
    ctx.stroke();
    ctx.linewidth=1;
    ctx.beginPath();
    ctx.arc(myposition[0]*100,myposition[1]*100+100,50,1.5*Math.PI,2*Math.PI);
    ctx.lineWidth=twolinesize;
    ctx.stroke();
    ctx.lineWidth=1;   
    }
function DrawCrossTiles(){
    const c = document.getElementById("boardofthegame");
    const ctx = c.getContext("2d");
    ctx.beginPath();
ctx.moveTo(myposition[0]*100,myposition[1]*100+50);
ctx.lineTo(myposition[0]*100+100,myposition[1]*100+50);
ctx.moveTo(myposition[0]*100+50,myposition[1]*100);
ctx.lineTo(myposition[0]*100+50,myposition[1]*100+100);
ctx.stroke();
}
function ArcR (position){
    let newPos = [...position];
    if (newPos[2] == "N"){
      DrawArcRTiles(5,1);
      newPos[0] --;
      newPos[2] = "E";
    }
    else if (newPos[2] == "E"){
      DrawArcRTiles(1,5);
        newPos[1] ++;
        newPos[2] = "N"; 
    }    
    else if (newPos[2] == "W"){
      DrawArcRTiles(5,1);
        newPos[1]--;
        newPos[2] = "S"; 
    }
    else if (newPos[2] == "S"){
      DrawArcRTiles(1,5);
        newPos[0]++;
        newPos[2] = "W"; 
    }
  return newPos;
}
function ArcL (position){

    let newPos = [...position];
    if (newPos[2] == "N"){ 
      DrawArcLTiles(5,1);      
      newPos[0] ++;
      newPos[2] = "W";
    }
    else if (newPos[2] == "E"){
      DrawArcLTiles(5,1);
        newPos[1] --;
        newPos[2] = "S"; 
    }    
    else if (newPos[2] == "W"){
      DrawArcLTiles(1,5);
        newPos[1]++;
        newPos[2] = "N"; 
    }
    else if (newPos[2] == "S"){
      DrawArcLTiles(1,5);
        newPos[0]--;
        newPos[2] = "E"; 
    }
  return newPos;
}
function Cross (position){
    DrawCrossTiles();
    let newPos = [...position];
    if (newPos[2] == "N"){
      const c = document.getElementById("boardofthegame");
    const ctx = c.getContext("2d");
    ctx.lineWidth=5;
    ctx.beginPath();
    ctx.moveTo(myposition[0]*100+50,myposition[1]*100);
    ctx.lineTo(myposition[0]*100+50,myposition[1]*100+100);
    ctx.stroke();
    ctx.lineWidth=1;
      newPos[1] ++;
    }
    else if (newPos[2] == "E"){
      const c = document.getElementById("boardofthegame");
      const ctx = c.getContext("2d");
      ctx.lineWidth=5;
      ctx.beginPath();
      ctx.moveTo(myposition[0]*100,myposition[1]*100+50);
      ctx.lineTo(myposition[0]*100+100,myposition[1]*100+50);
      ctx.stroke();
      ctx.lineWidth=1;
        newPos[0] --; 
    }    
    else if (newPos[2] == "W"){
      const c = document.getElementById("boardofthegame");
      const ctx = c.getContext("2d");
      ctx.lineWidth=5;
      ctx.beginPath();
      ctx.moveTo(myposition[0]*100,myposition[1]*100+50);
      ctx.lineTo(myposition[0]*100+100,myposition[1]*100+50);
      ctx.stroke();
      ctx.lineWidth=1;
        newPos[0]++;
    }
    else if (newPos[2] == "S"){
      const c = document.getElementById("boardofthegame");
      const ctx = c.getContext("2d");
      ctx.lineWidth=5;
      ctx.beginPath();
      ctx.moveTo(myposition[0]*100+50,myposition[1]*100);
      ctx.lineTo(myposition[0]*100+50,myposition[1]*100+100);
      ctx.stroke();
      ctx.lineWidth=1;
        newPos[1]--;
    }
  return newPos;
}
//button function
function clickarcl (){
board[myposition[0]][myposition[1]].tile="arcltile";
makepath();
};
function clickarcr (){
    board[myposition[0]][myposition[1]].tile="arcrtile";
    makepath();
};
function clickcross (){
    board[myposition[0]][myposition[1]].tile="crosstile";
    makepath();
};
function makepath(){
  updateScore(score);
    if (myposition[0] == -1 || myposition[1] == -1 || myposition[0] == boardwidth || myposition[1] == boardheight ){
        score=score*100
        saveScore(score);
        const nscore=`Game over! You got ${score} points`;
        updateScore(nscore);
        return;
    };

    if (board[myposition[0]][myposition[1]].tile=="empty"){
        multiplier=1;
        //changeturns();
        return;
    }

    else if (board[myposition[0]][myposition[1]].tile=="arcrtile"){
        console.log("ArcR here")
        score=score+multiplier;
        multiplier++;
        myposition=ArcR(myposition);

    }
    else if (board[myposition[0]][myposition[1]].tile=="arcltile"){
        score=score+multiplier;
        multiplier++;
        myposition= ArcL(myposition);
    }
    else if (board[myposition[0]][myposition[1]].tile=="crosstile"){
        myposition=Cross(myposition);
        score=score+multiplier;
        multiplier++;
    };
    makepath();
}
function streak(bonus){

}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }
  function updateScore(score) {
    if (typeof score === 'string'){
      const scoreEl = document.querySelector('#score');
      scoreEl.textContent = score;
    }
    else{
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score*100;}
  }
//score stuff I am pretty sure works

async function saveScore(score) {
    const userName = this.getPlayerName();
    console.log('should send the score', JSON.stringify({name:userName,score:score,date:new Date().toLocaleDateString()}))
    await fetch('/api/score',{
      method:'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({name:userName,score:score,date:new Date().toLocaleDateString()})});
  }

// on page load, start a new game
Buildboard();