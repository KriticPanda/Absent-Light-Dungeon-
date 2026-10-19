class Player {
  constructor() {
    this.node = document.createElement("div");
    gameBoxNode.append(this.node);
    this.node.className = "player";
    //position and dimensions
    this.x = 70;
    this.y = 230;
    this.width = 50;
    this.height = 50;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    // Shape and style
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.backgroundColor = "blue";
    this.speed = 20;
  }
  moveUp() {
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
  }
  moveDown() {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  }
  moveLeft() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }

  moveRight() {
    this.x += this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
