const temperature = -6;
const windSpeed = 20;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function displayWindChill() {
    const output = document.querySelector("#windchill");

    if (temperature <= 10 && windSpeed > 4.8) {
        output.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
    } else {
        output.textContent = "N/A";
    }
}

displayWindChill();