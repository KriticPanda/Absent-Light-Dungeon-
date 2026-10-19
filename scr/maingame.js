// Selecionar os elementos com os IDs corretos do HTML
const playButton = document.getElementById("play-button");
const startScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const gameBoxNode = document.getElementById("game-box");
const endScreen = document.getElementById("end-screen");
const retryButton = document.getElementById("end-btn");

//Global Variables
let playerObj = null;
let enemiesArray = [];
let mainIntervalID = null;
let enemyIntervalID = null;
let playerScore = null;

//Main game function
function gameStart() {
  startScreen.style.display = "none";
  endScreen.style.display = "none";
  gameScreen.style.display = "flex";
  enemiesArray.forEach((enemy) => {
    enemy.node.remove();
  });
  enemiesArray = [];

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
  checkEnemyDespawn();
  checkCollisionPlayerEnemy();
}

function addPlayer() {
  playerObj = new Player();
}

function addEnemy() {
  let randomPosY = Math.floor(Math.random() * 530);
  let newEnemy = new Enemy(randomPosY);
  enemiesArray.push(newEnemy);
}
function checkCollision(element1, element2) {
  return (
    element1.x < element2.x + element2.width &&
    element1.x + element1.width > element2.x &&
    element1.y < element2.y + element2.height &&
    element1.y + element1.height > element2.y
  );
}
function checkCollisionPlayerEnemy() {
  enemiesArray.forEach((enemy) => {
    if (checkCollision(enemy, playerObj)) {
      console.log("GAME OVER!");
      gameOver();
    }
  });
}

function checkEnemyDespawn() {
  if (enemiesArray[0] && enemiesArray[0].x < -100) {
    // TWO actions need to happen when removing an element from the game
    enemiesArray[0].node.remove(); //remove it from the DOM

    enemiesArray.shift(); //remove it from JavaScript
  }
}

function gameOver() {
  //STOP all intervals
  clearInterval(mainIntervalID);
  clearInterval(enemyIntervalID);
  playerObj.node.remove();

  //change screens

  gameScreen.style.display = "none";
  endScreen.style.display = "flex";
}

//Event Listeners
playButton.addEventListener("click", gameStart);
retryButton.addEventListener("click", gameStart);

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
