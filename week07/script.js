// Use cache
function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}

// IIFE
(function () {
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();



// Self Defining Function
function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

// If you assign it to a variable, the variable holds onto the first function, not the redefined one.
const beachParty = party; //<- assign party to a new variable
beachParty(); //When you call the function, the original function is changed

party(); //see? It has changed

beachParty(); //But the one in the variable isn't.
beachParty(); //No matter how many times you call it.


//Init Time Branching

function ride() {
    if (window.unicorn) {
        ride = function () {
            // some code that uses the brand new and sparkly unicorn
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function () {
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}

//Recursive Function Example
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Create a new promise
// const promise = new Promise((resolve, reject) => {
//     // initialization code goes here
//     if (success) {
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });


// Dice example of promise and then
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

const newPromise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n): reject(n);
    }, n * 1000);
});

newPromise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );

//Async function example:

async function loadGame(userName) {
    try {
    const user = await login(userName);
    const info = await getPlayerInfo (user.id);
    // load the game using the returned info
    }
    catch (error){
    throw error;
    }
    }

//Generalized Function Example:
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
    [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
    }
    random(6);

    random(10,20);

//Functions that create functions and closures
function outer() {
    const outside = 'Outside!';
    function inner() {
    const inside = 'Inside!';
    console.log(outside);
    console.log(inside);
    }
    return inner;
    }

    const closure = outer();

//A counter: i increases every time the function is called.
function counter(start){
    let i = start;
    return function() {
    return i++;
    }
    }

const count = counter(1);

//Generator example:
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
    [prev, current] = [current, prev + current];
    yield current;
    }
    }
    //Every time the code is run, the next value is calculated.
const sequence = fibonacci(1, 1);
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

//Higher Order Function Example
function multiplier(x){
    return function(y){
    return x*y;
    }
    }

doubler = multiplier(2);

//Curry Function Example:
function curry(func,...oldArgs) {
    return function(...newArgs) {
    const allArgs = [...oldArgs,...newArgs];
    return func(...allArgs);
    }
    }

//fetch example: 
fetch('https://example.com/data').then(//Code that handles response.
).catch(// code that runs if the server returns an error.
)

//Using headers, request, and response objects

const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding': 'gzip,deflate' });

const request = (url, {
    headers: headers
})

fetch(request)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error (response.statusText);
})
.then( response => 'Do something here ')
.catch( error => console.log('There was an error!'))