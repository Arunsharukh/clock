let clockInterval;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById(('time')).textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!clockInterval) {
        updateClock(); // Update immediately
        clockInterval = setInterval(updateClock, 1000);
    }
});

document.getElementById('stopButton').addEventListener('click', () => {
    clearInterval(clockInterval);
    clockInterval = null;
});