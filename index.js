// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = Date.UTC(2023, 6, 11, 2, 0, 0);
let now = new Date().getTime();

if (launchDate < now) {
    const counts = document.querySelector("#counts");

    counts.innerText = "The website will temporarily go offline for maintenance and updates.";
    counts.style.fontSize = "25px";
    counts.style.color = "white";
    counts.style.margin = "auto";

    const nav = document.querySelector("#nav");

    nav.style.display = "none";

    const soon = document.querySelector("#soon");

    soon.style.display = "none";

    const best = document.querySelector("#best");

    best.style.display = "none";

    const mt2 = document.querySelector("#mt2");

    mt2.style.display = "none";

    const social = document.querySelector("#social");

    social.style.display = "none";

    // Set time on document
    document.querySelector('.countdown').innerText = time;
}

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick() {
    // Get current time

    let now = Date.UTC(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate(),
        new Date().getUTCHours(),
        new Date().getUTCMinutes(),
        new Date().getUTCSeconds(),
        new Date().getUTCMilliseconds()
    );
    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;


