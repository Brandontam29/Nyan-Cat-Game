let gameEngine = new Engine(document.getElementById("status"))
let keydownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft()
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight()
  }
}
document.addEventListener("keydown", keydownHandler)
gameEngine.gameLoop()
