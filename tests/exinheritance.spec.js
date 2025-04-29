class car{
    constructor(name,model,year){
    this.name=name;
    this.model=model;
    this.year=year;
    }
    con(){
        console.log(this.name, this.model, this.year);
    }
}
class Electriccar extends car{
    constructor(name,model,year,color){
        super(name,model,year);
        this.color=color;
    }
    in(){
        console.log(`${this.color}`);
    }
}
let vehicle= new Electriccar("BMW","Model S","1990","Orange");
let vehicle1= new Electriccar("Hyundai","Model K","2000","Green");
vehicle.con();
vehicle.in();
vehicle1.con();
vehicle1.in();
