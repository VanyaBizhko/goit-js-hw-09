document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  let intervalId = null;

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }

  function startColorSwitcher() {
    if (!intervalId) {
      startButton.disabled = true;
      intervalId = setInterval(changeBackgroundColor, 1000);
    }
  }

  function stopColorSwitcher() {
    if (intervalId) {
      startButton.disabled = false;
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  startButton.addEventListener('click', startColorSwitcher);
  stopButton.addEventListener('click', stopColorSwitcher);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}