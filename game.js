let myposition = [1,1,"S"];
let board = [];
let boardwidth = 5;
let boardheight= 5;
let score = 0;
function Buildboard(){

    board=[];
    myposition=[1,1,"S"];
    score = 0;
    console.log("building board");
    for (let i = 0; i<boardwidth; i++){
      board.push(column=[]);
        for (let i = 0; i<boardheight; i++){
            column.push({tile:"empty"})
        }}}
function DrawTiles(){
const c = document.getElementById("boardofthegame");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(myposition[0]*100, myposition[1]*100, 50, 0, .5*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(myposition[0]*100+100,myposition[1]*100+100,50,Math.PI,1.5*Math.PI);
ctx.strokeStyle="green";
ctx.stroke();
    
}
function ArcR (position){
    console.log("running ArcR")
    DrawTiles();
    let newPos = [...position];
    if (newPos[2] == "N"){
      newPos[0] --;
      newPos[2] = "E";
    }
    else if (newPos[2] == "E"){
        newPos[1] ++;
        newPos[2] = "S"; 
    }    
    else if (newPos[2] == "W"){
        newPos[1]--;
        newPos[2] = "N"; 
    }
    else if (newPos[2] == "S"){
        newPos[0]++;
        newPos[2] = "W"; 
    }
  return newPos;
}
function ArcL (position){
    console.log("running ArcL")
    DrawTiles();
    let newPos = [...position];
    if (newPos[2] == "N"){
      newPos[0] ++;
      newPos[2] = "W";
    }
    else if (newPos[2] == "E"){
        newPos[1] --;
        newPos[2] = "N"; 
    }    
    else if (newPos[2] == "W"){
        newPos[1]++;
        newPos[2] = "S"; 
    }
    else if (newPos[2] == "S"){
        newPos[0]--;
        newPos[2] = "E"; 
    }
  return newPos;
}
function Cross (position){
    console.log("running Cross")
    DrawTiles();
    let newPos = [...position];
    if (newPos[2] == "N"){
      newPos[1] --;
    }
    else if (newPos[2] == "E"){
        newPos[0] --; 
    }    
    else if (newPos[2] == "W"){
        newPos[0]++;
    }
    else if (newPos[2] == "S"){
        newPos[1]++;
    }
  return newPos;
}
//button function
function clickarcl (){
board[myposition[0]][myposition[1]].tile="arcltile";
console.log(board[myposition[0]][myposition[1]],"placed arcL in",myposition[0],myposition[1]);
makepath();
};
function clickarcr (){
    board[myposition[0]][myposition[1]].tile="arcrtile";
    console.log("placed arcR in",myposition[0],myposition[1]);
    makepath();
};
function clickcross (){
    board[myposition[0]][myposition[1]].tile="crosstile";
    console.log("placed Cross in",myposition[0],myposition[1]);
    makepath();
};
function makepath(){
    console.log("runningpath looks like", board[myposition[0]][myposition[1]]);
    if (myposition[0] == -1 || myposition[1] == -1 || myposition[0] == boardwidth || myposition[1] == boardheight ){
        console.log("game over you got", score, "points")
        return;
    };

    if (board[myposition[0]][myposition[1]].tile=="empty"){
        console.log("nothing at", myposition[0],myposition[1]);
        return;
    }

    else if (board[myposition[0]][myposition[1]].tile=="arcrtile"){
        console.log("ArcR here")
        score++;
        console.log("you have",score, "points");
        myposition=ArcR(myposition);

    }
    else if (board[myposition[0]][myposition[1]].tile=="arcltile"){
        console.log("ArcL here")
        score++;
        console.log("you have",score, "points");
        myposition= ArcL(myposition);
    }
    else if (board[myposition[0]][myposition[1]].tile=="crosstile"){
        myposition=Cross(myposition);
        score++;
        console.log("you have",score, "points");
        console.log("Cross here")
    };
    console.log("tile we are on",board[myposition[0]][myposition[1]],"our position",myposition);
    makepath();
}

