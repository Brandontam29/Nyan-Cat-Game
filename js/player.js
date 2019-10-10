class Player {
    constructor(root) {
        this.x = Math.floor(GAME_WIDTH / PLAYER_WIDTH /2) * PLAYER_WIDTH
        let y = GAME_HEIGHT - PLAYER_HEIGHT
        this.domElement = document.createElement('img')
        this.domElement.src = 'images/player.png'
        this.domElement.style.position = 'absolute'
        this.domElement.style.left = this.x + 'px'
        this.domElement.style.top = y
        this.domElement.style.zIndex = 20
        root.appendChild(this.domElement)
    }
    moveLeft = () => {
        if(this.x > 0 ) {
            this.x = this.x - PLAYER_WIDTH
        }
        this.domElement.style.left = this.x
    } 
    moveRight = () => {
        if(this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH
        }
        this.domElement.style.left = this.x
    }        
}