let regionName = "Asia";
let population = "200000"; 
const api_Url = "https://restcountries.com/v3.1/all";
let totalPopulation;
let regionBased_Contry = [];
let populationBased_Contry = [];
let getDetails = [];
let dollerBased_Country = [];
let request=new XMLHttpRequest();
request.open('Get',api_Url);


const fetchCountryUsingRegion = () => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(a => {
                if(a.continents[0] == region){
                    regionBased_Contry.push(a.name.common);            
                }
            });
            console.log(regionBased_Contry);   
        }
    };
    request.send();    
}

fetchCountryUsingRegion();


const fetchCountryUsingDollar = () => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(a => {                
                if(typeof(a.currencies) != "undefined" && a.currencies.hasOwnProperty("USD")){                 
                    dollerBased_Country.push(a.name.common);
                }                           
            });   
            console.log(dollerBased_Country);
        }
    };
    request.send()    
}
fetchCountryUsingDollar();
