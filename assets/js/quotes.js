function updateTime() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString(); // e.g., "10:23:45 AM"
    timeDisplay.textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
