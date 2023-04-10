const key = 'b341658ee905a6ce1a9fe07dae54f07c';
const inputId = document.getElementById('city-name');
const container = document.getElementById('item-container');
const lodingText = document.getElementById('loading-text');
const city = document.getElementById('capital');
const deg = document.getElementById('temparature');
const searchItem = () => {
    const searchtext = inputId.value;
    inputId.value = '';
    if (searchtext === '') {
        alert('Please Enter a City Name')
    }
    else {
        lodingText.classList.remove('hidden')
        url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&appid=${key}&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                show(data)
                lodingText.classList.add('hidden')

            })
        console.log(data)
    }



}
const show = (data) => {
    if (data.name == undefined) {
        city.innerText = 'Wrong keyword'
        deg.innerText = '0.0'
    }
    else {
        city.innerText = data.name;
        deg.innerText = data.main.temp;
    }

}