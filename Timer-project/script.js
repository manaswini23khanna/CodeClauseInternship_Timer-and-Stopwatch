let timerInterval;
let stopwatchInterval;
let timerRunning = false;
let stopwatchRunning = false;
let timerSeconds = 0;
let stopwatchSeconds = 0;

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    timerSeconds = parseInt(document.getElementById("timerInput").value);
    updateTimerDisplay();

    timerInterval = setInterval(function () {
      timerSeconds--;
      updateTimerDisplay();

      if (timerSeconds <= 0) {
        stopTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timerDisplay");
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}s`;
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;

    stopwatchInterval = setInterval(function () {
      stopwatchSeconds++;
      updateStopwatchDisplay();
    }, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const stopwatchDisplay = document.getElementById("stopwatchDisplay");
  const minutes = Math.floor(stopwatchSeconds / 60);
  const seconds = stopwatchSeconds % 60;
  stopwatchDisplay.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}
