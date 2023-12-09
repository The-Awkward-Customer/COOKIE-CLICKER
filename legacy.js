console.log("COOKIE-CLICKER");

//GAMESTATE OBJECT
let cookieClickerData = {
  myCookieTimer: 500,
  myCookiesValue: 0,
  autoClickerUpgradeCost: 10,
};

console.log(cookieClickerData.myCookiesValue);

//Get the myCookieValueIs elements by id
myCookieValueIs = document.getElementById("myCookieValueIs");
console.log(myCookieValueIs);

// HANDLES CLICKS ON MYCOOKIEBUTTON
const myCookieButton = document.getElementById("myCookieButton");
console.log(myCookieButton);

myCookieButton.addEventListener("click", function () {
  cookieClickerData.myCookiesValue++;
});

// Checks the value of myCookieValue each second

setInterval(function () {
  myCookieValueIs.textContent = `The cookie value is " + ${cookieClickerData.myCookiesValue}`;
  const stringifiedCookieClickerData = JSON.stringify(cookieClickerData); //Stores and retreived a data object from local Storage
  localStorage.setItem("data", stringifiedCookieClickerData);
  console.log(
    `the current cookie value is ${cookieClickerData.myCookiesValue}`
  );
  myUpgradeHandler();
}, cookieClickerData.myCookieTimer);

// handles upgrades

let myUpgradeButton = document.getElementById("myUpgradeButton");

function myUpgradeHandler() {
  if (
    cookieClickerData.myCookiesValue < cookieClickerData.autoClickerUpgradeCost
  ) {
    myUpgradeButton.disabled = true;
    console.log("you do not have enough");
  } else {
    myUpgradeButton.disabled = false;
    console.log("you have enough");
  }
}

//UPDATED TO WORK WITH STRING LITERALS
function autoclicker() {
  console.log("called");
  if (
    `${cookieClickerData.myCookiesValue} >= ${cookieClickerData.autoClickerUpgradeCost}`
  ) {
    cookieClickerData.myCookiesValue -=
      cookieClickerData.autoClickerUpgradeCost;
    console.log(`you paid ${cookieClickerData.autoClickerUpgradeCost}`);
    cookieClickerData.autoClickerUpgradeCost =
      cookieClickerData.autoClickerUpgradeCost * 3;
    console.log(`the cost is ${cookieClickerData.autoClickerUpgradeCost}`);

    setInterval(() => {
      cookieClickerData.myCookiesValue++;
      console.log(`Current cookies: ${cookieClickerData.myCookiesValue}`);
    }, 1000);
  }
}

myUpgradeButton.addEventListener("click", autoclicker);

// Retrieves local data and sets the current values
function onPageLoad() {
  const retrievedLocalData = localStorage.getItem("data"); // get the data
  parsedLocalData = JSON.parse(retrievedLocalData); // parse the data
  console.log(parsedLocalData.myCookiesValue); //print the data
  cookieClickerData = parsedLocalData; // set the data
}

onPageLoad();

// reset functions

function resetValue() {
  cookieClickerData.myCookiesValue = 0;
  localStorage.clear();
}
