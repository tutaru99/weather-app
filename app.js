window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');
    let icon = document.querySelector('.icon');



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
                    const iconApi = `http://openweathermap.org/img/wn/${icon}@4x.png`;
                    //SET DOM ELEMENTS FOR API GET
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = data.weather[0].description;
                    icon.textContent = data.weather[0].icon;
                    locationTimezone.textContent = data.sys.country;
                    icon = data.weather[0].icon;
                });
        });
    }


});