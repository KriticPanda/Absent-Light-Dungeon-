class Enemy {
  constructor(posY) {
    this.node = document.createElement("div");
    gameBoxNode.append(this.node);

    this.node.className = "enemy";

    //position and dimensions
    this.x = 820;
    this.y = posY;
    this.width = 50;
    this.height = 50;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //Styles and shape

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.backgroundColor = "red";
    this.node.style.borderRadius = "5px";
    this.node.style.border = "solid white 3px";
    this.speed = 3;
  }
  automaticMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
