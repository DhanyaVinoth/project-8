var box 
function setup() {
  createCanvas(500,350);
box= createSprite(40,40,30,30)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
    background('green')
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5
    background('blue')
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-5
    background('purple')
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+5
    background('yellows')
  }

drawSprites()
}




