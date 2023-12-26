var canvas
var background
var car1,car2,car1Img,car2Img
var backgroundImg
var blastImg
var goldCoinImg,goldCoin
var fuelImg,fuel
var resetImg,reset
var database,gameState
var form,players,playerCount
var obstacle1Img,obstacle2Img
var cars = []
var allPlayers,obstacles,track


function preload(){
  backgroundImg = loadImage("assets/background.png")
  blastImg = loadImage("assets/blast.png")
  car1Img = loadImage("assets/car1.png")
  car2Img = loadImage("assets/car2.png")
  fuelImg = loadImage("assets/fuel.png")
  goldCoinImg = loadImage("assets/goldCoin.png")
  resetImg = loadImage("assets/reset.png")
  track = loadImage("assets/track.jpg")
  obstacle1Img = loadImage("assets/obstacle1.png")
  obstacle2Img = loadImage("assets/obstacle2.png")
  
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight)
  database = firebase.database()
  game = new Game()

}

function draw(){
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
