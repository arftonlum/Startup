const a = [x0,x1,x2,x3,x4,x5,x6,x7,x8];
const b = [y0,y1,y2,y3,y4,y5,y6,y7,y8];
const position = [x2,y0,"up"]
//const shapearcs = [x+1,y+1, right]
//rotate arcs = [x-1, y+1, left]
//Shapeplus = [x, y+2,Up]

//if position ever has x8 or y8, game over
//Shapes will find where we are in our arrays, then based on the direction we are facing move up or down one on the array.
// if position[2] == left
//const shapearcs = [x-1,y+1, "up"]
//const arc2 = [x-1, y-1, "down"]
//Shapeplus = [x-2, y,"left"]

// if position[2] == right
//const shapearcs = [x+1,y-1, "down"]
//const arc2 = [x+1, y+1, "up"]
//Shapeplus = [x+2, y,"right"]

// if position[2] == down
//const shapearcs = [x-1,y-1, "left"]
//const arc2 = [x+1, y-1,"right"]
//Shapeplus = [x, y-2,"down"]

//other idea, as we play the game, shapes assign functions to values in our array.
//const shapearcs = const horizontal = index of position[0] in a, a[horizontal]=
// const vert = index of position[1] in a, a[vert] = 

//Maybe set all the coordinates equal to like "nothing" then have when