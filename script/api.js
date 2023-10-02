const apiKey = "1e216a670b1a9c1a52a139bb27b80daf";
const apiURL = "https://api.openweathermap.org/data/2.5/weather";

const getData = (params) => {
    console.log(params);
    fetch(`${apiURL}?${params}&lang=es&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => renderData(data));
};
