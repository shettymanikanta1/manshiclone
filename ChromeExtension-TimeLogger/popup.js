let timerInterval;
let minutes = 25;
let seconds = 0;
let timerRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const notification = document.getElementById('notification');

function updateTimerDisplay() {
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerRunning) {
    return; // Don't start a new timer if it's already running
  }

  timerInterval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      clearInterval(timerInterval);
      notification.textContent = 'Break time!';
      chrome.alarms.create({ delayInMinutes: 5 });
      timerRunning = false;
      return; // Exit the interval function
    }
    updateTimerDisplay();
  }, 1000);

  timerRunning = true;
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
  timerRunning = false;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);