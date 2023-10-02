const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const renderData = (data) => {
    const { main, name, wind } = data;

    $("#place").innerHTML = `${name}`;
    $("#current-temp").innerText = `${main.temp} °C `;
    $("#min-temp").innerText = `${main.temp_min} °C `;
    $("#max-temp").innerText = `${main.temp_max} °C `;
    $("#humidity").innerText = `${main.humidity} %`;
    $("#wind").innerText = `${wind.speed} km`;
};

const getGeolocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let params = {
                lon: position.coords.longitude,
                lat: position.coords.latitude,
                units: "metric",
            };
            getData(new URLSearchParams(params).toString());
        });
    } else {
        alert("Ubicacion no proporcionada");
    }
};

const getCity = () => {
    if ($("#select-city").value !== "ubi") {
        let params = {
            q: $("#select-city").value,
            units: "metric",
        };
        getData(new URLSearchParams(params).toString());
    } else if ($("#select-city").value === "ubi") {
        getGeolocation();
    }
};

window.onload = getGeolocation();

$("#select-city").addEventListener("change", () => getCity());
