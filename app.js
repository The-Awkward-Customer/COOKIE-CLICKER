console.log("Click some cookies!!");
// Global Content

//global variable
let cookiesValue = 0;
let playTimeValue = 0;
let cost = 10;
let autoclickerValue = 0;
let cookiesperClick = 1;

// a function to declare an object and update local storage
// stringyfies the object
function setGameState() {
  gameState = {
    cookiesValue: cookiesValue,
    playTimeValue: playTimeValue,
    clickerUpgradeCost: clickerUpgradeCost,
    autoclickerValue: autoclickerValue,
    cookiesperClick: cookiesperClick,
  };
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

// function to get local storage
function loadGameState() {
  const savedGameState = localStorage.getItem("gameState");
  if (savedGameState) {
    const gameState = JSON.parse(savedGameState);
    cookiesValue = gameState.cookiesValue;
    playTimeValue = gameState.playTimeValue;
    clickerUpgradeCost = gameState.clickerUpgradeCost;
    cookiesperClick = gameState.cookiesperClick;
    autoclickerValue = gameState.autoclickerValue;
  }
}

// regarding to clicker upgrades
const myUpgradeButton = document.getElementById("myUpgradeButton");
myUpgradeButton.addEventListener("click", function () {
  cookiesperClick++;
  console.log(`the cookies per click is ${cookiesperClick}`);
});

// regarding the availability of upgrades

setInterval(function () {
  if (cookiesValue < cost) {
    myAutoClickerButton.disabled = true;
  } else {
    myAutoClickerButton.disabled = false;
  }
}, 10);

// function to automate cookie value
const myAutoClickerButton = document.getElementById("myAutoClickerButton");
myAutoClickerButton.addEventListener("click", function () {
  autoclickerValue++;
  let sum2 = cookiesValue - cost;
  cookiesValue = sum2;
  let sum = cost * 3;
  cost = sum;
});

setInterval(() => {
  let sum = cookiesValue + autoclickerValue;
  cookiesValue = sum;
}, 1000);

//stops negative value

setInterval(function () {
  if (cookiesValue < 0) {
    cookiesValue = 0;
  }
}, 10);

// regarding cookie button
const myCookieButton = document.getElementById("myCookieButton");
myCookieButton.textContent = "Buy a Cookie";
myCookieButton.addEventListener("click", function () {
  let sum = cookiesValue + cookiesperClick;
  cookiesValue = sum;
});

// function to log time played
function playTimeCounter() {
  setInterval(() => {
    playTimeValue++;
    console.log(`play time = ${playTimeValue}`);
  }, 1000);
}

// regarding updating DOM Elements
const myCookieValueIs = document.getElementById("myCookieValueIs");
const myPlayTime = document.getElementById("myPlaytime");
const myCookiesPerSecond = document.getElementById("myCookiePerSecond");
setInterval(() => {
  myCookieValueIs.textContent = `You have ${cookiesValue} cookies`;
  myPlayTime.textContent = `you have played for ${playTimeValue} seconds`;
  myCookiesPerSecond.textContent = `baking ${autoclickerValue} per second`;
  myAutoClickerButton.textContent = `Buy Autoclicker for ${cost}`;
  myCookieButton.textContent = `+ ${cookiesperClick}`;
  setGameState();
}, 10);

// resets the game
const myResetButton = document.getElementById("myResetButton");
myResetButton.textContent = "reset";
myResetButton.addEventListener("click", function () {
  cookiesValue = 0;
  autoclickerValue = 0;
  playTimeValue = 0;
  cookiesperClick = 1;
  cost = 10;
});

// loads the game state
playTimeCounter();
loadGameState();
