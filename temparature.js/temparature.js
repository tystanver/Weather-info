const key = 'b341658ee905a6ce1a9fe07dae54f07c';
const inputId = document.getElementById('city-name');
const container = document.getElementById('item-container');
const lodingText = document.getElementById('loading-text');
const city = document.getElementById('capital');
const deg = document.getElementById('temparature');
const searchTemp = () => {
    const text = inputId.value;
    inputId.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
searchTemp()