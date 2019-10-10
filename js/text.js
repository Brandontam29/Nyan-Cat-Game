class Text { 
    constructor(root, xPos, yPos) { 
        let div = document.createElement("div") 
        div.style.position = "absolute" 
        div.style.left = xPos 
        div.style.top = yPos 
        div.style.color = "white" 
        div.style.font = "bold 30px Impact" 
        div.style.zIndex = 100
        root.appendChild(div) 
        this.domElement = div 
    } 
    update(txt) { 
        this.domElement.innerText = txt 
    } 
} 