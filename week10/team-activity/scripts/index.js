import {
    getJSON,
    getLocation
} from './utilities.js';

import QuakesController from './QuakesController.js';

let baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

let location = await getLocation(options)
    .then(response => {
        let latitude = response.coords.latitude;
        let longitude = response.coords.longitude;

        baseUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
    });

let quakesController = new QuakesController('#quakeList');
quakesController.init();