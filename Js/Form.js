class Form
{

    constructor()
    {
      this.title = createElement("h1")
      this.name = createInput("Name")
      this.submit = createButton("Submit")
      this.greeting = createElement("h1")
      this.wait = createElement("h1")
      this.reset = createButton("Reset")
    }

    hide()
    {
      this.submit.hide()
      this.greeting.hide()
      this.wait.hide()
      this.name.hide()
    }


    display()
    {
      background(background_img)
      this.title.position(width/2,50)
      this.title.html("Keep Going!")

      this.name.position(width/2- 30, 180)

      this.submit.position(width/2 - 30, 220)
      textSize(30)
      fill("black")
      text("ALL THE BEST!", width/2 - 50, height/2 + 100)

      this.submit.mousePressed(() =>
      {
          this.name.hide()
          this.submit.hide()

          var name = this.name.value()
          this.greeting.html("Hello " + name)
          this.greeting.position(width/2 - 50, height/2- 230)
          
          this.wait.html("Wait for the other player to join")
          this.wait.position(30,5)

          playerCount = playerCount + 1
          player.updateCount(playerCount)
          player.name = name
          player.index = playerCount
          player.update()
      })
      
      this.reset.position(width/2 + 500, height/2 + 300)

      this.reset.mousePressed(() =>
      {
        player.updateCount(0)
         game.update(0)
         database.ref("Players").remove()

         //refresh the window
         window.location.reload()
      })
    }
}