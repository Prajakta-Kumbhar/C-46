var form, game,player
var database
var gameState = 0
var playerCount = 0
var background_img;
var player1,player1_image;
var player2, player2_image;
var track,track_image;
var coins, coins_image;
var hurdle, hurdle_image;

function preload()
{
  background_img = loadImage("start_image.png")
  player1_image = loadAnimation("images/player1_image.gif")
  player2_image = loadImage("images/player2_image.gif")
  track_image = loadImage("track1.png")
  coins_image = loadImage("images/coins.png")
  hurdle_image = loadImage("images/hurdle.png")
}

function setup()
{
  createCanvas(windowWidth,windowHeight)

   database = firebase.database()

   game = new Game()
   
   game.getState()
   game.startGame()



}

function draw()
{
  // background("white")
   
if(playerCount === 2)
{
  game.update(1)
}
if(gameState === 1)
{
  game.play()
}


}
