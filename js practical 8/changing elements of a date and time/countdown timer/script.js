let targetDate = new Date("2024-12-31T23:59:59").getTime();

let countdownInterval = setInterval(() => {
    let now = new Date().getTime();

    let remainingTime = targetDate - now;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    if (remainingTime < 0) {
        clearInterval(countdownInterval);
        console.log("The countdown is over!");
    }
}, 1000);