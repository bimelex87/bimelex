const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";

const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip){
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function latLonUrl(lat,lon){
    return `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(url){
    return fetch(url).then(response => response.json())
                     .then(responseJson =>{
                        return {
                            main : responseJson.weather[0].main,
                            description : responseJson.weather[0].description,
                            temp :  Math.round((responseJson.main.temp-32)/1.8)
                        };
                     })
                     .catch(error => {
                        console.error(error);
                         }
                     );
}

function fetchZipForecast(zip){
    return fetchForecast(zipUrl(zip));
}

function fetchLatLonForecast(lat, lon){
    return fetchForecast(latLonUrl(lat,lon));
}

export default {
    fetchZipForecast : fetchZipForecast,
    fetchLatLonForecast : fetchLatLonForecast
};