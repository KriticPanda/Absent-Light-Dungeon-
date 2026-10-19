class Gold {
  constructor(posX, posY) {
    this.node = document.createElement("div");
    gameBoxNode.append(this.node);
    this.node.className = "gold";

    this.x = posX;
    this.y = posY;
    this.width = 25;
    this.height = 25;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //Styles and shape

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.backgroundColor = "yellow";
    this.node.style.borderRadius = "5px";
    this.node.style.border = "solid white 3px";
  }
}
