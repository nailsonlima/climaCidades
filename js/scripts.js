// 9b24105f78188588a9ed3ff6ea92d5ef key wather
const apiKey = "9b24105f78188588a9ed3ff6ea92d5ef";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

// FUNÇÕES
const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
}


const showWeaherData = (city) =>{

    getWeatherData(city)

}


// EVENTOS
searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()

    const city = cityInput.value

    showWeaherData(city)

})