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
    console.log($("#select-city").value);
};

window.onload = getGeolocation();

$("#select-city").addEventListener("change", () => getCity());
