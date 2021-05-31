class Player
{
    constructor()
    {
      this.index = null
      this.distance = 0
      this.rank = 0
      this.name = ""
    }
    
    getCount()
    {
      var dbref = database.ref("playerCount")
      dbref.on("value",  (data) =>
      {
        playerCount = data.val()
      })
    }

    updateCount(count)
    {
        database.ref("/").update({"playerCount": count})

    }

    update()
    {
      var playerIndex = "Players/player" + this.index;
      database.ref(playerIndex).set({"name": this.name,
                                      "distance": this.distance,
                                      "rank": this.rank})
    }
}