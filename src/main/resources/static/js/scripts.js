function apiCaller(endpoint, data, returnElementId) {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById(returnElementId).innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}

function addHandler(event) {
    event.preventDefault();
    const augend = document.getElementById('augend').value;
    const addend = document.getElementById('addend').value;
    apiCaller('/add', { "augend": augend, "addend": addend }, 'addResult');
}

function divideHandler(event) {
    event.preventDefault();
    const dividend = document.getElementById('dividend').value;
    const divisor = document.getElementById('divisor').value;
    apiCaller('/divide', { "dividend": dividend, "divisor": divisor }, 'divideResult');
}

function intersectHandler(event) {
    event.preventDefault();
    const left = document.getElementById('set1').value.split(',').map(Number);
    console.log(left);
    const right = document.getElementById('set2').value.split(',').map(Number);
    const data = { "left": left, "right": right };
    console.log(data);
    apiCaller('/intersect', data , 'intersectResult');
}

function maxHandler(event) {
    event.preventDefault();
    const numbers = document.getElementById('maxnumbers').value.split(',').map(Number);
    apiCaller('/max', { "numbers": numbers }, 'maxResult');
}

function minHandler(event) {
    event.preventDefault();
    const numbers = document.getElementById('minnumbers').value.split(',').map(Number);
    apiCaller('/min', { "numbers": numbers }, 'minResult');
}

function multiplyHandler(event) {
    event.preventDefault();
    const multiplicand = document.getElementById('multiplicand').value;
    const multiplier = document.getElementById('multiplier').value;
    apiCaller('/multiply', { "multiplicand": multiplicand, "multiplier": multiplier }, 'multiplyResult');
}

function subtractionHandler(event) {
    event.preventDefault();
    const minuend = document.getElementById('minuend').value;
    const subtrahend = document.getElementById('subtrahend').value;
    apiCaller('/subtract', { "minuend": minuend, "subtrahend": subtrahend }, 'subtractResult');
}

//Event Listeners
document.querySelector('form[action="/add"]').addEventListener('submit', addHandler);
document.querySelector('form[action="/divide"]').addEventListener('submit', divideHandler);
document.querySelector('form[action="/intersect"]').addEventListener('submit', intersectHandler);
document.querySelector('form[action="/max"]').addEventListener('submit', maxHandler);
document.querySelector('form[action="/min"]').addEventListener('submit', minHandler);
document.querySelector('form[action="/multiply"]').addEventListener('submit', multiplyHandler);
document.querySelector('form[action="/subtract"]').addEventListener('submit', subtractionHandler);