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
    if (this.y <= 20) {
      this.y = 20;
    }
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
  }
  moveDown() {
    if (this.y > 530) {
      this.y = 530;
    }
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  }
  moveLeft() {
    if (this.x <= 20) {
      this.x = 20;
    }
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }

  moveRight() {
    if (this.x > 830) {
      this.x = 830;
    }
    this.x += this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
