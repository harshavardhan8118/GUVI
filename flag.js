const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all?fields=flags");
xhr.send();

xhr.responseType = "json";

xhr.onload = function displayResult(){
    const countries = xhr.response;
    console.log(countries);
    console.log("no.of countries flags: " + countries.length);
   
    for(let i = 0;i<countries.length;i++){
        console.log(countries[i].flags.png)
    }
};