class Player {
  constructor() {
    this.node = document.createElement("div");
    gameBoxNode.append(this.node);
    this.node.className = "player";
    //position and dimensions
    this.x = 70;
    this.y = 340;
    this.width = 48;
    this.height = 70;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    // Shape and style
    this.node.style.padding = `0px`;
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.backgroundImage =
      "url('./../img/Knight/rotations/east_idle.webp')";
    this.node.style.backgroundSize = "cover"; // Garante que a imagem cabe toda na div
    this.node.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
    this.node.style.backgroundPosition = "center";

    this.speed = 25;
  }
  moveUp() {
    if (this.y <= 270) {
      this.y = 270;
    }
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
    this.node.style.backgroundImage =
      "url('./../img/Knight/rotations/north_front_walk_walk.webp')";
  }
  moveDown() {
    if (this.y > 505) {
      this.y = 505;
    }
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
    this.node.style.backgroundImage =
      "url('../img/Knight/rotations/south_front_walk_walk.webp')";
  }
  moveLeft() {
    if (this.x <= 20) {
      this.x = 20;
    }
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
    this.node.style.backgroundImage =
      "url('../img/Knight/rotations/west_front_walk_walk.webp')";
  }

  moveRight() {
    if (this.x > 830) {
      this.x = 830;
    }
    this.x += this.speed;
    this.node.style.left = `${this.x}px`;
    this.node.style.backgroundImage =
      "url('../img/Knight/rotations/east_front_walk_walk.webp')";
  }
  stopRight() {
    this.node.style.backgroundImage =
      "url('./../img/Knight/rotations/east_idle.webp')";
  }
  stopLeft() {
    this.node.style.backgroundImage =
      "url('./../img/Knight/rotations/west_idle.webp')";
  }
  stopDown() {
    this.node.style.backgroundImage =
      "url('./../img/Knight/rotations/south_idle.webp')";
  }
  stopUp() {
    this.node.style.backgroundImage =
      "url('./..//img/Knight/rotations/north_idle.webp')";
  }
}
