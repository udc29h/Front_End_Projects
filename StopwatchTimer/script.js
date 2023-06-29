// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime += 10;
    updateStopwatchDisplay();
    hideStartButton('startStopwatch');
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  showStartButton('startStopwatch');
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  updateStopwatchDisplay();
  showStartButton('startStopwatch');
}

function updateStopwatchDisplay() {
  const milliseconds = String(stopwatchTime % 1000).padStart(3, '0');
  const seconds = String(Math.floor((stopwatchTime / 1000) % 60)).padStart(2, '0');
  const minutes = String(Math.floor((stopwatchTime / 1000 / 60) % 60)).padStart(2, '0');
  document.getElementById('stopwatchDisplay').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function hideStartButton(buttonId) {
  const startButton = document.getElementById(buttonId);
  startButton.style.display = 'none';
}

function showStartButton(buttonId) {
  const startButton = document.getElementById(buttonId);
  startButton.style.display = 'inline-block';
}

function hideInputTimer(InputId){
    const inputTxt=document.getElementById(InputId);
    inputTxt.style.display='none';
}

function showInputTimer(InputId){
    const inputTxt=document.getElementById(InputId);
    inputTxt.style.display='inline-block';
}

document.getElementById('startStopwatch').addEventListener('click', startStopwatch);
document.getElementById('stopStopwatch').addEventListener('click', stopStopwatch);
document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);

// Timer functionality
let timerInterval;
let timerTime = 0;

function startTimer() {
  const inputSeconds = parseInt(document.getElementById('timerInput').value, 10);
  hideInputTimer('timerInput');
  if (isNaN(inputSeconds)) {
    alert('Please enter a valid number of seconds.');
    return;
  }
  timerTime = inputSeconds * 1000;
  timerInterval = setInterval(() => {
    if (timerTime > 0) {
      timerTime -= 10;
      updateTimerDisplay();
      hideStartButton('startTimer');
    } else {
      clearInterval(timerInterval);
      alert('Timer finished!');
      showStartButton('startTimer');
    }
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
  showStartButton('startTimer');
  showInputTimer('timerInput');
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 0;
  updateTimerDisplay();
  showStartButton('startTimer');
}

function updateTimerDisplay() {
  const milliseconds = String(timerTime % 1000).padStart(3, '0');
  const seconds = String(Math.floor((timerTime / 1000) % 60)).padStart(2, '0');
  const minutes = String(Math.floor((timerTime / 1000 / 60) % 60)).padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('stopTimer').addEventListener('click', stopTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);
