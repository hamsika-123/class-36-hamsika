var database;
var gameState=0, playerCount=0;

var form, game, player;
var allPlayers;

function setup(){
  database = firebase.database();
 
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
   
}

function draw(){
  background("white");
  
    if(playerCount==4){
      game.updateState(1);
    }
    if(gameState==1){
      game.play();
    }
}

 