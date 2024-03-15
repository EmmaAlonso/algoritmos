const clickButton = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");

let clickCount = 0;

clickButton.addEventListener("click", function () {
  clickCount++;

  clickCountDisplay.textContent = clickCount;
});