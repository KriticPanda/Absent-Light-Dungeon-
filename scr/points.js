class Gold {
  constructor(posX, posY) {
    this.node = document.createElement("div");
    gameBoxNode.append(this.node);
    this.node.className = "gold";

    this.x = posX;
    this.y = posY;
    this.width = 50;
    this.height = 50;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //Styles and shape

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.backgroundImage =
      "url('../img/BagOfGoldCoins/A_small_bag_of_gold_coins/rotations/A_small_bag_of_gold_coins.png')";
    this.node.style.backgroundSize = "contain"; // Garante que a imagem cabe toda na div
    this.node.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
    this.node.style.backgroundPosition = "center";
  }
}
