console.log(window.location)

function go() {
    window.history.go(1); // goes forward 1 page
    window.history.go(0); // reloads the current page
    window.history.go(-1); // goes back 1 page
}

function openWindow() {
    window.open('https://sitepoint.com', 'New Window', 'width=400, height=400, resizable=yes').moveTo(500, 50)

}

console.log('Height:', window.screen.height)
console.log('Width:', window.screen.width)

//availHeight could be useful for fixing incompatability between emulator and actual phone that I was running into.
console.log('Available Height:', window.screen.availHeight)
console.log('Available Width:', window.screen.availWidth)

function createCookies() {
    document.cookie = 'name=Superman';
    document.cookie = 'hero=true';

    document.cookie = 'name=Batman';
    document.cookie = 'city=Gotham';

    const cookies = document.cookie.split(';');
    for (crumb of cookies) {
        const [key, value] = crumb.split("=");
        console.log(`The value of ${key} is ${value}`)
    }

    // Create expiration date for cookie

    const expiryDate = new Date();
    const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
    expiryDate.setTime(tomorrow);

    document.cookie = `name=Batman; expires=${expiryDate.toUTCString()}`;

    // Make it so any path in the root directory can read the cookie.
    document.cookie = 'name=Batman; path=/'
}

createCookies()

function timings() {
    // settimeout
    id = window.setTimeout(() => console.log("Time's up!"), 3000)

    // Prevent timeout from happening
    window.clearTimeout(id);
}

timings()

// Set interval

function chant() {
    console.log("Beetlejuice");
}

const summon = window.setInterval(chant, 3000)
// stop it
window.clearInterval(summon)


// animation
function animateIt() {
    const squareElement = document.getElementById('square');
    let angle = 0;
    setInterval(() => {
        angle = (angle + 2) % 360;
        squareElement.style.transform = `rotate(${angle}deg)`
    }, 1000 / 60);
}

// New and  improved animation function

function animateItBetter() {
    const squareElement = document.getElementById('square');
    let angle = 0;

    function rotate() {
        angle = (angle + 2) % 360;
        squareElement.style.transform = `rotate(${angle}deg)`
        window.requestAnimationFrame(rotate);
    }
    const id = requestAnimationFrame(rotate);
}

// Access dataset

function accesData() {
    const superman = document.getElementById('hero');
    const powers = superman.dataset.powers;
    console.log("data powers: ", powers);
}

// Geolocation api
navigator.geolocation.getCurrentPosition(youAreHere);

function youAreHere(position) {
    console.log("latitude:", position.coords.latitude)
    console.log("longitude:", position.coords.longitude)
}

// You can watch position too
const place = navigator.geolocation.watchPosition(youAreHere);

// Stop watching
navigator.geolocation.clearWatch(place)


// Web workers:
// Note: Chrome doesn't like you to use this from local files

function webWorkers() {
    // Give it the name of a js file to run in the background
    const worker = new Worker('task.js');
    // self refers to the worker
    // message to the worker
    worker.postMessage('Hello');
    // Message from the worker
    self.postMessage('Finished')
    worker.addEventListener('message', (event) => {
        console.log(event.data);
    })
    worker.terminate() //Same as self.close()

}

webWorkers()


// An example
const btn = document.getElementById('rainbow');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7 *
        Math.random())];
}
btn.addEventListener('click', change);

const form = document.forms[0];
form.addEventListener('submit', factorize, false);

function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();
    const number = Number(form.number.value);
    document.getElementById('output').innerText = factorsOf(number);
}

function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

// Use web workers to run the factorizing in the background. This won't work well on localhost though.

// Web sockets
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('newOutput');
const newForm = document.forms[1];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

newForm.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = newForm.message.value
    output(`Sent: ${text}`);
    connection.send(text);
}

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

// Request permission to send notifications

if (window.Notification) {
    Notification.requestPermission()
        .then((permission) => {
            if (Notification.permission === 'granted') {
                notification = new Notification('Hello JavaScript!');
                notification.addEventListener('click', () => {
                    window.open('https://sitepoint.com')
                    }, false);
            }
        });
}