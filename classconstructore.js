//class constructor

class car {
    constructor(brand,color,speed,model,price){
        this.brnad=brand;
        this.color=color;
        this.speed=speed;
        this.model=model;
        this.price=price;

    }
    output(){console.log("I need ${this.brand} car"\n"I need this ${this.color} one\nThe maximum speed of the vehical ${this.speed} \nI need the pariticular ${this.model} model\nIts around ${this.price})
    }
}
const finalout = new car("BMW","Blue","200ph","M4","20lakhs");
finalout.output();
