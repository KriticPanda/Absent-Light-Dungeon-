// Selecionar os elementos com os IDs corretos do HTML
const playButton = document.getElementById("play-button");
const startScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const gameBoxNode = document.getElementById("game-box");
const endScreen = document.getElementById("end-screen");
const retryButton = document.getElementById("end-btn");
const scoreTracker = document.getElementById("score");

//Global Variables
let playerObj = null;
let enemiesArray = [];
let mainIntervalID = null;
let enemyIntervalID = null;
let goldLoot = [];
let goldIntervalID = null;
let scoreCounter = null;

//Main game function
function gameStart() {
  startScreen.style.display = "none";
  endScreen.style.display = "none";
  gameScreen.style.display = "flex";
  playSFX(BgMusic);
  enemiesArray.forEach((enemy) => {
    enemy.node.remove();
  });
  enemiesArray = [];

  goldLoot.forEach((gold) => {
    gold.node.remove();
  });
  goldLoot = [];

  scoreCounter = 0;
  scoreTracker.innerText = `Your current gold:${scoreCounter}`;

  addPlayer();
  addEnemy();
  addGold();

  //main game interval
  mainIntervalID = setInterval(gameLoop, Math.round(1000 / 60));

  //starting other intervals
  enemyIntervalID = setInterval(addEnemy, 2000);
  goldIntervalID = setInterval(addGold, 6000);
}
function gameLoop() {
  enemiesArray.forEach((enemy) => {
    enemy.automaticMovement();
  });
  checkEnemyDespawn();
  checkCollisionPlayerEnemy();
  checkCollisionGoldEnemy();
  checkCollisionGoldPlayer();
}

function addPlayer() {
  playerObj = new Player();
}

function addEnemy() {
  let randomPosY = Math.floor(Math.random() * 261) + 270;
  let newEnemy = new Enemy(randomPosY);
  enemiesArray.push(newEnemy);
}

function addGold() {
  let randomGPosy = Math.floor(Math.random() * 201) + 330;
  let randomGPosX = Math.floor(Math.random() * 500);
  let newGold = new Gold(randomGPosX, randomGPosy);
  goldLoot.push(newGold);
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
      gameOver();
    }
  });
}

function checkCollisionGoldEnemy() {
  for (let i = goldLoot.length - 1; i >= 0; i--) {
    let currentGold = goldLoot[i];

    enemiesArray.forEach((enemy) => {
      if (checkCollision(enemy, currentGold)) {
        currentGold.node.remove();
      }
    });
  }
}

function checkCollisionGoldPlayer() {
  for (let i = goldLoot.length - 1; i >= 0; i--) {
    let currentGold = goldLoot[i];

    if (checkCollision(playerObj, currentGold)) {
      currentGold.node.remove();
      goldLoot.splice(i, 1);
      scoreCounter += 10; //
      scoreTracker.innerText = `Your current gold:${scoreCounter}`;
      playSFX(coinSound);
    }
  }
}

function checkEnemyDespawn() {
  if (enemiesArray[0] && enemiesArray[0].x < -100) {
    enemiesArray[0].node.remove();

    enemiesArray.shift();
  }
}

function gameOver() {
  //STOP all intervals
  clearInterval(mainIntervalID);
  clearInterval(enemyIntervalID);
  playerObj.node.remove();
  BgMusic.pause();

  //change screens

  gameScreen.style.display = "none";
  endScreen.style.display = "flex";
}

//Audio Manager
const coinSound = new Audio("../audio/CoinEffect.mp3");
const goblinLaught = new Audio("../audio/goblinLol.mp3");
const BgMusic = new Audio("../audio/BgMusic.mp3");

function playSFX(sound) {
  sound.currentTime = 0;
  sound.play();
}

//Event Listeners
playButton.addEventListener("click", gameStart);
retryButton.addEventListener("click", gameStart);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    playerObj.moveUp();
  } else if (event.code === "ArrowDown") {
    playerObj.moveDown();
  } else if (event.code === "ArrowLeft") {
    playerObj.moveLeft();
  } else if (event.code === "ArrowRight") {
    playerObj.moveRight();
  }
  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight" || event.key === "d") {
      playerObj.stopRight();
    } else if (event.code === "ArrowLeft") {
      playerObj.stopLeft();
    } else if (event.code === "ArrowDown") {
      playerObj.stopDown();
    } else if (event.code === "ArrowUp") {
      playerObj.stopUp();
    }
  });
});
