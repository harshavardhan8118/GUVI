const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all?fields=name,region,subregion,population");
xhr.send();

xhr.responseType = "json";

xhr.onload = function displayResult(){
    const countries = xhr.response;
    console.log(countries);
    console.log("no.of countries : " + countries.length);
    for(let i = 0;i<countries.length;i++){
        console.log("Country : " +countries[i].name.common)
        console.log("Region : " + countries[i].region )
        console.log("Sub-region : " + countries[i].subregion )
        console.log("Total Population : " +    countries[i].population )
    }
};