//Read input and put it in a div
function readInput() {
    const input = document.querySelector('#input').value;
    document.getElementById('output').textContent = input;
}

//Sum up all the numbers up to the number provided
let sumUp = (num) => {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

function callSum() {
    const input = parseInt(document.querySelector('#inputSum').value);
    document.getElementById('sumOutput').textContent = sumUp(input);
}


//Adding Machine
let add = (num1, num2) => num1 + num2;

function callAdd() {
    const input1 = parseFloat(document.querySelector('#num1').value);
    const input2 = parseFloat(document.querySelector('#num2').value);
    document.getElementById('addOutput').textContent = add(input1, input2);
}

//Lets make subract, multiply, and divide as well.
let sub = (num1, num2) => num1 - num2;

function callSub() {
    const input1 = parseFloat(document.querySelector('#num1').value);
    const input2 = parseFloat(document.querySelector('#num2').value);
    document.getElementById('addOutput').textContent = sub(input1, input2);
}

let mul = (num1, num2) => num1 * num2;

function callMul() {
    const input1 = parseFloat(document.querySelector('#num1').value);
    const input2 = parseFloat(document.querySelector('#num2').value);
    document.getElementById('addOutput').textContent = mul(input1, input2);
}

let fra = (num1, num2) => num1 / num2;

function callFra() {
    const input1 = parseFloat(document.querySelector('#num1').value);
    const input2 = parseFloat(document.querySelector('#num2').value);
    document.getElementById('addOutput').textContent = fra(input1, input2);
}


//More efficient version of the calculator
function clickFunction(e) {
    let operator = e.target.id;
    let num1 = parseFloat(document.getElementById('num3').value);
    let num2 = parseFloat(document.getElementById('num4').value);

    let result = 0;

    if (operator == 'add1') {
        result = num1 + num2;
    } else if (operator == 'sub1') {
        result = num1 - num2;
    } else if (operator == 'mul1') {
        result = num1 * num2;
    } else if (operator == 'fra1') {
        result = num1 / num2;
    }

    document.getElementById('superOutput').textContent = result;
}

document.getElementById('add1').addEventListener('click', clickFunction);
document.getElementById('sub1').addEventListener('click', clickFunction);
document.getElementById('mul1').addEventListener('click', clickFunction);
document.getElementById('fra1').addEventListener('click', clickFunction);