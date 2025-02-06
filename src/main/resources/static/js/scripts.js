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
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    apiCaller('/max', { "numbers": numbers }, 'maxResult');
}

document.querySelector('form[action="/add"]').addEventListener('submit', addHandler);
document.querySelector('form[action="/divide"]').addEventListener('submit', divideHandler);
document.querySelector('form[action="/intersect"]').addEventListener('submit', intersectHandler);
document.querySelector('form[action="/max"]').addEventListener('submit', maxHandler);