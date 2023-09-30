const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const renderData = (data) => {
    const { main, name, wind } = data;

    $("#place").innerHTML = `${name}`;
    $("#current-temp").innerText = `${main.temp} °C `;
    $("#min-temp").innerText = `${main.temp_min} °C `;
    $("#max-temp").innerText = `${main.temp_max} °C `;
    $("#humidity").innerText = `${main.humidity}`;
    $("#wind").innerText = `${wind.speed}`;
};

const getCity = () => {
    const city = $("#select-city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log($("#select-city").value);
    getData(url);
};

window.onload = getGeolocation();

$("#select-city").addEventListener("change", () => getCity());
