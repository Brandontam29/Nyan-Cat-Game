let nextEnemySpot = enemies => {
  let enemySpot = GAME_WIDTH / PLAYER_WIDTH
  spotsTaken = [false, false, false, false, false]
  enemies.forEach(enemy => {
    spotsTaken[enemy.spot] = true
  })
  let candidate = undefined
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpot)
  }
  return candidate
}

let addBackground = root => {
  let bg = document.createElement("img")
  bg.src = "images/starynight.png"
  bg.style.height = GAME_HEIGHT + "px"
  bg.style.width = GAME_WIDTH + "px"
  root.append(bg)
  let frame = document.createElement("div")
  frame.style.zIndex = 50
  frame.style.height = GAME_HEIGHT + "px"
  frame.style.position = "absolute"
  frame.style.background = "#f3f3f3"
  frame.style.top = GAME_HEIGHT + "px"
  frame.style.width = GAME_WIDTH + "px"
  root.append(frame)
}
