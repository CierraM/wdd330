const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

export function getJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getLocation = async function(options={
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};