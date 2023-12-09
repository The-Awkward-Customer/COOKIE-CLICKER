console.log("Click some cookies!!");
// Global Content

//global variable
let cookiesValue = 1;
let playTimeValue = 0;
let cost = 10;
let autoclickerValue = 0;

// a function to declare an object and update local storage
// stringyfies the object
function setGameState() {
  gameState = {
    cookiesValue: cookiesValue,
    playTimeValue: playTimeValue,
    clickerUpgradeCost: clickerUpgradeCost,
    autoclickerValue: autoclickerValue,
  };
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

// function to get local storage
function loadGameState() {
  const gameState = JSON.parse(localStorage.getItem("gameState"));
  cookiesValue = gameState.cookiesValue;
  playTimeValue = gameState.playTimeValue;
  clickerUpgradeCost = gameState.clickerUpgradeCost;
  autoclickerValue = gameState.autoclickerValue;
}

// regarding to clicker upgrades
const myUpgradeButton = document.getElementById("myUpgradeButton");

// function clickerUpgrades() {
//   if (cookiesValue < clickerUpgradeCost) {
//     myUpgradeButton.disbled = true;
//   } else {
//     myUpgradeButton.disbled = false;
//   }
// }

// function to automate cookie value
const myAutoClickerButton = document.getElementById("myAutoClickerButton");
myAutoClickerButton.addEventListener("click", function () {
  autoclickerValue++;
  let sum = cost * 3;
  cost = sum;
});

setInterval(() => {
  let sum = cookiesValue + autoclickerValue;
  cookiesValue = sum;
}, 1000);

// regarding cookie button
const myCookieButton = document.getElementById("myCookieButton");
myCookieButton.textContent = "Buy a Cookie";
myCookieButton.addEventListener("click", clicked);

function clicked() {
  cookiesValue++;
}

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
}, 10);

// resets the game
const myResetButton = document.getElementById("myResetButton");
myResetButton.textContent = "reset";
myResetButton.addEventListener("click", function () {
  cookiesValue = 0;
  autoclickerValue = 0;
  playTimeValue = 0;
});

// loads the game state
playTimeCounter();
loadGameState();
