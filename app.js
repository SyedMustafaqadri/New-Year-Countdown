let targetDate = new Date("Dec 31, 2023 00:00:00").getTime();

let count = setInterval(() => {
    let now = new Date().getTime();
    let time = targetDate - now;

    if (time < 0) {
        clearInterval(count);
        document.getElementById("Time-display").innerHTML = "Happy New Year";
    } else {
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);

        document.getElementById("Time-display").innerHTML = days + " " + hours + " " + minutes + " " + seconds;
    }
}, 1000);
