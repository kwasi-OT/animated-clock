const secondHand = document.querySelector("#seconds"),
    minuteHand = document.querySelector("#minutes"),
    hourHand = document.querySelector("#hours");

    (function updateClock() {
        const now = new Date(); // current time 
        const seconds = now.getSeconds(); // seconds 0-59
        const minutes = now.getMinutes() + (seconds / 60); // minutes 0-59 + seconds elapsed / 60
        const hours = (now.getHours() % 12) + (minutes / 60); // hours 0-12 + minutes elapsed / 60 

        let secRotationAngle = seconds * 6; // 6 degrees per second
        let minRotationAngle = minutes * 6; // 6 degrees per minute
        let hourRotationAngle = hours * 30; // 30 degrees per hour

        secondHand.setAttribute('transform', `rotate(${secRotationAngle}, 244, 251)`);
        minuteHand.setAttribute('transform', `rotate(${minRotationAngle}, 244, 251)`);
        hourHand.setAttribute('transform', `rotate(${hourRotationAngle}, 244, 251)`);

        let sound = new Audio("./media/tick.mp3");
        sound.play();
        setTimeout(updateClock, 1000); // update clock every second
    })();