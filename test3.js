function formatTime(input) {
    let times = input.replace("PM", "").replace("AM", "").split(":");

    if (input.match("PM")) {
        return new Date(2023, 1, 1, parseInt(times[0]) + 12, times[1], times[2]).toLocaleString("en-US", {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    } else {
        return new Date(2023, 1, 1, times[0], times[1], times[2]).toLocaleString("en-US", {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }
}

console.log(formatTime("07:05:45PM"))
console.log(formatTime("11:00:15AM"))