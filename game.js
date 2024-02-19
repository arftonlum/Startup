let myposition = [1,1,"N"];

//Tile types emptyTile, ArcR, ArcL, Cross
//build board
const board = [];
let boardwidth = 3;
let boardheight= 3
let score = 0;
function Buildboard(){
    console.log("building board");
    for (let i = 0; i<boardwidth; i++){
      board.push(column=[]);
        for (let i = 0; i<boardheight; i++){
            column.push({tile:"empty"})
        }}}

function ArcR (position){
    console.log("running ArcR")
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
};
function clickcross (){
    board[myposition[0]][myposition[1]].tile="crosstile";
    console.log("placed Cross in",myposition[0],myposition[1]);
};
//Reset Function
//Draw board
function makepath(){
    console.log("runningpath looks like", board[myposition[0]][myposition[1]]);
    if (myposition[0] == 0 || myposition[1] == 0 || myposition[0] == boardwidth || myposition[1] == boardheight ){
        console.log("game over you got", score, "points")
        return;
    };
    score++;
    console.log("you have",score, "points");
    console.log(board[myposition[0]][myposition[1]]=="empty",board[myposition[0]][myposition[1]]);
    if (board[myposition[0]][myposition[1]].tile=="empty"){
        console.log("nothing at", myposition[0],myposition[1]);
        return;
    }
    else if (board[myposition[0]][myposition[1]].tile=="arcrtile"){
        console.log("ArcR here")
        myposition=ArcR(myposition);

    }
    else if (board[myposition[0]][myposition[1]].tile=="arcltile"){
        console.log("ArcL here")
        myposition= ArcL(myposition);
    }
    else if (board[myposition[0]][myposition[1]].tile=="crosstile"){
        myposition=Cross(myposition);
        console.log("Cross here")
    };
    console.log("tile we are on",board[myposition[0]][myposition[1]],"our position",myposition);
}
//check for loss

