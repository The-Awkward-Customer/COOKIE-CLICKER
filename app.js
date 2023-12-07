console.log("COOKIE-CLICKER");

//DECLARES THE MYCOOKIES VARIABLES
let myCookiesValue = 0;
console.log(myCookiesValue);

// HANDLES CLICKS ON MYCOOKIEBUTTON
const myCookieButton = document.getElementById("myCookieButton");
console.log(myCookieButton);

myCookieButton.addEventListener("click", function () {
  console.log("the button was clicked");
  myCookiesValue++;
  console.log(myCookiesValue);
});

// Checks the value of myCookieValue each second

setInterval(function () {
  console.log(myCookiesValue);
}, 1000);
