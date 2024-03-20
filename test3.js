function formatTime(input) {
    let times = input.replace("PM", "").replace("AM", "").split(":");
    let hours = parseInt(times[0]);

    if (input.includes("PM"))
        hours = (hours + 12) % 24;

    const formattedHours = hours.toString().padStart(2, "0");

    return `${formattedHours}:${times[1]}:${times[2]}`;
}

console.log(formatTime("12:01:00PM"))
console.log(formatTime("12:01:00AM"))
