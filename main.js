const input = document.querySelector('input');
const btn = document.querySelector('button');
let condition = '';
let icon = '';
let temp = '';
let info = null;

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(info) {
        info.remove();
    }
    const inputValue = input.value;
    displayWeather(inputValue);
    input.value = '';
});

function displayWeather(location) {
    fetch('https://api.weatherapi.com/v1/current.json?key=e6ec4929a0fc40c7845161348232810&q=' + location)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        condition = data.current.condition.text;
        icon = data.current.condition.icon;
        temp = data.current.temp_c;
        loc = data.location.name;
        country = data.location.country;
        
        const container = document.querySelector('.container');

        info = document.createElement('div');
        const one = document.createElement('h2');
        one.textContent = condition;
        const two = document.createElement('img');
        two.src = icon;
        const three = document.createElement('h4');
        three.textContent = `${temp}°C`;
        const four = document.createElement('h5');
        four.textContent = loc;
        const five = document.createElement('h5');
        five.textContent = country;

        info.appendChild(one);
        info.appendChild(two);
        info.appendChild(three);
        info.appendChild(four);
        info.appendChild(five);

        container.appendChild(info);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
