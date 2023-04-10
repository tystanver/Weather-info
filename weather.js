const apiKey = 'b341658ee905a6ce1a9fe07dae54f07c';
const inputId = document.getElementById('city-name');
const container = document.getElementById('item-container');
const lodingText = document.getElementById('loading-text');
const city = document.getElementById('capital');
const deg = document.getElementById('temparature');

const loadTemparatuere = () => {

    const searchText = inputId.value;
    inputId.value = '';
    if (searchText == '') {
        alert(`Please write your city name`)
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`;
        lodingText.classList.remove("hidden");
        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayTemp(data)
                console.log(data)
                lodingText.classList.add("hidden")
                if (searchText != data.name) {
                    lodingText.classList.add("hidden")
                    alert(`Please write correcttly `)
                }
                else {

                }
            })
    }


}


const displayTemp = data => {
    if (data.name === undefined) {
        city.innerText = 'Dhaka'
    }
    else {
        city.innerText = data.name;
        deg.innerText = data.main?.temp;
    }

}


// const displayTemp = (temparature) => {
//     const city = document.getElementById('capital');
//     city.innerText = `${temparature.name}`;
// }

// https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=b341658ee905a6ce1a9fe07dae54f07c&units=metric


// const loadData = () => {
//     const searchText = inputId.value;
//     console.log(searchText)
//     inputId.value = '';

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`;
//     console.log(url);
//     lodingText.classList.remove("hidden")
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             displayTemp(data)
//             // lodingText.classList.add("hidden")
//         })
//     console.log(data)

// }
// const displayTemp = (names) => {
//     names.map(name => {
//         city.innerText = `${name.name}`
//     })
// }


