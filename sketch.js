var canvas;
var music;
var box1,box2,box3,box4;
var mainBox,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    box1=createSprite(700,580,150,10);
    box1.shapeColour=rgb(0,0,255);

    box2=createSprite(100,580,150,10);
    box2.shapeColour=rgb(255,128,0);
    
    box3=createSprite(500,580,150,10);
    box3.shapeColour=rgb(153,0,76);

    box4=createSprite(300,580,150,10);
    box4.shapeColour=rgb(0,100,0);
   
    mainBox=createSprite(200,100,20,20);
    mainBox.shapeColour=rgb(255,255,255);
    mainBox.velocityY=4;
    mainBox.velocityX=9;
    mainBox.y=mouseY;
    
 
    

    

}

function draw() {
    background("black");
    
    edges=createEdgeSprites();
    
mainBox.bounceOff(box1);
mainBox.bounceOff(box2);
mainBox.bounceOff(box3);
mainBox.bounceOff(box4);
mainBox.bounceOff(edges);


 if(box1.isTouching(mainBox) && mainBox.bounceOff(box1)){
     mainBox.shapeColor = rgb(0,0,255);
      music.play();
     } 
     
     if(box2.isTouching(mainBox)){ 
         mainBox.shapeColor = rgb(255,128,0); 
         mainBox.velocityX = 0; 
         mainBox.velocityY = 0;
          music.stop(); 
        }
        
        if(box3.isTouching(mainBox) && mainBox.bounceOff(box3)){ 
            mianBox.shapeColor = rgb(153,0,76);
         }
         
         if(box4.isTouching(mainBox) && mainBox.bounceOff(box4)){
              mainBox.shapeColor = rgb(0,100,0);
 }


   
  
drawSprites();
}
