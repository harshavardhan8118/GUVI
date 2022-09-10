let movieDetails = [];
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        this.setPG();
    }
    
    setPG(){
        var obj = {};
        obj.title = this.title;
        obj.studio = this.studio;
        obj.rating = this.rating == "" ? "PG" : this.rating ;
        movieDetails.push(obj);  
    }

    getPG(){
       let result =  movieDetails.filter(x => ( x.title.toLowerCase()  && x.rating === "PG"));
       return result;
    }
}
let One = new Movie("Casino Royale","Eon Productions","PG­13");
let Two = new Movie("007","Eon Productions","PG");
console.log(One)
console.log(One.getPG())
