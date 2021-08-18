
function setup() {
  createCanvas(400,400);
}

function draw() 
{
 // background('brown');

  if(keyDown("Space")){
    background("green");
  }

  if(keyDown("left")){
    background("red");
  }

  if(keyDown("right")){
    background("blue");
  }

}




