const acceptButton = document.getElementById("button-accept");
const declineButton = document.getElementById("button-decline");
const cookieNotice = document.getElementById("cookie-notice");
const toggleThemeButton = document.getElementById("button-theme-toggle");

if (document.cookie.includes("cookiesAccepted")) {
  //document.cookie is just a string
  cookieNotice.style.display = "none";
}

acceptButton.addEventListener("click", function () {
  document.cookie = "cookiesAccepted=true";
  console.log("accept button pressed");
  cookieNotice.style.display = "none";
});

declineButton.addEventListener("click", function () {
  document.cookie = "cookiesAccepted=false";
  console.log("decline button pressed");
  cookieNotice.style.display = "none";
});

const cookieDark = document.cookie.includes("cookie.dark=true");

console.log(cookieDark);

if (cookieDark) {
  document.body.classList.toggle("dark");
}

toggleThemeButton.addEventListener("click", function () {
  console.log("dark theme button ");

  if (!cookieDark) {
    document.body.classList.toggle("dark");
    document.cookie = "cookie.dark=true";
  } else {
    document.body.classList.toggle("dark");
    document.cookie = "cookie.dark=false";
  }
});
