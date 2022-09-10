let regionName = "Asia";
let population = "200000"; 
const api_Url = "https://restcountries.com/v3.1/all";
let totalPopulation;
let regionBased_Country = [];
let populationBased_Country = [];
let getDetails = [];
let dollerBased_Country = [];
let request=new XMLHttpRequest();
request.open('Get',api_Url);


const fetchCountryUsingRegion = (region) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(elm => {
                if(elm.continents[0] == region){
                    regionBased_Country.push(elm.name.common);            
                }
            });
            console.log(regionBased_Country);   
        }
    };
    request.send();    
}




const fetchCountryUsingPopulation = (count) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(elm => {                
                if(elm.population < count){                   
                    populationBased_Country.push(elm.name.common);                    
                }
            });   
            console.log(populationBased_Country);
        }
    };
    request.send();    
}



const fetchDetails = (count) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.forEach(elm => {                
                let objData = {};
                objData.name = elm.name.common;
                objData.flag = elm.flag;
                objData.capital = elm.capital;
                getDetails.push(objData);
            });   
            console.log(getDetails);
        }
    };
    request.send();    
}


const getPopulation = (count) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            totalPopulation = data.reduce((sum,elm) => {                              
                return sum+elm.population ;
            },0); 
            
            console.log(totalPopulation);
        }
    };
    request.send();    
}


const fetchCountryUsingDoller = () => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(elm => {                
                if(typeof(elm.currencies) != "undefined" && elm.currencies.hasOwnProperty("USD")){                 
                    dollerBased_Country.push(elm.name.common);
                }                           
            });   
            console.log(dollerBased_Country);
        }
    };
    request.send();    
}
fetchCountryUsingRegion();
fetchDetails();
fetchCountryUsingDoller();
