window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureFeelsLike = document.querySelector('.temperature-feels');
    let temperatureMin = document.querySelector('.temperature-min');
    let temperatureMax = document.querySelector('.temperature-max');
    let temperatureHumidity = document.querySelector('.temperature-humidity');

    /* Fix icon query */
    let iconApi = document.querySelector('.icon');



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=7160683b590e89a8b6dd9c2405650f71`;



            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const { temp, feels_like, temp_min, temp_max, humidity } = data.main;

                    //SET DOM ELEMENTS FOR API GET
                    temperatureDegree.textContent = temp;
                    temperatureFeelsLike.textContent = feels_like;
                    temperatureMin.textContent = temp_min;
                    temperatureMax.textContent = temp_max;
                    temperatureHumidity.textContent = humidity;
                    locationTimezone.textContent = data.sys.country;
                    temperatureDescription.textContent = data.weather[0].description;


                    iconApi.textContent = data.weather[0].icon;
                    const iconApi = `http://openweathermap.org/img/wn/${iconApi}@4x.png`;
                    console.log(iconApi);
                });
        });
    }


});