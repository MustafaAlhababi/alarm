document.addEventListener("DOMContentLoaded", function () {
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const alarmSound = document.getElementById("alarm");
    let countdownInterval;

    startButton.addEventListener("click", function () {
        const seconds = parseInt(secondsInput.value);
        if (!isNaN(seconds) && seconds > 0) {
            startCountdown(seconds);
        }
    });

    stopButton.addEventListener("click", function () {
        stopCountdown();
    });

    function startCountdown(seconds) {
        startButton.disabled = true;
        secondsInput.disabled = true;

        countdownInterval = setInterval(function () {
            seconds--;
            if (seconds < 0) {
                stopCountdown();
                playAlarm();
            } else {
                secondsInput.value = seconds;
            }
        }, 1000);
    }

    function stopCountdown() {
        startButton.disabled = false;
        secondsInput.disabled = false;
        clearInterval(countdownInterval);
    }

    function playAlarm() {
        alarmSound.play();
    }
});