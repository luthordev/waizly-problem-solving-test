function formatTime(input) {
    let times = input.replace("PM", "").replace("AM", "").split(":");
    const hours = parseInt(times[0]);
  
    const date = new Date(2023, 1, 1, hours + (input.includes("PM") ? 12 : 0), times[1], times[2]);
  
    return date.toLocaleString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }
  

console.log(formatTime("12:01:00PM"))
console.log(formatTime("12:01:00AM"))
