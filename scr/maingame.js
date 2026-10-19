// Selecionar os elementos com os IDs corretos do HTML
const playButton = document.getElementById("play-button");
const startScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const gameBoxNode = document.getElementById("game-box");

let playerObj = null;

//Main game function
function gameStart() {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";

  addPlayer();
}

function addPlayer() {
  playerObj = new Player();
}

//Event Listeners
playButton.addEventListener("click", gameStart);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    //move up
    playerObj.moveUp(); // calls the method on created on the player JS file
  } else if (event.code === "ArrowDown") {
    // move player down
    playerObj.moveDown(); // calls the method on created on the player JS file
  } else if (event.code === "ArrowLeft") {
    playerObj.moveLeft();
  } else if (event.code === "ArrowRight") {
    playerObj.moveRight();
  }
});
