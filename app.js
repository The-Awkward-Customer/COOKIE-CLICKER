console.log("COOKIE-CLICKER");

//DECLARES THE MYCOOKIES VARIABLES
let cookieClickerData = {
  myCookieTimer: 1000,
  myCookiesValue: 0,
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
  console.log(cookieClickerData.myCookiesValue);
}, cookieClickerData.myCookieTimer);

// Retrieves local data and sets the current values
function onPageLoad() {
  const retrievedLocalData = localStorage.getItem("data"); // get the data
  parsedLocalData = JSON.parse(retrievedLocalData); // parse the data
  console.log(parsedLocalData.myCookiesValue); //print the data
  cookieClickerData = parsedLocalData; // set the data
}

onPageLoad();

//_______________________________________________________________
//___________________
// LOCAL STORAGE DEMO

// let counter = 0;

// function addOne() {
//   counter++;
//   localStorage.setItem("counterValue", counter);
//   console.log(localStorage.getItem("counterValue"));
// }

// addOne();

// function onPageLoad() {
//   const localCounter = localStorage.getItem("counterValue");
//   counter = localCounter;
//   package.textContent = counter;
// }

// onPageload();

// const data = {
//   likes: 0,
//   dislikes: 0,
// };

// function addOneExample (type){
//     //data[type]++
// // check with type is passed
// if(type = ===){
//     do thing
// }if else(type === ){

// }
// // increase that type in my data
// //change number of the screen
// //add to local storage

// const stringifiedData= JSON.stringify(object)
// localStorage.setItem("data", stringifiedData)
// }

// const localData = localStorage.getItem("data")
// data = JSON.parse(localData)
// addOneLike();
