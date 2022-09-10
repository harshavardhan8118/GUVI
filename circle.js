class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    setRadius(radius){
       this.radius = radius;
    }

    getRadius(){
        return parseFloat(this.radius);
    }

    setColor(color){
        this.color = color;
    }

    getColor(color){
        return this.color;
    }

    toString(){    
        return `${this.radius} ${this.color}`;
    }

    getArea(){
        return parseFloat(Math.PI * this.radius * this.radius);
    }

    getCircumference (){
        return parseFloat( (2 * Math.PI) * this.radius);
    }
}

let a = new Circle(10,"RED");
console.log("toString: "+a.toString());
a.setRadius(25.3);
console.log("getRadius: "+a.getRadius().toFixed(2));
a.setColor("WHITE");
console.log("getColor: "+a.getColor());
console.log("getArea: "+a.getArea().toFixed(2));
console.log("getColor: "+a.getCircumference().toFixed(2));
console.log("toString: "+a.toString());