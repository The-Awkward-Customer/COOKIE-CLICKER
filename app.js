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
    cost: cost,
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
    cost = gameState.cost;
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
myCookieButton.addEventListener("click", function () {
  let sum = cookiesValue + cookiesperClick;
  cookiesValue = sum;
  emitParticles();
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
const myCookiesPerClick = document.getElementById("myCookiesPerClick");
setInterval(() => {
  myCookieValueIs.textContent = `You have ${cookiesValue} cookies`;
  myPlayTime.textContent = `you have played for ${playTimeValue} seconds`;
  // myCookiesPerSecond.textContent = `baking ${autoclickerValue} per second`;
  autoClickerCost.textContent = `-${cost}`;
  myCookiesPerClick.textContent = `+ ${cookiesperClick}`;
  setGameState();
}, 10);

// resets the game
const myResetButton = document.getElementById("myResetButton");
myResetButton.addEventListener("click", function () {
  localStorage.clear("gameState");
  cookiesValue = 0;
  autoclickerValue = 0;
  playTimeValue = 0;
  cookiesperClick = 1;
  cost = 10;
});

// particles

// function emitParticles() {
//   const container = document.getElementById("particleContainer");
//   console.log("called");
//   for (let i = 0; i < 10; i++) {
//     // Emit 10 particles
//     const particle = document.createElement("img");
//     particle.src = "./assets/particles/particle1.svg"; // Path to your SVG
//     particle.classList.add("particle");
//     const p = document.createElement("p");
//     p.textContent = "I'm a p tag";

//     console.log(particle);

//     // Random position - adjust as necessary
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;

//     particle.style.left = x + "px";
//     particle.style.top = y + "px";
//     // p.style.left = x + "px";
//     // p.style.top = y + "px";

//     container.appendChild(particle);
//     container.appendChild(p);

//     // Optional: Remove particle after animation
//     setTimeout(() => {
//       container.removeChild(particle);
//       container.removeChild(p);
//     }, 3000); // Adjust time to match your animation
//   }
// }

// loads the game state
playTimeCounter();
loadGameState();
