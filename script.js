const countries = [
    {
        flag:"https://flagcdn.com/bg.svg",
        name: "Bulgaria",
        capital:"Sofia",
        region:"Europe",
        countryCodes:"BUL",
        Latlng : ["41.0","20.0"]
    },
    {
        flag:"https://flagcdn.com/bg.svg",
        name: "India",
        capital:"Sofia",
        region:"Europe",
        countryCodes:"BUL",
        Latlng : ["41.0","20.0"]
    },
    {
        flag:"https://flagcdn.com/bg.svg",
        name: "Germany",
        capital:"Sofia",
        region:"Europe",
        countryCodes:"BUL",
        Latlng : ["41.0",
        "20.0"]
    }

];
       

function createCountries(countries){
    countries.forEach((country) => {
        document.body.innerHTML += `<div class="country-container">
            <img src="${country.flags.svg}" />
            <div class = "content-container">
                <h2>${country.name.common}</h2>
                <p><span>Capital:</span>${country.capital}</p>
                <p><span>Region:</span>${country.region}</p>
                <p><span>Country codes:</span>${country.cioc}</p>
                <p><span>Latlng:</span>${country.latlng}</p>                
            </div>
        </div>`;       
    });
}

fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>createCountries(countries))
.catch((errMsg)=>console.log("error occured:"));
