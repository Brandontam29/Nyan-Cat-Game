class Enemy {
  update = timeDiff => {
    this.y = this.y + timeDiff * this.speed
    this.domElement.style.top = this.y + "px"
    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement)
      this.destroyed = true
    }
  }
  constructor(theRoot, enemySpot) {
    this.root = theRoot
    this.spot = enemySpot
    this.x = enemySpot * ENEMY_WIDTH
    this.y = (-GAME_HEIGHT * 2) / 3
    this.destroyed = false
    this.domElement = document.createElement("img")
    this.domElement.src = "images/enemy.png"
    this.domElement.style.position = "absolute"
    this.domElement.style.left = this.x + "px"
    this.domElement.style.top = this.y + "px"
    this.domElement.style.zIndex = 10
    theRoot.append(this.domElement)
    this.speed = Math.random() / 3 + 0.3
  }
}
