const notificationDiv = document.getElementById("notif");

const button = document.getElementById("button");

button.addEventListener("click", function () {
  notificationDiv.style.display = "block";
  button.style.backgroundColor = "teal";

  setTimeout(function () {
    notificationDiv.style.display = "none";
  }, 5000);
});

const timeDisplay = document.getElementById("timeDisplay");
const timeButton = document.getElementById("timeButton");

let time = 0;

let interval;

let isIntervalRunning = false;

function handleClick() {
  if (isIntervalRunning) {
    clearInterval(interval);
    isIntervalRunning = false;
    timeButton.innerText = "Start Timer";
  } else {
    interval = setInterval(function () {
      time = time + 1;
      timeDisplay.innerText = time;
    }, 1000);
    isIntervalRunning = true;
    timeButton.innerText = "Stop Timer";
  }
}

timeButton.addEventListener("click", handleClick);
