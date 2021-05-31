class Game
{
    constructor()
    {

    }


    play()
    {

       form.hide()
      
       background("white")

       drawSprites()
    }

    update(state)
    {
      database.ref("/").update({"gameState": state})
    }

    getState()
    {
      var dbref = database.ref("gameState")
      dbref.on("value",(data) =>
      {
         gameState = data.val()
      })
    }
   
   startGame()
   {
     if(gameState === 0)
     {
         form = new Form()
         player = new Player()
         form.display()
         player.getCount()
     }

       
       track = createSprite(width/2,height/2,width,height)
       track.addImage(track_image)
       track.scale = 7
       player1 = createSprite(50,height/4)
       player1.addAnimation("player",player1_image)
       player1.scale = 0.3
       player2 = createSprite(50,height/2)
       player2.addImage(player2_image)
       player2.scale = 0.3
   }

    
}


                                               