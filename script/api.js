const apiKey = "1e216a670b1a9c1a52a139bb27b80daf";

const getData = (url) => {
    fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => renderData(data));
};

const getGeolocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            //informacion
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            getData(url);
        });
    }
};
