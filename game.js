const a = [x0,x1,x2,x3,x4,x5,x6,x7,x8];
const b = [y0,y1,y2,y3,y4,y5,y6,y7,y8];
const position = [x2,y0,N];

//Tile types emptyTile, ArcR, ArcL, Cross
//build board
const board = []
function Buildboard(width=3,height=3){
    for (let i = 0; i<width; i++){
      board.push(column=[]);
        for (let i = 0; i<height; i++){
            column.push({tile:"empty"})
        }}}

} }
//the logic on these is not done
function ArcR (position){
    if (position[2] == N){
        position[0] --;
        position[2] = W; 
    };
    if (position[2] == E){
        position[1];
        position[2] = S; 
    };
    if (position[2] == W){
        position[0]++;
        position[2] = N; 
    };
    if (position[2] == S){
        position[0]++;
        position[2] = E; 
    };
}
//doesn't seem to stay changed after the fact
function ArcL (position){
    console.log("function");
      if (position[2] == "N"){
          position[0] --;
          position[2] = "W";

      };
      if (position[2] == "E"){
          position[1]--;
          position[2] = "S"; 
      };
      if (position[2] == "W"){
          position[0]++;
          position[2] = "N"; 
      };
      if (position[2] == "S"){
          position[0]++;
          position[2] = "E"; 
      };
  }
}
function Cross (position){
    if (position[2] == N){
        position[1] --; 
    };
    if (position[2] == S){
        position[1] ++; 
    };
    if (position[2] == W){
        position[0] ++;
    };
    if (position[2] == E){
        position[0] --;
    };
}
