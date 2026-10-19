// Selecionar os elementos com os IDs corretos do HTML
const playButton = document.getElementById("play-button");
const startScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const gameBoxNode = document.getElementById("game-box");
const endScreen = document.getElementById("end-screen");

//Global Variables
let playerObj = null;
let enemiesArray = [];
let mainIntervalID = null;
let enemyIntervalID = null;
let playerScore = null;

//Main game function
function gameStart() {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";

  addPlayer();
  addEnemy();

  //main game interval
  mainIntervalID = setInterval(gameLoop, Math.round(1000 / 60));

  //starting other intervals
  enemyIntervalID = setInterval(addEnemy, 2000);
}
function gameLoop() {
  enemiesArray.forEach((enemy) => {
    enemy.automaticMovement();
  });
}

function addPlayer() {
  playerObj = new Player();
}

function addEnemy() {
  let randomPosY = Math.floor(Math.random() * 530);
  let newEnemy = new Enemy(randomPosY);
  enemiesArray.push(newEnemy);
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
