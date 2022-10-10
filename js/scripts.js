// 9b24105f78188588a9ed3ff6ea92d5ef key wather
const apiKey = "9b24105f78188588a9ed3ff6ea92d5ef";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

// FUNÇÕES
const showWeaherData = (city) =>{

    console.log(city)

}


// EVENTOS
searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()

    const city = cityInput.value

    showWeaherData(city)

})