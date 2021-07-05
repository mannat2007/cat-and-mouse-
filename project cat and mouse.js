var backgroundImage,cat,mouse
var cat, catImage1,catImage2,
var mouse,mouseImage1,mouseImage2

function preload() {
    //load the images here
    backgroundImage=loadImage("garden.png");
    catImage=loadAnimation("cat1.png");
    mouseImage=loadAnimation("mouse1.png");
    catImage2=loadAnimation("cat3.png,cat2.png");
    mouseImage2=laodAnimationn("mouse2.png,mouse3.png");




}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat =createSprite(870,600);
    cat.addAnimation("catSleeping");
    cat.scale=0.3;

    jerry = createSprite(200,600)
    jerry.addAnimation("jerryStanding")
}

function draw() {

    background(garden.png);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x -jerry.x < (cat.with - jerry.width)/2)
    {

    cat.velocityX=0;
    cat.addAnimation("catLastIjmage");
    cat.x=300;
    cat.scale=0.2;
    cat.changeAnimation("tomLastImage");
    
    mouse.addAnimation("mouse1.png")
    mouse.scale=0.13;
    mouse.changeAnimation("mouse1.png")
    }







    drawSprites();
}

function keyPressed(){

if (keyCode===LeftArrow){

mouse.addAnimation("mouseTeasing");
mouse.changeAnimation("mouseTeasing");
mouse.FrameDelay=25;

cat.velocityX=-5;
cat.addAnimation("catRunning" );
cat.changeAnimation("catRunning");

}












}



