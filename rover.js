//Mars Rovers
var r1 = {
x: 0,
y: 0,
facing: "N",
lastPositions: []
};

var r2 = {
x: 0,
y: 0,
facing: "N",
lastPositions: []
};

//Mars grid
var grid = [
  [null, null, null, null, "0", null, null, null, null],
  ["0", null, null, null, null, null, null, null, "0"],
  [null, null, "0", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "0", null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "0"],
  [null, null, null, null, null, null, null, null, null]
];

//Turning commands

function turnLeft(r){
  switch (r.facing) {
    case "N":
      r.facing = "W";
      break;
    case "E":
      r.facing = "W";
      break;
    case "S":
      r.facing = "E";
      break;
    case "W":
      r.facing = "S";
      break;
  }
}

function turnRight(r){
  switch (r.facing) {
    case "N":
      r.facing = "E";
      break;
    case "E":
      r.facing = "S";
      break;
    case "S":
      r.facing= "W";
      break;
    case "W":
      r.facing = "N";
      break;
  }
}

//movingForward+edgeDetection+roverDetection+obstacleDetection
function moveForward(r){
var lastX=r.x;
var lastY=r.y;
var ground

if (((r.x+1>9)&&(r.facing === "E")) ||
   ((r.x-1<0)&&(r.facing === "W")) ||
   ((r.y+1>9)&&(r.facing === "N")) ||
   ((r.y-1<0)&&(r.facing === "S"))){
  console.log("You're on the edge of the World. Don't fall off!!");
}

else{
  switch (r.facing) {
    case "N":
    ground = grid[r.x][r.y+1];

    if (ground === "0"){
      console.log("Don't crash into rocks! Rovers are expensive!")
    }
    else if (ground === "R"){
      console.log("Don't crash into other Rovers! That's even more expensive!")
      }
    else{
      r.y = r.y+1
      r.lastPositions.push(lastX+","+lastY);
  }
break;
case "E":
ground = grid[r.x+1][r.y];

if (ground === "0"){
  console.log("Don't crash into rocks! Rovers are expensive!")
}
else if (ground === "R"){
  console.log("Don't crash into other Rovers! That's even more expensive!")
  }
else{
  r.x = r.x+1
  r.lastPositions.push(lastX+","+lastY);
}
break;
case "S":
ground = grid[r.x][r.y-1];

if (ground === "0"){
  console.log("Don't crash into rocks! Rovers are expensive!")
}
else if (ground === "R"){
  console.log("Don't crash into other Rovers! That's even more expensive!")
  }
else{
  r.y = r.y-1;
  r.lastPositions.push(lastX+","+lastY);
}
break;
case "W":
ground = grid[r.x-1][r.y];

if (ground === "0"){
  console.log("Don't crash into rocks! Rovers are expensive!")
}
else if (ground === "R"){
  console.log("Don't crash into other Rovers! That's even more expensive!")
  }
else{
  r.x = r.x-1
  r.lastPositions.push(lastX+","+lastY);
}
break;
}
}
}


////movingBackward+edgeDetection+roverDetection+obstacleDetection

function moveBackward(r){
var lastX=r.x;
var lastY=r.y;
var ground

if (((r.x+1>9)&&(r.facing === "E")) ||
   ((r.x-1<0)&&(r.facing === "W")) ||
   ((r.y+1>9)&&(r.facing === "N")) ||
   ((r.y-1<0)&&(r.facing === "S"))){
  console.log("You're on the edge of the World. Don't fall off!!");
}

else{
  switch (r.facing) {
    case "N":
    ground = grid[r.x][r.y-1];

    if (ground === "0"){
      console.log("Don't crash into rocks! Rovers are expensive!")
    }
    else if (ground === "R"){
      console.log("Don't crash into other Rovers! That's even more expensive!")
      }
    else{
      r.y = r.y-1
      r.lastPositions.push(lastX+","+lastY);
  }
break;
case "E":
ground = grid[r.x-1][r.y];

if (ground === "0"){
  console.log("Don't crash into rocks! Rovers are expensive!")
}
else if (ground === "R"){
  console.log("Don't crash into other Rovers! That's even more expensive!")
  }
else{
  r.x = r.x-1
  r.lastPositions.push(lastX+","+lastY);
}
break;
case "S":
ground = grid[r.x][r.y+1];

if (ground === "0"){
  console.log("Don't crash into rocks! Rovers are expensive!")
}
else if (ground === "R"){
  console.log("Don't crash into other Rovers! That's even more expensive!")
  }
else{
  r.y = r.y+1;
  r.lastPositions.push(lastX+","+lastY);
}
case "W":
ground = grid[r.x+1][r.y];

if (ground === "0"){
  console.log("Don't crash into rocks! Rovers are expensive!")
}
else if (ground === "R"){
  console.log("Don't crash into other Rovers! That's even more expensive!")
  }
else{
  r.x = r.x+1
  r.lastPositions.push(lastX+","+lastY);
}
break;
}
}
}
//MarsRoverController
function move(directions, r){
  grid[r.x][r.y]=null;
  for (var i=0; i<directions.length; i++){
    switch (directions[i]){
      case "l":
        turnLeft(r);
        break;
        case "r":
          turnRight(r);
          break;
      case "f":
        moveForward(r);
        break;
      case "b":
        moveBackward(r);
        break;
        default:
        console.log("Invalid Directions");
break;
        }
      }
        console.log("Current Position: "+r.x+","+r.y+"facing: "+r.facing);
        console.log("Previous Positions: "+r.lastPositions);
grid[r.x][r.y]="R";

}
