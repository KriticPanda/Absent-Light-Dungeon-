class Enemy {
  constructor(posY) {
    this.node = document.createElement("div");
    gameBoxNode.append(this.node);

    this.node.className = "enemy";

    //position and dimensions
    this.x = 820;
    this.y = posY;
    this.width = 40;
    this.height = 70;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //Styles and shape
    this.node.style.padding = `0px`;
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.backgroundImage =
      "url('../img/Goblin/Idle/rotations/west_front_walk_walk.webp')";
    this.node.style.backgroundSize = "cover"; // Garante que a imagem cabe toda na div
    this.node.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
    this.node.style.backgroundPosition = "center";
    this.speed = 3;
  }
  automaticMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
