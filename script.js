// Define variables
let startTime;
let elapsedTime = 0;
let pauseTime = 0;
let timerInterval;
const display = document.querySelector('.display');
const lapList = document.querySelector('.laps');

// Function to display time
function displayTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
  const now = Date.now();
  startTime = now - elapsedTime;
  timerInterval = setInterval(() => {
    const now = Date.now();
    elapsedTime = now - startTime - pauseTime;
    displayTime(elapsedTime);
  }, 10);
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
  const now = Date.now();
  pauseTime += now - startTime;
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  pauseTime = 0;
  displayTime(elapsedTime);
  lapList.innerHTML = '';
}

// Function to record lap time
function lapTime() {
  const lapTime = elapsedTime;
  const li = document.createElement('li');
  const minutes = Math.floor(lapTime / 60000);
  const seconds = Math.floor((lapTime % 60000) / 1000);
  const milliseconds = Math.floor((lapTime % 1000) / 10);
  li.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  lapList.appendChild(li);
}

// Event listeners for buttons
document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTime);
