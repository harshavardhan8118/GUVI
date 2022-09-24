const countries = [
    {
        flag:"https://flagcdn.com/bg.svg",
        name: "Bulgaria",
        capital:"Sofia",
        region:"Europe",
        countryCodes:"BUL",
        Latlng : ["41.0","20.0"],
        weather : ["https://api.openweathermap.org/data/2.5/weather?lat=41.0&lon=20.0&appid=217679a74694707c723b207acbd39227"] 
    },
    {
        flag:"https://flagcdn.com/bg.svg",
        name: "India",
        capital:"Sofia",
        region:"Europe",
        countryCodes:"BUL",
        Latlng : ["41.0","20.0"],
        weather : ["https://api.openweathermap.org/data/2.5/weather?lat=41.0&lon=20.0&appid=217679a74694707c723b207acbd39227"]
    },
    {
        flag:"https://flagcdn.com/bg.svg",
        name: "Germany",
        capital:"Sofia",
        region:"Europe",
        countryCodes:"BUL",
        Latlng : ["41.0","20.0"],
        weather : ["https://api.openweathermap.org/data/2.5/weather?lat=41.0&lon=20.0&appid=217679a74694707c723b207acbd39227"]
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
                <p><a href="https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=217679a74694707c723b207acbd39227">weather</a></p> 
                         
            </div>
        </div>`;       
    });
}




fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>createCountries(countries))
.catch((errMsg)=>console.log("error occured:"));

