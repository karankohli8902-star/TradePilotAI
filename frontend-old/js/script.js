function updateTime() {
    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("time").innerText =
        now.toLocaleTimeString("en-IN", options);
}

updateTime();
setInterval(updateTime, 1000);