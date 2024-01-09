const url = 'https://api.openweathermap.org/data/2.5/'
const apiKey = '3e4b56f0b9cfaf89048836fc3f625a31'


const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
    fetch(query).then(weather => {
        return weather.json()
    })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    // let desc = document.querySelector('.desc')
    // desc.innerText = result.weather[0].description

    let desc = document.querySelector('.desc');
    let weatherDescription = result.weather[0].description;
    let capitalizedDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
    desc.innerText = capitalizedDescription;


    let minMax = document.querySelector('.minMax')
    minMax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)